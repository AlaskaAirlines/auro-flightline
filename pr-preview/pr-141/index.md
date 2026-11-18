<!--
 THIS PAGE'S CONTENT SHOULD BE KEPT MINIMAL.
 ONLY ADD EXAMPLES THAT ARE TRULY NECESSARY FOR THE INDEX PAGE. THE BASIC EXAMPLE IS USUALLY ENOUGH.
 ALL OTHER EXAMPLES SHOULD GO IN THE API DOCUMENTATION.
-->

# Flightline

<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../docs/partials/description.md) -->
<!-- The below content is automatically added from ./../docs/partials/description.md -->
The `<auro-flightline>` component represents any layovers and/or stopovers a guest may encounter throughout their journey.

When a flightline with two or more segments is `320px` wide or narrower, it hides the individual segments and shows the number of stops, counted from the `auro-flight-segment` elements inside it.
<!-- AURO-GENERATED-CONTENT:END -->

## Use cases

<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../docs/partials/useCases.md) -->
<!-- The below content is automatically added from ./../docs/partials/useCases.md -->
Use `<auro-flightline>` to show a route that includes layovers or stopovers, such as:

* A flight from SEA (Seattle, WA) to AVP (Scranton, PA) that requires a *layover* in ORD (Chicago, IL).
* A flight from ANC (Anchorage, AK) to ADK (Adak Island, AK) that has a *stopover* in CDB (Cold Bay, AK). [Passengers stay on the plane in Cold Bay](https://onemileatatime.com/alaska-airlines-adak-cold-bay/), and the stopover duration can't be predicted because passenger and cargo loads vary.
<!-- AURO-GENERATED-CONTENT:END -->

## Examples

### Basic

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
