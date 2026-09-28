<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../docs/api.md) -->
<!-- The below content is automatically added from ./../docs/api.md -->

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
| [duration](#duration)            | `duration`            | `String`  |         | Indicates time duration of a stop                |
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

## Basic

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/basic.html) -->
  <!-- The below content is automatically added from ./../apiExamples/basic.html -->
  <auro-flightline></auro-flightline>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/basic.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/basic.html -->

```html
<auro-flightline></auro-flightline>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

## Property & Attribute Examples

### Canceled

#### Canceled Flight

The following illustrates a `canceled` flight with no layovers or stopovers, for example, SEA to EWR is canceled.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/canceled.html) -->
  <!-- The below content is automatically added from ../apiExamples/canceled.html -->
  <auro-flightline canceled></auro-flightline>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/canceled.html) -->
<!-- The below code snippet is automatically added from ../apiExamples/canceled.html -->

```html
<auro-flightline canceled></auro-flightline>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

#### Canceled Segment

If the `canceled` flightline has segments, they will all be shown as canceled. To cancel individual segments, see complex examples below.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/canceled-segment.html) -->
  <!-- The below content is automatically added from ../apiExamples/canceled-segment.html -->
  <auro-flightline>
    <auro-flight-segment iata="EWR" duration="3h 40m" canceled></auro-flight-segment>
  </auro-flightline>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/canceled-segment.html) -->
<!-- The below code snippet is automatically added from ../apiExamples/canceled-segment.html -->

```html
<auro-flightline>
  <auro-flight-segment iata="EWR" duration="3h 40m" canceled></auro-flight-segment>
</auro-flightline>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

#### Canceled Destination

The following illustrates the use of the `destinationCanceled` attribute, which demonstrates a canceled final destination segment.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/canceled-destination.html) -->
  <!-- The below content is automatically added from ../apiExamples/canceled-destination.html -->
  <auro-flightline>
    <auro-flight-segment iata="EWR" duration="3h 40m" destinationCanceled></auro-flight-segment>
  </auro-flightline>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/canceled-destination.html) -->
<!-- The below code snippet is automatically added from ../apiExamples/canceled-destination.html -->

```html
<auro-flightline>
  <auro-flight-segment iata="EWR" duration="3h 40m" destinationCanceled></auro-flight-segment>
</auro-flightline>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Layover

This example illustrates the use of the `duration` and `iata` attributes to display station codes with the layover duration.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/iata.html) -->
  <!-- The below content is automatically added from ../apiExamples/iata.html -->
  <auro-flightline>
    <auro-flight-segment iata="ORD" duration="3h 40m"></auro-flight-segment>
  </auro-flightline>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/iata.html) -->
<!-- The below code snippet is automatically added from ../apiExamples/iata.html -->

```html
<auro-flightline>
  <auro-flight-segment iata="ORD" duration="3h 40m"></auro-flight-segment>
</auro-flightline>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

#### Next Day Layover

The following illustrates the use of the `nextDay` attribute to indicate a layover that extends into the next day.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/next-day.html) -->
  <!-- The below content is automatically added from ../apiExamples/next-day.html -->
  <auro-flightline>
    <auro-flight-segment nextDay iata="ORD" duration="3h 40m"></auro-flight-segment>
  </auro-flightline>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/next-day.html) -->
<!-- The below code snippet is automatically added from ../apiExamples/next-day.html -->

```html
<auro-flightline>
  <auro-flight-segment nextDay iata="ORD" duration="3h 40m"></auro-flight-segment>
</auro-flightline>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Stopover

The following illustrates a flight with one `stopover`.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/stopover.html) -->
  <!-- The below content is automatically added from ../apiExamples/stopover.html -->
  <auro-flightline>
    <auro-flight-segment stopover iata="CDB"></auro-flight-segment>
  </auro-flightline>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/stopover.html) -->
<!-- The below code snippet is automatically added from ../apiExamples/stopover.html -->

```html
<auro-flightline>
  <auro-flight-segment stopover iata="CDB"></auro-flight-segment>
</auro-flightline>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

## Common Usage Patterns & Functional Examples

### Container Query

The `auro-flightline` element is reactive to its parent container's `width` value versus a `@media` query based on the device `width`. This allows for greater control over the shape of the element when in constrained spaces.

The default container query is a min-width of `320px`, or `var(--ds-grid-breakpoint-xs)`.

The first example illustrates a `auro-flightline` element with a container width of `300px`. The next `auro-flightline` element is within a container set at `100%` for context. Notice when the container reaches a width of < `320px`, the container query switches the UI.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/container-query.html) -->
  <!-- The below content is automatically added from ../apiExamples/container-query.html -->
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
<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/container-query.html) -->
<!-- The below code snippet is automatically added from ../apiExamples/container-query.html -->

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

### Stopover and Layover

The following illustrates a flight with a stopover and a layover.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/stopover-and-layover.html) -->
  <!-- The below content is automatically added from ../apiExamples/stopover-and-layover.html -->
  <auro-flightline>
    <auro-flight-segment stopover iata="YAK"></auro-flight-segment>
    <auro-flight-segment iata="SEA" duration="0h 40m"></auro-flight-segment>
  </auro-flightline>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/stopover-and-layover.html) -->
<!-- The below code snippet is automatically added from ../apiExamples/stopover-and-layover.html -->

```html
<auro-flightline>
  <auro-flight-segment stopover iata="YAK"></auro-flight-segment>
  <auro-flight-segment iata="SEA" duration="0h 40m"></auro-flight-segment>
</auro-flightline>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Flight with Multiple Stopovers and Layovers

The following illustrates an international flight with stopovers and layovers.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/multiple-stop-and-layovers.html) -->
  <!-- The below content is automatically added from ../apiExamples/multiple-stop-and-layovers.html -->
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
<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/multiple-stop-and-layovers.html) -->
<!-- The below code snippet is automatically added from ../apiExamples/multiple-stop-and-layovers.html -->

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

### Canceled Flight with Multiple Stopovers and Layovers

The following illustrates a cancellation of international flight with stopovers and layovers.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/canceled-stop-and-layovers.html) -->
  <!-- The below content is automatically added from ../apiExamples/canceled-stop-and-layovers.html -->
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
<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/canceled-stop-and-layovers.html) -->
<!-- The below code snippet is automatically added from ../apiExamples/canceled-stop-and-layovers.html -->

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

## Restyle Component with CSS Variables

The component may be restyled by changing the values of the following token(s).

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../src/styles/tokens.scss) -->
<!-- The below code snippet is automatically added from ./../src/styles/tokens.scss -->

```scss
@use "@aurodesignsystem/design-tokens/dist/themes/alaska/SCSSVariables--alaska" as v;

:host {
  --ds-auro-flightline-destination-line-color: var(--ds-advanced-color-flightline-line, #{v.$ds-advanced-color-flightline-line});
  --ds-auro-flightline-segment-iata-text-color: var(--ds-basic-color-texticon-muted, #{v.$ds-basic-color-texticon-muted});
  --ds-auro-flightline-segment-line-color: var(--ds-advanced-color-flightline-line, #{v.$ds-advanced-color-flightline-line});
  --ds-auro-flightline-layover-duration-color: var(--ds-basic-color-texticon-muted, #{v.$ds-basic-color-texticon-muted});
  --ds-auro-flightline-layover-marker-border-color: var(--ds-advanced-color-flightline-indicator, #{v.$ds-advanced-color-flightline-indicator});
  --ds-auro-flightline-layover-marker-container-color: var(--ds-advanced-color-flightline-indicator, #{v.$ds-advanced-color-flightline-indicator});
}
```
<!-- AURO-GENERATED-CONTENT:END -->
