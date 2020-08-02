[![react-native version](https://img.shields.io/badge/react--native-0.60-green.svg?style=flat-square)](https://github.com/facebook/react-native/releases)
[![npm version](https://img.shields.io/npm/v/react-native-network-checker.svg?style=flat-square)](https://www.npmjs.com/package/react-native-network-checker)
[![npm downloads](https://img.shields.io/npm/dm/react-native-network-checker.svg?style=flat-square)](https://www.npmjs.com/package/react-native-network-checker)

# Quick start

### Installation
```
npm install --save react-native-network-checker
```
React Native Network Checker uses [``` @react-native-community/netinfo ```](https://github.com/react-native-community/react-native-netinfo) as a main dependency.

### Important
Install [``` @react-native-community/netinfo ```](https://github.com/react-native-community/react-native-netinfo) and follow the instructions to install and link the project to react native project.

#### Using React Native < 0.60

You then need to link the native parts of the library for the platforms you are using. The easiest way to link the library is using the CLI tool by running this command from the root of your project:

```
react-native link @react-native-community/netinfo
```
That's it. you're ready to go.

### Props


| Prop                         | Type     | Description                                                 | Default             |
| :--------------------------- | :------: | :---------------------------------------------------------: | :------------------ |
| position                     | `string` | `top` or `bottom`, Component to display                     | `bottom`            |
| connectedMessage             | `string` | Message to show when connected to internet                  | `Back Online`       |
| connectedTextColor           | `string` | Color of text when connected to internet                    | `white`             |
| connectedBackgroundColor     | `string` | Backgroundcolor of container when connected to internet     | `green`             |
| notConnectedMessage          | `string` | Message to show when not connected to internet              | `No Connection`     |
| notConnectedTextColor        | `string` | Color of text when not connected to internet                | `white`             |
| notConnectedBackgroundColor  | `string` | Backgroundcolor of container when not connected to internet | `grey`              |

## Contribution

- [@prabu01](mailto:prabu0reddy777@gmail.com) Author.

Contribution are welcome!. Please see the [contributing guide](/CONTRIBUTING.md)

## Questions

Feel free to [Contact me](mailto:prabu0reddy777@gmail.com) or [Create an issue](https://github.com/prabureddy/react-native-network-checker/issues/new)

## License

Released under the [Mit License](https://opensource.org/licenses/MIT)
