<!--
The index.md file is a compiled document. No edits should be made directly to this file.
README.md is created by running `npm run build:docs`.
This file is generated based on a template fetched from `./docs/partials/index.md`
-->

# Flightline

<!-- AURO-GENERATED-CONTENT:START (FILE:src=./description.md) -->
<!-- The below content is automatically added from ./description.md -->
The `<auro-flightline>` component represents any layovers and/or stopovers a guest may encounter throughout their journey.

For mobile, the number of stops is automatically calculated by the number of layovers and/or stopovers added in the DOM via the `auro-flight-segment` element.
<!-- AURO-GENERATED-CONTENT:END -->

## auro-flightline use cases

<!-- AURO-GENERATED-CONTENT:START (FILE:src=./useCases.md) -->
<!-- The below content is automatically added from ./useCases.md -->
The `<auro-flightline>` element should be used in situations where users may:

* Flying from SEA (Seattle, WA) to AVP (Scranton, PA) will require a *layover* in ORD (Chicago, IL)
* Flying from [ANC (Anchorage, AK) to ADK (Adak Island, AK) will have a *stopover* in CDB (Cold Bay, AK)](https://onemileatatime.com/alaska-airlines-adak-cold-bay/). These passengers will not deplane in Cold Bay. Stopover duration cannot be predicted due to variants in passenger and cargo loads.
<!-- AURO-GENERATED-CONTENT:END -->

## Example(s)

This basic example represents a flight with no stops or layovers.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/basic.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/basic.html -->
  <auro-flightline></auro-flightline>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/basic.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/basic.html -->

```html
<auro-flightline></auro-flightline>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

## Recommended Use and Version Control

There are two important parts of every Auro component. The <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes">class</a> and the custom element. The class is exported and then used as part of defining the Web Component. When importing this component as described in the <a href="#install">install</a> section, the class is imported and the `auro-flightline` custom element is defined automatically.

To protect from versioning conflicts with other instances of the component being loaded, it is recommended to use our `AuroFlightline.register(name)` method and pass in a unique name.

```js
import { AuroFlightline } from '@aurodesignsystem/auro-flightline/src/auro-flightline';
import { AuroFlightSegment } from '@aurodesignsystem/auro-flight-segment/src/auro-flight-segment';

AuroFlightline.register('custom-flightline');
AuroFlightSegment.register('custom-flight-segment');
```

This will create a new custom element that you can use in your HTML that will function identically to the `auro-flightline` element.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/custom.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/custom.html -->
  <custom-flightline>
      <custom-flight-segment canceled iata="ORD" duration="3h 40m"></custom-flight-segment>
  </custom-flightline>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/custom.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/custom.html -->

```html
<custom-flightline>
    <custom-flight-segment canceled iata="ORD" duration="3h 40m"></custom-flight-segment>
</custom-flightline>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>
