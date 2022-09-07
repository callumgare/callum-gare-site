const autoprefixer = require('autoprefixer');
const postcssNesting = require('postcss-nesting');

const config = {
	plugins: [
		autoprefixer,
		postcssNesting,
		{
			postcssPlugin: true,
			Declaration: {
				'font-display': (node) => {
					if (node.parent.name === 'font-face' && node.parent.type === 'atrule')
						node.value = 'block';
				}
			}
		}
	]
};

module.exports = config;
