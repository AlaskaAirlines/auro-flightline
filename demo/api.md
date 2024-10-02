<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../api.md) -->
<!-- The below content is automatically added from ./../api.md -->

# auro-flight-segment

The auro-flight-segment component is a standard for indicating stopovers and layovers.
Stopovers do not have duration information and are indicated differently.
Layovers contain duration information and are indicated with a solid fill.
For more information about the difference between a layover and a stopover,
[please see this article.](https://www.turkishairlines.com/en-int/any-questions/what-is-the-difference-between-a-layover-and-a-stopover/).

## Properties

| Property              | Attribute             | Type      | Default | Description                                      |
|-----------------------|-----------------------|-----------|---------|--------------------------------------------------|
| [canceled](#canceled)            | `canceled`            | `Boolean` | false   | Whether the segment is canceled. The line leading to the segment will be red. |
| [destinationCanceled](#destinationCanceled) | `destinationCanceled` | `Boolean` | false   | Whether the following segment is canceled, will only affect the last segment in a flightline. The line after the segment will be red. |
| [duration](#duration)            | `duration`            | `String`  |         | Displayed in the auro-badge, typically duration (1h 53m) |
| [iata](#iata)                | `iata`                | `String`  |         | Text to display, typically a station code (SEA, PVD, AVP) |
| [nextDay](#nextDay)             | `nextDay`             | `Boolean` |         | Indicates time is on the following calendar day. |
| [stopover](#stopover)            | `stopover`            | `Boolean` | false   | Indicates a stopover. Do not provide duration.   |

# auro-flightline

The auro-flightline component provides a responsive flight timeline experience by placing dots indicating stopovers and layovers on a timeline.

## Properties

| Property   | Attribute  | Type      | Default | Description                         |
|------------|------------|-----------|---------|-------------------------------------|
| [canceled](#canceled) | `canceled` | `Boolean` | false   | Whether the flightline is canceled. |

## Slots

| Name | Description                                      |
|------|--------------------------------------------------|
|      | fill in with `<auro-flight-segment>` components of a given leg. |
<!-- AURO-GENERATED-CONTENT:END -->

## API Examples

### Basic

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

### Canceled

#### Canceled Flight

The following illustrates a `canceled` flight with no layovers or stopovers, for example, SEA to EWR is canceled.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/canceled.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/canceled.html -->
  <auro-flightline canceled></auro-flightline>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/canceled.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/canceled.html -->

```html
<auro-flightline canceled></auro-flightline>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

#### Canceled Segment

If the `canceled` flightline has segments, they will all be shown as canceled. To cancel individual segments, see examples below.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/canceledSegment.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/canceledSegment.html -->
  <auro-flightline canceled>
    <auro-flight-segment iata="EWR" duration="3h 40m"></auro-flight-segment>
  </auro-flightline>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/canceledSegment.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/canceledSegment.html -->

```html
<auro-flightline canceled>
  <auro-flight-segment iata="EWR" duration="3h 40m"></auro-flight-segment>
</auro-flightline>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Layover

#### Flight with single layover

The following illustrates flight with one layover, for example, SEA to AVP.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/layover.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/layover.html -->
  <auro-flightline>
    <auro-flight-segment iata="ORD" duration="3h 40m"></auro-flight-segment>
  </auro-flightline>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/layover.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/layover.html -->

```html
<auro-flightline>
  <auro-flight-segment iata="ORD" duration="3h 40m"></auro-flight-segment>
</auro-flightline>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

#### Flight with next day layover

The following illustrates flight with one layover, that occurs on the following calendar day.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/plusDayLayover.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/plusDayLayover.html -->
  <auro-flightline>
    <auro-flight-segment nextDay iata="ORD" duration="3h 40m"></auro-flight-segment>
  </auro-flightline>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/plusDayLayover.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/plusDayLayover.html -->

```html
<auro-flightline>
  <auro-flight-segment nextDay iata="ORD" duration="3h 40m"></auro-flight-segment>
</auro-flightline>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

#### Canceled flight with single layover

The following illustrates a canceled flight with layovers, for example, SEA to EWR is canceled.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/canceledLayover.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/canceledLayover.html -->
  <auro-flightline>
    <auro-flight-segment canceled iata="EWR" duration="3h 40m"></auro-flight-segment>
  </auro-flightline>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/canceledLayover.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/canceledLayover.html -->

```html
<auro-flightline>
  <auro-flight-segment canceled iata="EWR" duration="3h 40m"></auro-flight-segment>
</auro-flightline>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Flight with single stopover

The following illustrates a flight with one stopover, for example, ANC to ADK.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/stopover.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/stopover.html -->
  <auro-flightline>
    <auro-flight-segment stopover iata="CDB"></auro-flight-segment>
  </auro-flightline>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/stopover.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/stopover.html -->

```html
<auro-flightline>
  <auro-flight-segment stopover iata="CDB"></auro-flight-segment>
</auro-flightline>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Flight with single stopover and layover

The following illustrates flight with a stopover and a layover, for example, ADK to SEA.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/stopoverAndLayover.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/stopoverAndLayover.html -->
  <auro-flightline>
    <auro-flight-segment stopover iata="YAK"></auro-flight-segment>
    <auro-flight-segment iata="SEA" duration="0h 40m"></auro-flight-segment>
  </auro-flightline>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/stopoverAndLayover.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/stopoverAndLayover.html -->

```html
<auro-flightline>
  <auro-flight-segment stopover iata="YAK"></auro-flight-segment>
  <auro-flight-segment iata="SEA" duration="0h 40m"></auro-flight-segment>
</auro-flightline>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Flight with multiple stopovers and layovers

The following illustrates an international flight with stopovers and layovers, for example, ADK to BCN.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/multipleStopAndLayovers.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/multipleStopAndLayovers.html -->
  <auro-flightline>
    <auro-flight-segment stopover iata="CDB"></auro-flight-segment>
    <auro-flight-segment iata="ANC" duration="1h 30m"></auro-flight-segment>
    <auro-flight-segment iata="SEA" duration="0h 40m"></auro-flight-segment>
    <auro-flight-segment iata="SFO" duration="1h 40m"></auro-flight-segment>
  </auro-flightline>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/multipleStopAndLayovers.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/multipleStopAndLayovers.html -->

```html
<auro-flightline>
  <auro-flight-segment stopover iata="CDB"></auro-flight-segment>
  <auro-flight-segment iata="ANC" duration="1h 30m"></auro-flight-segment>
  <auro-flight-segment iata="SEA" duration="0h 40m"></auro-flight-segment>
  <auro-flight-segment iata="SFO" duration="1h 40m"></auro-flight-segment>
</auro-flightline>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Canceled flight with multiple stopovers and layovers

The following illustrates a cancellation of international flight with stopovers and layovers, for example, ADK to BCN.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/canceledStopAndLayovers.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/canceledStopAndLayovers.html -->
  <auro-flightline>
    <auro-flight-segment stopover iata="YAK"></auro-flight-segment>
    <auro-flight-segment stopover iata="WRG"></auro-flight-segment>
    <auro-flight-segment canceled iata="SEA" duration="0h 40m"></auro-flight-segment>
    <auro-flight-segment iata="BOS" duration="1h 40m"></auro-flight-segment>
    <auro-flight-segment canceled destinationCanceled iata="DUB" duration="13h 40m"></auro-flight-segment>
  </auro-flightline>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/canceledStopAndLayovers.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/canceledStopAndLayovers.html -->

```html
<auro-flightline>
  <auro-flight-segment stopover iata="YAK"></auro-flight-segment>
  <auro-flight-segment stopover iata="WRG"></auro-flight-segment>
  <auro-flight-segment canceled iata="SEA" duration="0h 40m"></auro-flight-segment>
  <auro-flight-segment iata="BOS" duration="1h 40m"></auro-flight-segment>
  <auro-flight-segment canceled destinationCanceled iata="DUB" duration="13h 40m"></auro-flight-segment>
</auro-flightline>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Container Query

The `auro-flightline` element is reactive to its parent container's `width` value versus a `@media` query based on the device `width`. This allows for greater control over the shape of the element when in constrained spaces.

The default container query is a min-width of `320px`, or `var(--ds-grid-breakpoint-xs)`.

The first example illustrates a `auro-flightline` element with a container width of `300px`. The next `auro-flightline` element is within a container set at `100%` for context. Notice when the container reaches a width of < `320px`, the container query switches the UI.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/containerQuery.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/containerQuery.html -->
  <auro-flightline style="width: 300px">
    <auro-flight-segment stopover iata="YAK"></auro-flight-segment>
    <auro-flight-segment stopover iata="WRG"></auro-flight-segment>
    <auro-flight-segment iata="SEA" duration="0h 40m"></auro-flight-segment>
    <auro-flight-segment iata="BOS" duration="1h 40m"></auro-flight-segment>
    <auro-flight-segment iata="DUB" duration="13h 40m"></auro-flight-segment>
  </auro-flightline>
  <auro-flightline>
    <auro-flight-segment stopover iata="YAK"></auro-flight-segment>
    <auro-flight-segment stopover iata="WRG"></auro-flight-segment>
    <auro-flight-segment iata="SEA" duration="0h 40m"></auro-flight-segment>
    <auro-flight-segment iata="BOS" duration="1h 40m"></auro-flight-segment>
    <auro-flight-segment iata="DUB" duration="13h 40m"></auro-flight-segment>
  </auro-flightline>
  <auro-flightline style="width: 75%">
    <auro-flight-segment stopover iata="YAK"></auro-flight-segment>
    <auro-flight-segment stopover iata="WRG"></auro-flight-segment>
    <auro-flight-segment iata="SEA" duration="0h 40m"></auro-flight-segment>
    <auro-flight-segment iata="BOS" duration="1h 40m"></auro-flight-segment>
    <auro-flight-segment iata="DUB" duration="13h 40m"></auro-flight-segment>
  </auro-flightline>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/containerQuery.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/containerQuery.html -->

```html
<auro-flightline style="width: 300px">
  <auro-flight-segment stopover iata="YAK"></auro-flight-segment>
  <auro-flight-segment stopover iata="WRG"></auro-flight-segment>
  <auro-flight-segment iata="SEA" duration="0h 40m"></auro-flight-segment>
  <auro-flight-segment iata="BOS" duration="1h 40m"></auro-flight-segment>
  <auro-flight-segment iata="DUB" duration="13h 40m"></auro-flight-segment>
</auro-flightline>
<auro-flightline>
  <auro-flight-segment stopover iata="YAK"></auro-flight-segment>
  <auro-flight-segment stopover iata="WRG"></auro-flight-segment>
  <auro-flight-segment iata="SEA" duration="0h 40m"></auro-flight-segment>
  <auro-flight-segment iata="BOS" duration="1h 40m"></auro-flight-segment>
  <auro-flight-segment iata="DUB" duration="13h 40m"></auro-flight-segment>
</auro-flightline>
<auro-flightline style="width: 75%">
  <auro-flight-segment stopover iata="YAK"></auro-flight-segment>
  <auro-flight-segment stopover iata="WRG"></auro-flight-segment>
  <auro-flight-segment iata="SEA" duration="0h 40m"></auro-flight-segment>
  <auro-flight-segment iata="BOS" duration="1h 40m"></auro-flight-segment>
  <auro-flight-segment iata="DUB" duration="13h 40m"></auro-flight-segment>
</auro-flightline>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Theme Support

The component may be restyled using the following code sample and changing the values of the following token(s).

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../src/tokens.scss) -->
<!-- The below code snippet is automatically added from ./../../src/tokens.scss -->

```scss
/* stylelint-disable custom-property-empty-line-before */

@import "./../node_modules/@aurodesignsystem/design-tokens/dist/tokens/SCSSVariables";

:host {
  --ds-auro-flightline-segment-line-color: var(--ds-color-utility-navy-default, #{$ds-color-utility-navy-default});
  --ds-auro-flightline-destination-line-color: var(--ds-color-utility-navy-default, #{$ds-color-utility-navy-default});

  --ds-auro-flightline-layover-marker-border-color: var(--ds-color-utility-navy-default, #{$ds-color-utility-navy-default});
  --ds-auro-flightline-layover-marker-container-color: var(--ds-color-utility-navy-default, #{$ds-color-utility-navy-default});

  --ds-auro-flightline-layover-iata-color: var(--ds-color-text-secondary-default, #{$ds-color-text-secondary-default});
  --ds-auro-flightline-layover-duration-color: var(--ds-color-text-secondary-default, #{$ds-color-text-secondary-default});
}
```
<!-- AURO-GENERATED-CONTENT:END -->
