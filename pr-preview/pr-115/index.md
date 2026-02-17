<!--
 THIS PAGE'S CONTENT SHOULD BE KEPT MINIMAL.
 ONLY ADD EXAMPLES THAT ARE TRULY NECESSARY FOR THE INDEX PAGE — THE BASIC EXAMPLE IS USUALLY ENOUGH.
 ALL OTHER EXAMPLES SHOULD GO IN THE API DOCUMENTATION.
-->

# Flightline

<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../docs/partials/description.md) -->
<!-- The below content is automatically added from ./../docs/partials/description.md -->
The `<auro-flightline>` component represents any layovers and/or stopovers a guest may encounter throughout their journey.

For mobile, the number of stops is automatically calculated by the number of layovers and/or stopovers added in the DOM via the `auro-flight-segment` element.
<!-- AURO-GENERATED-CONTENT:END -->

## Use Cases

<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../docs/partials/useCases.md) -->
<!-- The below content is automatically added from ./../docs/partials/useCases.md -->
The `<auro-flightline>` element should be used in situations where users may:

* Flying from SEA (Seattle, WA) to AVP (Scranton, PA) will require a *layover* in ORD (Chicago, IL)
* Flying from [ANC (Anchorage, AK) to ADK (Adak Island, AK) will have a *stopover* in CDB (Cold Bay, AK)](https://onemileatatime.com/alaska-airlines-adak-cold-bay/). These passengers will not deplane in Cold Bay. Stopover duration cannot be predicted due to variants in passenger and cargo loads.
<!-- AURO-GENERATED-CONTENT:END -->

## Example(s)

### Basic

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/canceled-stop-and-layovers.html) -->
  <!-- The below content is automatically added from ./../apiExamples/canceled-stop-and-layovers.html -->
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
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/canceled-stop-and-layovers.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/canceled-stop-and-layovers.html -->

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
