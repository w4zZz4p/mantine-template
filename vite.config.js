import { resolve } from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import postCssAutoprefixerPlugin from 'autoprefixer';
import postcssPresetMantine from 'postcss-preset-mantine';

export default defineConfig({
    plugins: [react()],
    root: 'src',
    publicDir: '../public',
    envPrefix: 'APP_',
    build: {
        outDir: '../server/build',
        sourcemap: true,
    },
    server: {
        port: 8080,
        host: true,
    },
    resolve: {
        alias: {
            '@app': resolve(__dirname, 'src/'),
            '@public': '',
        },
    },
    css: {
        modules: {
            localsConvention: 'camelCaseOnly',
            generateScopedName: '[path][name]_[local]', // devValue('[path][name]_[local]', '[hash:base64:5]'),
        },
        postcss: {
            plugins: [postcssPresetMantine(), postCssAutoprefixerPlugin()],
        },
        devSourcemap: true,
    },
});
