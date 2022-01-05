import babel from 'rollup-plugin-babel'
import resolve from '@rollup/plugin-node-resolve'
import { terser } from 'rollup-plugin-terser'
import external from 'rollup-plugin-peer-deps-external'
import alias from '@rollup/plugin-alias'

export default [
  {
    input: '@/index',
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

      external(),
      resolve(),
      terser(),
    ],
  },
]
