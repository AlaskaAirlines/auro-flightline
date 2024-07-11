# auro-flight-segment

The auro-flight-segment component is a standard for indicating stopovers and layovers.
Stopovers do not have duration information and are indicated differently.
Layovers contain duration information and are indicated with a solid fill.
For more information about the difference between a layover and a stopover,
[please see this article](https://www.turkishairlines.com/en-int/any-questions/what-is-the-difference-between-a-layover-and-a-stopover/).

## Properties

| Property              | Attribute             | Type      | Default | Description                                      |
|-----------------------|-----------------------|-----------|---------|--------------------------------------------------|
| `canceled`            | `canceled`            | `Boolean` | false   | Whether the segment is canceled. The line leading to the segment will be red. |
| `destinationCanceled` | `destinationCanceled` | `Boolean` | false   | Whether the following segment is canceled, will only affect the last segment in a flightline. The line after the segment will be red. |
| `duration`            | `duration`            | `String`  |         | Displayed in the auro-badge, typically duration (1h 53m) |
| `iata`                | `iata`                | `String`  |         | Text to display, typically a station code (SEA, PVD, AVP) |
| `nextDay`             | `nextDay`             | `Boolean` |         | Indicates time is on the following calendar day. |
| `stopover`            | `stopover`            | `Boolean` | false   | Indicates a stopover. Do not provide duration.   |


# auro-flightline

The auro-flightline component provides a responsive flight timeline experience by placing dots indicating stopovers and layovers on a timeline.

## Properties

| Property   | Attribute  | Type      | Default | Description                         |
|------------|------------|-----------|---------|-------------------------------------|
| `canceled` | `canceled` | `Boolean` | false   | Whether the flightline is canceled. |

## Slots

| Name | Description                                      |
|------|--------------------------------------------------|
|      | fill in with `<auro-flight-segment>` components of a given leg. |
