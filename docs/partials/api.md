<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../docs/api.md) -->
<!-- AURO-GENERATED-CONTENT:END -->

## Basic

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/basic.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/basic.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

## Property and attribute examples

### Canceled

#### Canceled flight

Use `canceled` on a flightline with no segments to show a canceled nonstop flight, such as SEA to EWR.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/canceled.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/canceled.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

#### Canceled segment

When the `canceled` flightline has segments, it shows all of them as canceled. To cancel only some segments, set `canceled` on those segments, as in the canceled flight with multiple stopovers and layovers example.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/canceled-segment.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/canceled-segment.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

#### Canceled destination

Use `destinationCanceled` on the last segment to show a canceled final leg.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/canceled-destination.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/canceled-destination.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>



### Layover

Use `iata` and `duration` to show a station code with the layover duration.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/iata.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/iata.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

#### Next day layover

Use `nextDay` to show a layover that extends into the next day.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/next-day.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/next-day.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

### Stopover

Use `stopover` to show a stop with no duration.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/stopover.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/stopover.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

## Common usage patterns

### Container query

The `auro-flightline` element responds to its own width instead of the device width, so you can control its shape in narrow spaces. When the flightline is `320px` (`var(--ds-grid-breakpoint-xs)`) wide or narrower, it shows the number of stops instead of the individual segments.

The first example sets the width to `300px`, the second uses the full width of its container, and the third sets `75%` so you can resize the window and watch it switch.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/container-query.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/container-query.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

### Stopover and layover

A flight with a stopover and a layover.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/stopover-and-layover.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/stopover-and-layover.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

### Flight with multiple stopovers and layovers

A flight with multiple stopovers and layovers.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/multiple-stop-and-layovers.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/multiple-stop-and-layovers.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

### Canceled flight with multiple stopovers and layovers

A canceled international flight with stopovers and layovers.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/canceled-stop-and-layovers.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/canceled-stop-and-layovers.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

## Restyle with CSS custom properties

Restyle the component by changing the values of the following tokens.

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../src/styles/tokens.scss) -->
<!-- AURO-GENERATED-CONTENT:END -->
