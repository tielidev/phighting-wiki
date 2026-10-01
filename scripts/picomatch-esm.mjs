import { createRequire } from 'node:module';

// Astro 7's Vite runner executes transitive dependencies as ESM while
// picomatch 4 is CommonJS. Load it through Node's native CJS bridge so
// content collection sync works with pnpm's dependency layout.
const require = createRequire(import.meta.url);

export default require('picomatch');
