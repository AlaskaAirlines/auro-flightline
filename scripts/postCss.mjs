import autoprefixer from 'autoprefixer';
import postcss from 'postcss';
import postcssCustomProperties from 'postcss-custom-properties';
import comments from 'postcss-discard-comments';
import fs from 'fs';

const cssFiles = ['style-flight-segment', 'style-flightline']

cssFiles.map(name => fs.readFile(`src/${name}.css`, (err, css) => {
  postcss([autoprefixer, postcssCustomProperties, comments])
    .use(comments({
      remove: function(comment) { return comment[0] == "@"; }
    }))
    .process(css, { from: `src/${name}.css`, to: `src/${name}.css` })
    .then(result => {
      fs.writeFile(`src/${name}.css`, result.css, () => true)
      if ( result.map ) {
        fs.writeFile(`src/${name}.map`, result.map.toString(), () => true)
      }
    })
  }));
