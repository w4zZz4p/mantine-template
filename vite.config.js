import { resolve } from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import postCssAutoprefixerPlugin from 'autoprefixer';
import postcssPresetMantine from 'postcss-preset-mantine';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    root: 'src',
    publicDir: '../public',
    build: {
        outDir: '../build',
        sourcemap: true,
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
