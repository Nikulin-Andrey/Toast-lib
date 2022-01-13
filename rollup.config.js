import babel from 'rollup-plugin-babel'
import resolve from '@rollup/plugin-node-resolve'
import { terser } from 'rollup-plugin-terser'
import external from 'rollup-plugin-peer-deps-external'
import alias from '@rollup/plugin-alias'
import svg from 'rollup-plugin-svg'
import commonjs from '@rollup/plugin-commonjs'
import filesize from 'rollup-plugin-filesize'

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
        entries: [{ find: '@', replacement: './src' }],
      }),
      svg(),
      external(),
      resolve(),
      // terser(),
      commonjs(),
      filesize(),
    ],
  },
]
