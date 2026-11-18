<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../docs/api.md) -->
<!-- The below content is automatically added from ./../docs/api.md -->

# auro-flight-segment

Marks one stop on a flight as a layover or a stopover.

**Key capabilities**
- **Layover**: A stop with a duration, shown as a filled marker. Set `duration` to show how long it lasts.
- **Stopover**: A stop with no duration, shown as an outlined marker. Set `stopover` to turn it on.
- **Cancellation**: `canceled` and `destinationCanceled` show the lines around the segment as canceled.

**Example**
<pre class="language-html"><code class="language-html">&lt;auro-flight-segment iata="ORD" duration="3h 40m"&gt;&lt;/auro-flight-segment&gt;</code></pre>
Read about [the difference between a layover and a stopover](https://www.turkishairlines.com/en-int/any-questions/what-is-the-difference-between-a-layover-and-a-stopover/).

### Properties and attributes

| Properties          | Attributes          | Modifiers | Type    | Default | Description                                                                                                                                                                             |
| ------------------- | ------------------- | --------- | ------- | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| canceled            | canceled            |           | boolean |         | Marks the segment as canceled. The line leading to the segment is red and dashed, and the segment's marker is red.                                                                      |
| destinationCanceled | destinationCanceled |           | boolean |         | Marks the final leg after the last segment as canceled. Use it on the last segment in a flightline, where it turns the line after the segment red and dashed and the duration text red. |
| duration            | duration            |           | string  |         | Sets the layover length shown under the station code, such as `3h 40m`. Don't set it on a stopover, because stopover durations can't be predicted.                                      |
| iata                | iata                |           | string  |         | Sets the text shown under the segment's marker, typically a station code such as `SEA`.                                                                                                 |
| nextDay             | nextDay             |           | boolean |         | Marks a layover that extends into the next calendar day by showing its duration in red.                                                                                                 |
| stopover            | stopover            |           | boolean |         | Marks the segment as a stopover and shows its marker as an outlined circle. Don't set `duration` on a stopover, because stopover durations can't be predicted.                          |

### Methods

| Name     | Parameters                                                    | Return | Description                                              |
| -------- | ------------------------------------------------------------- | ------ | -------------------------------------------------------- |
| register | `name` (string) - The tag name to register the element under. |        | Registers the element with the browser under a tag name. |

# auro-flightline

Shows a flight's layovers and stopovers as dots on a timeline that adapts to its width.

**Key capabilities**
- **Shows each stop**: Each `<auro-flight-segment>` in the default slot adds a dot to the timeline.
- **Adapts to narrow spaces**: When it has two or more segments and is `320px` wide or narrower, it shows the number of stops instead of the dots.
- **Shows cancellations**: `canceled` shows the whole flight as canceled.

**Example**
<pre class="language-html"><code class="language-html">&lt;auro-flightline&gt;
  &lt;auro-flight-segment iata="SEA" duration="1h 40m"&gt;&lt;/auro-flight-segment&gt;
&lt;/auro-flightline&gt;</code></pre>

### Properties and attributes

| Properties | Attributes | Modifiers | Type    | Default | Description                                                                                                             |
| ---------- | ---------- | --------- | ------- | ------- | ----------------------------------------------------------------------------------------------------------------------- |
| canceled   | canceled   |           | boolean |         | Sets the whole flightline to canceled. The line turns red and dashed, and every segment inside it is shown as canceled. |

### Methods

| Name     | Parameters                                                    | Return | Description                                              |
| -------- | ------------------------------------------------------------- | ------ | -------------------------------------------------------- |
| register | `name` (string) - The tag name to register the element under. |        | Registers the element with the browser under a tag name. |

### Slots

| Name      | Description                                                                      |
| --------- | -------------------------------------------------------------------------------- |
| (default) | The `<auro-flight-segment>` elements that make up the flight, one for each stop. |
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

<pre class="language-html"><code class="language-html">&lt;auro-flightline&gt;&lt;/auro-flightline&gt;</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

## Property and attribute examples

### Canceled

#### Canceled flight

Use `canceled` on a flightline with no segments to show a canceled nonstop flight, such as SEA to EWR.

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

<pre class="language-html"><code class="language-html">&lt;auro-flightline canceled&gt;&lt;/auro-flightline&gt;</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

#### Canceled segment

When the `canceled` flightline has segments, it shows all of them as canceled. To cancel only some segments, set `canceled` on those segments, as in the canceled flight with multiple stopovers and layovers example.

<div class="exampleWrapper">
<!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/canceled-segment.html) -->
<!-- The below content is automatically added from ../apiExamples/canceled-segment.html -->
<auro-flightline canceled>
<auro-flight-segment iata="EWR" duration="3h 40m"></auro-flight-segment>
</auro-flightline>
<!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
<span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/canceled-segment.html) -->
<!-- The below code snippet is automatically added from ../apiExamples/canceled-segment.html -->

<pre class="language-html"><code class="language-html">&lt;auro-flightline canceled&gt;
  &lt;auro-flight-segment iata="EWR" duration="3h 40m"&gt;&lt;/auro-flight-segment&gt;
&lt;/auro-flightline&gt;</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

#### Canceled destination

Use `destinationCanceled` on the last segment to show a canceled final leg.

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

<pre class="language-html"><code class="language-html">&lt;auro-flightline&gt;
  &lt;auro-flight-segment iata="EWR" duration="3h 40m" destinationCanceled&gt;&lt;/auro-flight-segment&gt;
&lt;/auro-flightline&gt;</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Layover

Use `iata` and `duration` to show a station code with the layover duration.

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

<pre class="language-html"><code class="language-html">&lt;auro-flightline&gt;
  &lt;auro-flight-segment iata="ORD" duration="3h 40m"&gt;&lt;/auro-flight-segment&gt;
&lt;/auro-flightline&gt;</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

#### Next day layover

Use `nextDay` to show a layover that extends into the next day.

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

<pre class="language-html"><code class="language-html">&lt;auro-flightline&gt;
  &lt;auro-flight-segment nextDay iata="ORD" duration="3h 40m"&gt;&lt;/auro-flight-segment&gt;
&lt;/auro-flightline&gt;</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Stopover

Use `stopover` to show a stop with no duration.

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

<pre class="language-html"><code class="language-html">&lt;auro-flightline&gt;
  &lt;auro-flight-segment stopover iata="CDB"&gt;&lt;/auro-flight-segment&gt;
&lt;/auro-flightline&gt;</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

## Common usage patterns

### Container query

The `auro-flightline` element responds to its own width instead of the device width, so you can control its shape in narrow spaces. When a flightline with two or more segments is `320px` wide or narrower (the `xs` grid breakpoint), it shows the number of stops instead of the individual segments.

The first example sets the width to `300px`, the second uses the full width of its container, and the third sets `75%` so you can resize the window and watch it switch.

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

<pre class="language-html"><code class="language-html">&lt;auro-flightline style="width: 300px"&gt;
  &lt;auro-flight-segment stopover iata="YAK"&gt;&lt;/auro-flight-segment&gt;
  &lt;auro-flight-segment stopover iata="WRG"&gt;&lt;/auro-flight-segment&gt;
  &lt;auro-flight-segment iata="SEA" duration="0h 40m"&gt;&lt;/auro-flight-segment&gt;
  &lt;auro-flight-segment iata="BOS" duration="1h 40m"&gt;&lt;/auro-flight-segment&gt;
  &lt;auro-flight-segment iata="DUB" duration="13h 40m"&gt;&lt;/auro-flight-segment&gt;
&lt;/auro-flightline&gt;
&#10;&lt;auro-flightline&gt;
  &lt;auro-flight-segment stopover iata="YAK"&gt;&lt;/auro-flight-segment&gt;
  &lt;auro-flight-segment stopover iata="WRG"&gt;&lt;/auro-flight-segment&gt;
  &lt;auro-flight-segment iata="SEA" duration="0h 40m"&gt;&lt;/auro-flight-segment&gt;
  &lt;auro-flight-segment iata="BOS" duration="1h 40m"&gt;&lt;/auro-flight-segment&gt;
  &lt;auro-flight-segment iata="DUB" duration="13h 40m"&gt;&lt;/auro-flight-segment&gt;
&lt;/auro-flightline&gt;
&#10;&lt;auro-flightline style="width: 75%"&gt;
  &lt;auro-flight-segment stopover iata="YAK"&gt;&lt;/auro-flight-segment&gt;
  &lt;auro-flight-segment stopover iata="WRG"&gt;&lt;/auro-flight-segment&gt;
  &lt;auro-flight-segment iata="SEA" duration="0h 40m"&gt;&lt;/auro-flight-segment&gt;
  &lt;auro-flight-segment iata="BOS" duration="1h 40m"&gt;&lt;/auro-flight-segment&gt;
  &lt;auro-flight-segment iata="DUB" duration="13h 40m"&gt;&lt;/auro-flight-segment&gt;
&lt;/auro-flightline&gt;</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Stopover and layover

Mix stopover and layover segments in one flightline, as in this flight with one of each.

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

<pre class="language-html"><code class="language-html">&lt;auro-flightline&gt;
  &lt;auro-flight-segment stopover iata="YAK"&gt;&lt;/auro-flight-segment&gt;
  &lt;auro-flight-segment iata="SEA" duration="0h 40m"&gt;&lt;/auro-flight-segment&gt;
&lt;/auro-flightline&gt;</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Flight with multiple stopovers and layovers

Add as many stopover and layover segments as the route needs, as in this flight with one stopover and three layovers.

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

<pre class="language-html"><code class="language-html">&lt;auro-flightline&gt;
  &lt;auro-flight-segment stopover iata="CDB"&gt;&lt;/auro-flight-segment&gt;
  &lt;auro-flight-segment iata="ANC" duration="1h 30m"&gt;&lt;/auro-flight-segment&gt;
  &lt;auro-flight-segment iata="SEA" duration="0h 40m"&gt;&lt;/auro-flight-segment&gt;
  &lt;auro-flight-segment iata="SFO" duration="1h 40m"&gt;&lt;/auro-flight-segment&gt;
&lt;/auro-flightline&gt;</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Canceled flight with multiple stopovers and layovers

Set `canceled` on individual segments, and `destinationCanceled` on the last one, to show a canceled international flight with stopovers and layovers.

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

<pre class="language-html"><code class="language-html">&lt;auro-flightline&gt;
  &lt;auro-flight-segment stopover iata="YAK"&gt;&lt;/auro-flight-segment&gt;
  &lt;auro-flight-segment stopover iata="WRG"&gt;&lt;/auro-flight-segment&gt;
  &lt;auro-flight-segment canceled iata="SEA" duration="0h 40m"&gt;&lt;/auro-flight-segment&gt;
  &lt;auro-flight-segment iata="BOS" duration="1h 40m"&gt;&lt;/auro-flight-segment&gt;
  &lt;auro-flight-segment canceled destinationCanceled iata="DUB" duration="13h 40m"&gt;&lt;/auro-flight-segment&gt;
&lt;/auro-flightline&gt;</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

## Restyle with CSS custom properties

Restyle the component by changing the values of the following tokens.

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../src/styles/tokens.scss) -->
<!-- The below code snippet is automatically added from ./../src/styles/tokens.scss -->

<pre class="language-scss"><code class="language-scss">@use "@aurodesignsystem/design-tokens/dist/themes/alaska/SCSSVariables--alaska" as v;
&#10;:host {
  --ds-auro-flightline-destination-line-color: var(--ds-advanced-color-flightline-line, #{v.$ds-advanced-color-flightline-line});
  --ds-auro-flightline-segment-iata-text-color: var(--ds-basic-color-texticon-muted, #{v.$ds-basic-color-texticon-muted});
  --ds-auro-flightline-segment-line-color: var(--ds-advanced-color-flightline-line, #{v.$ds-advanced-color-flightline-line});
  --ds-auro-flightline-layover-duration-color: var(--ds-basic-color-texticon-muted, #{v.$ds-basic-color-texticon-muted});
  --ds-auro-flightline-layover-marker-border-color: var(--ds-advanced-color-flightline-indicator, #{v.$ds-advanced-color-flightline-indicator});
  --ds-auro-flightline-layover-marker-container-color: var(--ds-advanced-color-flightline-indicator, #{v.$ds-advanced-color-flightline-indicator});
}</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
