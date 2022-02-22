import type { Options } from 'tsup'

export const tsup: Options = {
  entry: ['./src/*.{ts,tsx}'],
  format: ['cjs', 'esm'],
  dts: true,
  splitting: true,
  clean: true,
  external: ['@notionhq/client'],
}
