<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../api.md) -->
<!-- AURO-GENERATED-CONTENT:END -->

## API Examples

### Basic

This basic example represents a flight with no stops or layovers.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/basic.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/basic.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

### Canceled

#### Canceled Flight

The following illustrates a `canceled` flight with no layovers or stopovers, for example, SEA to EWR is canceled.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/canceled.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/canceled.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

#### Canceled Segment

If the `canceled` flightline has segments, they will all be shown as canceled. To cancel individual segments, see examples below.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/canceledSegment.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/canceledSegment.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

### Layover

#### Flight with single layover

The following illustrates flight with one layover, for example, SEA to AVP.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/layover.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/layover.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

#### Flight with next day layover

The following illustrates flight with one layover, that occurs on the following calendar day.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/plusDayLayover.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/plusDayLayover.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

#### Canceled flight with single layover

The following illustrates a canceled flight with layovers, for example, SEA to EWR is canceled.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/canceledLayover.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/canceledLayover.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

### Flight with single stopover

The following illustrates a flight with one stopover, for example, ANC to ADK.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/stopover.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/stopover.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

### Flight with single stopover and layover

The following illustrates flight with a stopover and a layover, for example, ADK to SEA.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/stopoverAndLayover.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/stopoverAndLayover.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

### Flight with multiple stopovers and layovers

The following illustrates an international flight with stopovers and layovers, for example, ADK to BCN.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/multipleStopAndLayovers.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/multipleStopAndLayovers.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

### Canceled flight with multiple stopovers and layovers

The following illustrates a cancellation of international flight with stopovers and layovers, for example, ADK to BCN.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/canceledStopAndLayovers.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/canceledStopAndLayovers.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

### Container Query

The `auro-flightline` element is reactive to its parent container's `width` value versus a `@media` query based on the device `width`. This allows for greater control over the shape of the element when in constrained spaces.

The default container query is a min-width of `320px`, or `var(--ds-grid-breakpoint-xs)`.

The first example illustrates a `auro-flightline` element with a container width of `300px`. The next `auro-flightline` element is within a container set at `100%` for context. Notice when the container reaches a width of < `320px`, the container query switches the UI.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/containerQuery.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/containerQuery.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>
