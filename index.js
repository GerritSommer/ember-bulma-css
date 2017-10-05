/* eslint-env node */
'use strict';

const Funnel     = require('broccoli-funnel');
const mergeTrees = require('broccoli-merge-trees');

module.exports = {
  name: 'ember-bulma-css',

  isDevelopingAddon: function() {
      return true;
  },

  treeForStyles: function treeForStyles(tree) {
    const styleTrees = [];

    if (this.app.project.findAddonByName('ember-cli-sass')) {
      styleTrees.push(new Funnel('node_modules/bulma/sass', {
        destDir: 'ember-bulma-css'
      }));
    }

    if (tree) {
      styleTrees.push(tree);
    }

    return mergeTrees(styleTrees, { overwrite: true });
  },
};
