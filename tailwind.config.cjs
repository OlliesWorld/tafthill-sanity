/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./public/**/*.html',
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			textShadow: {
				'custom': '1px 1px 1px #00593E, 2px 2px 1px #00593E, 3px 3px 1px #00593E, 4px 4px 1px #00593E, 5px 5px 1px #00593E, 6px 6px 1px #00593E, 7px 7px 1px #00593E, 8px 8px 1px #00593E, 25px 25px 8px rgba(0,0,0, 0.2)',
			  },
			rotate: {
			  '45': '45deg',
			},
			translate: {
			  '2': '0.5rem',
			},
			transformStyle: {
				'preserve-3d': 'preserve-3d',
			  },
			  backfaceVisibility: {
				'hidden': 'hidden',
			  },
		  },
		colors: {
		  transparent: 'transparent',
		  black: 'rgba(45,42,42,1);',
		  white: 'rgba(255,255,255,1)',
		  green: '#1b2911',
		  tan: 'rgba(236,235,232,1)',
		  darktan: 'rgba(145,96,51,1)',
		  red: 'rgba(255,0,0,1)',
		},
		borderRadius: {
		  'none': '0',
		  'sm': '0.125rem',
		  DEFAULT: '0.25rem',
		  DEFAULT: '4px',
		  'md': '0.375rem',
	
		  'lg': '5.5rem',
		}
	  },
	plugins: [
		function ({ addUtilities }) {
			addUtilities({
				'.transform-style-preserve-3d': {
					'transform-style': 'preserve-3d',
				  },
				  '.backface-hidden': {
					'backface-visibility': 'hidden',
				  },
				  '.rotate-x-180': {
					'transform': 'rotateX(180deg)',
				  },
				  '.perspective-1000': {
					'perspective': '1000px',
				  },
			  '.text-shadow-custom': {
				textShadow: '1px 1px 1px #00593E, 2px 2px 1px #00593E, 3px 3px 1px #00593E, 4px 4px 1px #00593E, 5px 5px 1px #00593E, 6px 6px 1px #00593E, 7px 7px 1px #00593E, 8px 8px 1px #00593E, 25px 25px 8px rgba(0,0,0, 0.2)',
			  },
			});
		  },
	],
}
