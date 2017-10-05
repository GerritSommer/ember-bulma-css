/* eslint-env node */
'use strict';

const path = require('path');
const fs   = require('fs');

module.exports = {
  normalizeEntityName: function () { },

  afterInstall: function () {
    const importStatement = `
      @import "ember-bulma-css/base/_all";
      @import "ember-bulma-css/components/_all";
      @import "ember-bulma-css/elements/_all";
      @import "ember-bulma-css/grid/_all";
      @import "ember-bulma-css/utilities/_all";
    `;

    const stylePath       = path.join('app', 'styles');
    const file            = path.join(stylePath, `app.scss`);

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
