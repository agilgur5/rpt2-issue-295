import typescript from 'rollup-plugin-typescript2';

export default {
  input: './index.ts',
  output: {
    file: 'bundle.js',
    format: 'cjs',
    exports: 'named',
  },
  plugins: [typescript({
    verbosity: 3,
  })]
};
