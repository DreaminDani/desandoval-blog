import svelte from 'rollup-plugin-svelte';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import { terser } from 'rollup-plugin-terser';
import css from 'rollup-plugin-css-only';

const production = !process.env.ROLLUP_WATCH;

export default ['iam', 'portfolio'].map((name, index) => ({
	input: `svelte/${name}/main.js`,
	output: {
		sourcemap: true,
		format: 'iife',
		name: 'app',
		file: `static/svelte/${name}.js`
	},
	plugins: [
		svelte({
			// enable run-time checks when not in production
			dev: !production,
		}),

		// we'll extract any component CSS out into
		// a separate file — better for performance
		css({ output: `${name}.css` }),

		// If you have external dependencies installed from
		// npm, you'll most likely need these plugins. In
		// some cases you'll need additional configuration —
		// consult the documentation for details:
		// https://github.com/rollup/rollup-plugin-commonjs
		resolve({
			browser: true,
			dedupe: importee => importee === 'svelte' || importee.startsWith('svelte/')
		}),
		commonjs(),

		// If we're building for production (npm run build
		// instead of npm run dev), minify
		production && terser()
	],
	watch: {
		clearScreen: false,
		include: 'svelte/**'
	}
}));
