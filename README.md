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

Installation
------------------------------------------------------------------------------

You need to have ember-cli-sass installed, otherwise the addon will install it as a dependency.

`ember install ember-cli-sass`

`ember install ember-bulma-css`

## Update

- 0.2.0 Updated Ember cli to 3.0.0 and bulma 0.6.2

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
@import "ember-bulma-css/utilities/initial-variables.sass";
@import "ember-bulma-css/utilities/functions.sass";
@import "ember-bulma-css/utilities/derived-variables.sass";
@import "ember-bulma-css/utilities/animations.sass";
@import "ember-bulma-css/utilities/mixins.sass";
@import "ember-bulma-css/utilities/controls.sass";

@import "ember-bulma-css/base/minireset";
@import "ember-bulma-css/base/generic";
@import "ember-bulma-css/base/helpers";

@import "ember-bulma-css/elements/box";
@import "ember-bulma-css/elements/button";
@import "ember-bulma-css/elements/container";
@import "ember-bulma-css/elements/content";
@import "ember-bulma-css/elements/form";
@import "ember-bulma-css/elements/icon";
@import "ember-bulma-css/elements/image";
@import "ember-bulma-css/elements/notification";
@import "ember-bulma-css/elements/progress";
@import "ember-bulma-css/elements/table";
@import "ember-bulma-css/elements/tag";
@import "ember-bulma-css/elements/title";
@import "ember-bulma-css/elements/other";

@import "ember-bulma-css/components/breadcrumb";
@import "ember-bulma-css/components/card";
@import "ember-bulma-css/components/dropdown";
@import "ember-bulma-css/components/level";
@import "ember-bulma-css/components/media";
@import "ember-bulma-css/components/menu";
@import "ember-bulma-css/components/message";
@import "ember-bulma-css/components/modal";
@import "ember-bulma-css/components/navbar";
@import "ember-bulma-css/components/pagination";
@import "ember-bulma-css/components/panel";
@import "ember-bulma-css/components/tabs";

@import "ember-bulma-css/grid/columns";
@import "ember-bulma-css/grid/tiles";

@import "ember-bulma-css/layout/hero";
@import "ember-bulma-css/layout/section";
@import "ember-bulma-css/layout/footer";
```

Contributing
------------------------------------------------------------------------------
### Installation

* `git clone <repository-url>`
* `cd my-addon`
* `npm install`

### Linting

* `npm run lint:js`
* `npm run lint:js -- --fix`

### Running tests

* `ember test` – Runs the test suite on the current Ember version
* `ember test --server` – Runs the test suite in "watch mode"
* `npm test` – Runs `ember try:each` to test your addon against multiple Ember versions

### Running the dummy application

* `ember serve`
* Visit the dummy application at [http://localhost:4200](http://localhost:4200).

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).

License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
