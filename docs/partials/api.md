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

## Property & Attribute Examples

### Canceled

#### Canceled Flight

The following illustrates a `canceled` flight with no layovers or stopovers, for example, SEA to EWR is canceled.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/canceled.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/canceled.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

#### Canceled Segment

If the `canceled` flightline has segments, they will all be shown as canceled. To cancel individual segments, see complex examples below.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/canceled-segment.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/canceled-segment.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

#### Canceled Destination

The following illustrates the use of the `destinationCanceled` attribute, which demonstrates a canceled final destination segment.

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

This example illustrates the use of the `duration` and `iata` attributes to display station codes with the layover duration.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/iata.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/iata.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

#### Next Day Layover

The following illustrates the use of the `nextDay` attribute to indicate a layover that extends into the next day.

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

The following illustrates a flight with one `stopover`.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/stopover.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/stopover.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

## Common Usage Patterns & Functional Examples

### Container Query

The `auro-flightline` element is reactive to its parent container's `width` value versus a `@media` query based on the device `width`. This allows for greater control over the shape of the element when in constrained spaces.

The default container query is a min-width of `320px`, or `var(--ds-grid-breakpoint-xs)`.

The first example illustrates a `auro-flightline` element with a container width of `300px`. The next `auro-flightline` element is within a container set at `100%` for context. Notice when the container reaches a width of < `320px`, the container query switches the UI.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/container-query.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/container-query.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

### Stopover and Layover

The following illustrates a flight with a stopover and a layover.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/stopover-and-layover.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/stopover-and-layover.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

### Flight with Multiple Stopovers and Layovers

The following illustrates an international flight with stopovers and layovers.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/multiple-stop-and-layovers.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/multiple-stop-and-layovers.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

### Canceled Flight with Multiple Stopovers and Layovers

The following illustrates a cancellation of international flight with stopovers and layovers.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/canceled-stop-and-layovers.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/canceled-stop-and-layovers.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

## Restyle Component with CSS Variables

The component may be restyled by changing the values of the following token(s).

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../src/styles/tokens.scss) -->
<!-- AURO-GENERATED-CONTENT:END -->
