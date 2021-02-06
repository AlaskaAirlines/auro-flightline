# auro-Flightline

auro-flightline represents any layovers and/or stopovers a guest may encounter throughout their journey. 

For mobile, the number of stops is automatically calculated by the number of layovers and/or stopovers added in the DOM via the `auro-flight-segment` element. 

## Component use cases

Use the auro-flightline element to:
* Flying from SEA (Seattle, WA) to AVP (Scranton, PA) will require a *layover* in ORD (Chicago, IL)
* Flying from [ANC (Anchorage, AK) to ADK (Adak Island, AK) will have a *stopover* in CDB (Cold Bay, AK)](https://onemileatatime.com/alaska-airlines-adak-cold-bay/). These passengers will not deplane in Cold Bay.
Stopover duration cannot be predicted due to variants in passenger and cargo loads.

## Nonstop

<div class="exampleWrapper">    
  <auro-flightline></auro-flightline>
</div>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

  ```html
  <auro-flightline></auro-flightline>
  ```
</auro-accordion>

## Flight with a single layover

The following illustrates flight with one layover, for example, SEA to AVP.


<div class="exampleWrapper">    
  <auro-flightline>
    <auro-flight-segment iata="ORD" duration="3h 40m"></auro-flight-segment>
  </auro-flightline>
</div>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

  ```html
  <auro-flightline>
    <auro-flight-segment iata="ORD" duration="3h 40m"></auro-flight-segment>
  </auro-flightline>
  ```
</auro-accordion>

## Flight with a single stopover

The following illustrates a flight with one stopover, for example, ANC to ADK.


<div class="exampleWrapper">    
  <auro-flightline>
    <auro-flight-segment stopover iata="CDB"></auro-flight-segment>
  </auro-flightline>
</div>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

  ```html
  <auro-flightline>
    <auro-flight-segment stopover iata="CDB"></auro-flight-segment>
  </auro-flightline>
  ```
</auro-accordion>

## Flight with a stopover and a layover

The following illustrates flight with a stopover and a layover, for example, ADK to SEA.

<div class="exampleWrapper">    
  <auro-flightline>
    <auro-flight-segment stopover iata="YAK"></auro-flight-segment>
    <auro-flight-segment iata="SEA" duration="0h 40m"></auro-flight-segment>
  </auro-flightline>
</div>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

  ```html
  <auro-flightline>
    <auro-flight-segment stopover iata="YAK"></auro-flight-segment>
    <auro-flight-segment iata="SEA" duration="0h 40m"></auro-flight-segment>
  </auro-flightline>
  ```
</auro-accordion>

## Flight with layovers and stopovers

The following illustrates an international flight with stopovers and layovers, for example, ADK to BCN.

<div class="exampleWrapper">    
  <auro-flightline>
    <auro-flight-segment stopover iata="YAK"></auro-flight-segment>
    <auro-flight-segment stopover iata="WRG"></auro-flight-segment>
    <auro-flight-segment iata="SEA" duration="0h 40m"></auro-flight-segment>
    <auro-flight-segment iata="BOS" duration="1h 40m"></auro-flight-segment>
    <auro-flight-segment iata="DUB" duration="13h 40m"></auro-flight-segment>
  </auro-flightline>
</div>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

  ```html
  <auro-flightline>
    <auro-flight-segment stopover iata="CDB"></auro-flight-segment>
    <auro-flight-segment iata="ANC" duration="1h 30m"></auro-flight-segment>
    <auro-flight-segment iata="SEA" duration="0h 40m"></auro-flight-segment>
    <auro-flight-segment iata="SFO" duration="1h 40m"></auro-flight-segment>
  </auro-flightline>
  ```
</auro-accordion>
