# auro-flight-segment

Marks one stop on a flight as a layover or a stopover.

**Key capabilities**
- **Layover**: A stop with a duration, shown as a filled marker. Set `duration` to show it.
- **Stopover**: A stop with no duration, shown as an outlined marker. Set `stopover` to turn it on.
- **Cancellation**: `canceled` and `destinationCanceled` show the lines around the segment as canceled.

**Example**
```html
<auro-flight-segment iata="ORD" duration="3h 40m"></auro-flight-segment>
```
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

Shows a flight's layovers and stopovers as dots on a timeline that adapts to the width of its container.

**Key capabilities**
- **Shows each stop**: Each `<auro-flight-segment>` in the default slot adds a dot to the timeline.
- **Adapts to narrow spaces**: When its container is `320px` wide or narrower, it shows the number of stops instead of the dots.
- **Shows cancellations**: `canceled` shows the whole flight as canceled.

**Example**
```html
<auro-flightline>
  <auro-flight-segment iata="SEA" duration="1h 40m"></auro-flight-segment>
</auro-flightline>
```

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