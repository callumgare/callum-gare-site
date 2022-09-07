const autoprefixer = require('autoprefixer');

const config = {
	plugins: [
		autoprefixer,
		{
			postcssPlugin: true,
			Declaration: {
			  'font-display': (node) => {
				if (node.parent.name === 'font-face' && node.parent.type === 'atrule') node.value = 'block'
			  }
			}
		}
	]
};

module.exports = config;
