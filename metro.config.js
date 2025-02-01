const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');
const {withNativeWind} = require('nativewind/metro');

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('@react-native/metro-config').MetroConfig}
 */
const customConfig = {};

module.exports = withNativeWind(
    mergeConfig(getDefaultConfig(__dirname), customConfig),
    {
        input: './src/styles/global.css',
    },
);
