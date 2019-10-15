# react-native-eslint-config
Opinionated eslint rules for React Native apps

## Usage

Due [Issue#3458](https://github.com/eslint/eslint/issues/3458) you must install the peer dependencies.

#### Option A

You can follow same process as described in [what Airbnb is doing with eslint-config-airbnb](https://www.npmjs.com/package/eslint-config-airbnb). Just list dependencies using

```
npm info "eslint-config-with-attitude" peerDependencies
```

#### Option B

Use bin executable script included within this repository to link/unlink peer dependencies after installing this package. (Requires PHP available on the machine. Sorry Ia am still not friend with Node on the CLI side.)

```
yarn eslint-config-with-attitude-linker link
```

---

## Upgrading

1. Run unlink before upgrading:
   ```
   yarn eslint-config-with-attitude-linker unlink
   ```
2. Upgrade e.g by re-adding the package:
   ```
   yarn add eslint-config-with-attitude
   ```
3. Run link after upgrading:
   ```
   yarn eslint-config-with-attitude-linker link
   ```
