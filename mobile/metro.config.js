const { getDefaultConfig } = require("expo/metro-config");

const config = getDefaultConfig(__dirname);

// Destructure resolver and transformer to safely update arrays
const { assetExts, sourceExts } = config.resolver;

config.transformer.babelTransformerPath = require.resolve("react-native-svg-transformer");

config.resolver.assetExts = assetExts.filter(ext => ext !== "svg");
config.resolver.sourceExts = [...sourceExts, "svg", "cjs"];

module.exports = config;
