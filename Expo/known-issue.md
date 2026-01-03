# Index



## Babel Config Issues

**Error:** `expo-router\entry.js: .plugins is not a valid Plugin property`
**Fix:** Remove the `.expo` folder and ensure `react-native-reanimated/plugin` is the last entry.

### Recommended `babel.config.js`

```javascript
module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      "nativewind/babel",
      "react-native-reanimated/plugin",
    ],
  };
};
