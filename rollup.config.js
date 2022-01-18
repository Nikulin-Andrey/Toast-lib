import babel from 'rollup-plugin-babel'
import resolve from '@rollup/plugin-node-resolve'
import { terser } from 'rollup-plugin-terser'
import external from 'rollup-plugin-peer-deps-external'
import alias from '@rollup/plugin-alias'
import image from '@rollup/plugin-image'
import commonjs from '@rollup/plugin-commonjs'
import filesize from 'rollup-plugin-filesize'

const path = require('path')
const customResolver = resolve({
  extensions: ['*', '.js', '.jsx'],
})
const projectRootDir = path.resolve(__dirname)

export default [
  {
    input: 'src/index',
    output: [
      {
        file: 'dist/index.js',
        format: 'cjs',
      },
      {
        file: 'dist/index.es.js',
        format: 'es',
        exports: 'named',
      },
    ],
    plugins: [
      babel({
        exclude: 'node_modules/**',
        presets: [
          '@babel/preset-react',
          '@babel/preset-env',
        ],
        runtimeHelpers: true,
        plugins: [
          '@babel/plugin-proposal-class-properties',
          'babel-plugin-styled-components',
          '@babel/plugin-transform-runtime',
          '@babel/plugin-proposal-optional-chaining',
        ],
      }),
      alias({
        resolve: ['*', '.js', '.jsx'],
        entries: [
          {
            find: '@',
            replacement: path.resolve(
              projectRootDir,
              'src',
            ),
            customResolver,
          },
        ],
      }),
      image(),
      external(),
      resolve(),
      // terser(),
      commonjs(),
      filesize(),
    ],
  },
]
