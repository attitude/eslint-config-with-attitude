#!/usr/bin/php
<?php

function printLine($message = "") {
  echo "${message}\n";
}

function parsePackageJson ($dir) {
  return json_decode(file_get_contents($dir.'/'.PACKAGE_FILE_NAME), true);
}

function getPeerDependencies ($dir) {
  $package = parsePackageJson($dir);

  return $package['peerDependencies'];
}

function getDevDependencies ($dir) {
  $package = parsePackageJson($dir);

  return $package['devDependencies'];
}

define("PROJECT_WORKING_DIRECTORY", getcwd());
define("LIBRARY_WORKING_DIRECTORY", dirname(__FILE__));

if (LIBRARY_WORKING_DIRECTORY === PROJECT_WORKING_DIRECTORY) {
  printLine('Install as dependency and run');

  exit;
}

define('PACKAGE_FILE_NAME', 'package.json');

$libraryPeerDependencies = getPeerDependencies(LIBRARY_WORKING_DIRECTORY);
$projectDevDependencies = getDevDependencies(PROJECT_WORKING_DIRECTORY);

$isYarn = file_exists(PROJECT_WORKING_DIRECTORY.'/yarn.lock');

$packageManagerActions = [
  'install' => $isYarn ? 'yarn add %s --dev' : 'npm install %s --save-dev',
  'uninstall' => $isYarn ? 'yarn remove %s --dev ' : 'npm uninstall %s --save-dev',
];

$arguments = array_slice($argv, 1);
$action = array_shift($arguments);

switch ($action) {
  case 'link':
    $add = [];

    foreach ($libraryPeerDependencies as $peerDependency => $version) {
      if (!isset($projectDevDependencies[$peerDependency])) {
        printLine("[*] Adding devDependency: ${peerDependency}@${version}");
        $add[] = "${peerDependency}@${version}";
      } elseif ($projectDevDependencies[$peerDependency] !== $version) {
        // TODO: Use semver.satisfies
        printLine("[!] Changing devDependency: ${$peerDependency}@${version} (was {$projectDevDependencies[$peerDependency]})");
        $add[] = "${peerDependency}@${version}";
      }
    }

    if (count($add) > 0) {
      $command = sprintf(
        $packageManagerActions['install'],
        implode(" ", $add)
      );

      echo shell_exec($command);

      printLine('Done. Make sure to run unlink before removing/upgrading this package.');
    }

    exit;
  break;

  case 'unlink':
    $remove = [];

    foreach ($libraryPeerDependencies as $peerDependency => $version) {
      if (isset($projectDevDependencies[$peerDependency])) {
        if ($projectDevDependencies[$peerDependency] === $version) {
          printLine("[x] Removing devDependency: ${$peerDependency}@${version}");
          $remove[] = "${peerDependency}";
        } else {
          printLine("[!] Keeping devDependency: ${$peerDependency} (version changed, was ${version})");
        }
      }
    }

    if (count($remove) > 0) {
      $command = sprintf(
        $packageManagerActions['uninstall'],
        implode(" ", $remove)
      );

      echo shell_exec($command);
    }

    if (count($remove) !== count($libraryPeerDependencies)) {
      printLine('Some devDependencies were not unlinked. Versions did not match. See logs above.');
    }

    exit;
  break;
}

exit("Unknown action '${action}'. Allowed actions are `link` and `unlink`");
