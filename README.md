# ember-bulma-css

This Ember addon creates a shim to import the sass files from
[Bulma.io](http://bulma.io/) in its own namespace.

I created this addon to avoid collisions in import statements:

use
```sass
@import "ember-bulma-css/base/_all";
```

instead of
```sass
@import "base/_all";
```

## Installation

You need to have ember-cli-sass installed, otherwise the addon will install it as a dependency.

`ember install ember-cli-sass`

`ember install ember-bulma-sass`

## Usage

The addon will try to add the general import statements to your `app.scss` file
(the order is important, so the variables are declared before usage).

```sass
@import "ember-bulma-css/utilities/_all";
@import "ember-bulma-css/base/_all";
@import "ember-bulma-css/elements/_all";
@import "ember-bulma-css/components/_all";
@import "ember-bulma-css/grid/_all";
@import "ember-bulma-css/layout/_all";
```

Instead of importing all modules, you can import them individually:

```sass
// UTILITIES
@import "ember-bulma-css/utilities/animation";
@import "ember-bulma-css/utilities/controls";
@import "ember-bulma-css/utilities/derived-variables";
@import "ember-bulma-css/utilities/functions";
@import "ember-bulma-css/utilities/initial-variables";
@import "ember-bulma-css/utilities/mixins";
@import "ember-bulma-css/utilities/variables";
// BASE
@import "ember-bulma-css/base/generic";
@import "ember-bulma-css/base/helpers";
@import "ember-bulma-css/base/minireset";
@import "ember-bulma-css/elements/box";
@import "ember-bulma-css/elements/button";
@import "ember-bulma-css/elements/container";
@import "ember-bulma-css/elements/content";
@import "ember-bulma-css/elements/form";
@import "ember-bulma-css/elements/icon";
@import "ember-bulma-css/elements/image";
@import "ember-bulma-css/elements/notification";
@import "ember-bulma-css/elements/other";
@import "ember-bulma-css/elements/progress";
@import "ember-bulma-css/elements/table";
@import "ember-bulma-css/elements/tag";
@import "ember-bulma-css/elements/title";
// COMPONENTS
@import "ember-bulma-css/components/breadcrumb";
@import "ember-bulma-css/components/card";
@import "ember-bulma-css/components/dropdown";
@import "ember-bulma-css/components/level";
@import "ember-bulma-css/components/media";
@import "ember-bulma-css/components/menu";
@import "ember-bulma-css/components/message";
@import "ember-bulma-css/components/modal";
@import "ember-bulma-css/components/nav";
@import "ember-bulma-css/components/navbar";
@import "ember-bulma-css/components/pagination";
@import "ember-bulma-css/components/panel";
@import "ember-bulma-css/components/tabs";
// GRID
@import "ember-bulma-css/grid/columns";
@import "ember-bulma-css/grid/tiles";
// LAYOUT
@import "ember-bulma-css/layout/footer";
@import "ember-bulma-css/layout/hero";
@import "ember-bulma-css/layout/section";
```
