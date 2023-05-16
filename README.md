`# auro-flightline

`<auro-flightline>` is a [HTML custom element](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements) that represents the intermediate details between a departure and arrival station on a flight.

## UI development browser support

For the most up to date information on [UI development browser support](https://auro.alaskaair.com/support/browsersSupport)

## Install

[![Build Status](https://img.shields.io/github/actions/workflow/status/AlaskaAirlines/auro-flightline/testPublish.yml?branch=master&style=for-the-badge)](https://github.com/AlaskaAirlines/auro-flightline/actions/workflows/testPublish.yml)
[![See it on NPM!](https://img.shields.io/npm/v/@aurodesignsystem/auro-flightline?style=for-the-badge&color=orange)](https://www.npmjs.com/package/@aurodesignsystem/auro-flightline)
[![License](https://img.shields.io/npm/l/@aurodesignsystem/auro-flightline?color=blue&style=for-the-badge)](https://www.apache.org/licenses/LICENSE-2.0)

```shell
$ npm i @aurodesignsystem/auro-flightline
```

Installing as a direct, dev or peer dependency is up to the user installing the package. If you are unsure as to what type of dependency you should use, consider reading this [stack overflow](https://stackoverflow.com/questions/18875674/whats-the-difference-between-dependencies-devdependencies-and-peerdependencies) answer.

### Design Token CSS Custom Property dependency

The use of any Auro custom element has a dependency on the [Auro Design Tokens](https://auro.alaskaair.com/getting-started/developers/design-tokens).

### CSS Custom Property fallbacks

[CSS custom properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties) are [not supported](https://auro.alaskaair.com/support/custom-properties) in older browsers. For this, fallback properties are pre-generated and included with the npm.

Any update to the Auro Design Tokens will be immediately reflected with browsers that support CSS custom properties, legacy browsers will require updated components with pre-generated fallback properties.

### Define dependency in project component

Defining the component dependency within each component that is using the `<auro-flightline>` and `<auro-flight-segment>` components.

```javascript
import "@aurodesignsystem/auro-flightline";
import "@aurodesignsystem/auro-flightline/dist/auro-flight-segment";
```

**Reference component in HTML**

```html
<auro-flightline>
    <auro-flight-segment iata="SEA" duration="1h 40m"></auro-flight-segment>
    <auro-flight-segment iata="PIT" stopover></auro-flight-segment>
</auro-flightline>
```

## CDN Use

In cases where the project is not able to process JS assets, there are pre-processed assets available for use.

### Install

Include the following example HTML code in the `<head>` element of your page.

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@aurodesignsystem/design-tokens@latest/dist/tokens/CSSCustomProperties.css" />
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@aurodesignsystem/webcorestylesheets@latest/dist/bundled/essentials.css" />

<script src="https://cdn.jsdelivr.net/npm/@aurodesignsystem/auro-flightline@latest/dist/auro-flightline__bundled.js" type="module"></script>
<script src="https://cdn.jsdelivr.net/npm/@aurodesignsystem/auro-flightline@latest/dist/auro-flightline__bundled.es5.js" nomodule></script>

<!-- for just the segment -->
<script src="https://unpkg.com/@aurodesignsystem/auro-flightline@latest/dist/auro-flight-segment__bundled.js" type="module"></script>
<script src="https://unpkg.com/@aurodesignsystem/auro-flightline@latest/dist/auro-flight-segment__bundled.es5.js" nomodule></script>
```

**NOTE:** Be sure to replace `@latest` in the URL with the version of the asset you want. @latest is NOT aware of any MAJOR releases, use at your own risk.

### polyfills.js

The `polyfills.js` is packaged with this component, but **IT IS NOT NEEDED** to load a polyfill per component. The `polyfills.js` will work for all additional components added to the project.

## auro-flightline use cases

The `<auro-flightline>` element should be used in situations where users may:

* Indicate a nonstop flight
* Indicate a flight with a stopover
* Indicate a flight with a layover
* Indicate any combination of the above

## API Code Examples

Default auro-flightline

```html
<auro-flightline>
    <auro-flight-segment iata="SEA" duration="1h 40m"></auro-flight-segment>
    <auro-flight-segment iata="PIT" stopover></auro-flight-segment>
</auro-flightline>
```

## Development

In order to develop against this project, if you are not part of the core team, you will be required to fork the project prior to submitting a pull request.

Please be sure to review the [contribution guidelines](https://auro.alaskaair.com/getting-started/developers/contributing) for this project. Please make sure to **pay special attention** to the **conventional commits** section of the document.

### Start development environment

Once the project has been cloned to your local resource and you have installed all the dependencies you will need to open a shell session to run the **dev server**.

```shell
// shell terminal one
$ npm run dev
```

Open [localhost:8000](http://localhost:8000/)

If running separate sessions is preferred, please run the following commands in individual terminal shells.

```shell
$ npm run build:watch
$ npm run serve
```

### Testing
Automated tests are required for every Auro component. See `.\test\auro-flightline.test.js` for the tests for this component. Run `npm test` to run the tests and check code coverage. Tests must pass and meet a certain coverage threshold to commit. See [the testing documentation](https://auro.alaskaair.com/support/tests) for more details.
