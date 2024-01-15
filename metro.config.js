// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig, mergeConfig } = require("@react-native/metro-config");
const { getDefaultConfig: getExpoDefaultConfig } = require("expo/metro-config");

const defaultConfig = getDefaultConfig(__dirname);
const expoConfig = getExpoDefaultConfig(__dirname);

expoConfig.resolver = {
  ...expoConfig.resolver,
  enableGlobalPackages: true,
};

module.exports = mergeConfig(defaultConfig, expoConfig);
