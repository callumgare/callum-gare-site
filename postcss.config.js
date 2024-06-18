import autoprefixer from 'autoprefixer';
import postcssNesting from 'postcss-nesting';

export default {
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
