/* eslint-env node */
'use strict';

const path = require('path');
const fs   = require('fs');

module.exports = {
  normalizeEntityName: function () { },

  afterInstall: function () {
    const stylePath       = path.join('app', 'styles');
    const file            = path.join(stylePath, `app.scss`);
    const folders         = [ 'base', 'components', 'elements', 'grid', 'utilities' ];

    const importStatement = folders.map(function(folder) {
      return `@import "ember-bulma-css/${folder}/_all";`;
    }).join('\n');

    if (!fs.existsSync(stylePath)) {
      fs.mkdirSync(stylePath);
    }

    if (fs.existsSync(file)) {
      this.ui.writeLine(`Added import statement to ${file}`);
      return this.insertIntoFile(file, importStatement, {});
    } else {
      fs.writeFileSync(file, importStatement);
      this.ui.writeLine(`Created ${file}`);
    }

    return this.addPackagesToProject([
      { name: 'bulma', target: '^0.5.3' },
      { name: 'ember-cli-sass', target: '^6.1.2' }
    ]);
  }
};
