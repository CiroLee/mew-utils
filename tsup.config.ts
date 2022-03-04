import { defineConfig, Options } from 'tsup';

export default defineConfig((options: Options) => {
  return {
    entry: ['src/index.ts'],
    outDir: 'lib',
    format: ['esm'],
    dts: true,
    minify: true,
    watch: options.watch,
    clean: true,
    platform: 'browser',
  };
});
