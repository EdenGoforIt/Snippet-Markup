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
# Troubleshooting: Metro Config ESM Error on Windows

## The Issue
**Error:** `ERR_UNSUPPORTED_ESM_URL_SCHEME`
**Location:** `expo-doctor` or `npx expo start`

### Error Log
> `Error [ERR_UNSUPPORTED_ESM_URL_SCHEME]: Error loading Metro config at: C:\Users\...\metro.config.js`
> `Only URLs with a scheme in: file, data, and node are supported. Received protocol 'c:'`

---

## Root Causes
1. **Windows Path Conflict:** Node.js (ESM loader) incorrectly interprets the Windows drive letter `C:` as a URL protocol.
2. **File Placement:** The `metro.config.js` is located in the `/src` folder instead of the project root.
3. **Node.js Version:** Incompatibility between Node's ESM logic and Metro's config resolution.

---

## Solutions

* **Action:** Remove `metro.config.js`if not used
* **Note:** Ensure it is moved to the **project root** directory (outside of `/src`).
* **Node Version** Make sure that you use the right Node version
