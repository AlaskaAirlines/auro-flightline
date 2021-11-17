import { fixture, html, expect, waitUntil } from '@open-wc/testing';
import '../src/auro-flightline.js';
import '../src/auro-flight-segment.js';

describe('auro-flightline', () => {

  it('is accessible', async () => {
    const el = await fixture(html`
      <auro-flightline>
      </auro-flightline>
    `);

    await expect(el).to.be.accessible();
  });

  it('with canceled status', async () => {
    const el = await fixture(html`
      <auro-flightline canceled>
      </auro-flightline>
    `);

    await expect(el.classList.contains("canceled"));
  });

  it('with canceled status do not display a layover', async () => {
    const el = await fixture(html`
      <auro-flightline canceled>
        <auro-flight-segment iata="SEA"></auro-flight-segment>
        <auro-flight-segment iata="LAX"></auro-flight-segment>
      </auro-flightline>
    `);

    await expect(el.shadowRoot.querySelectorAll('auro-flight-segment').length).to.equal(0);
  });

  it('with canceled status do not display a stopover', async () => {
    const el = await fixture(html`
      <auro-flightline canceled>
        <auro-flight-segment iata="SEA" stopover></auro-flight-segment>
      </auro-flightline>
    `);

    await expect(el.shadowRoot.querySelectorAll('auro-flight-segment').length).to.equal(0);
  });

  it('with a layover', async () => {
    const el = await fixture(html`
      <auro-flightline>
        <auro-flight-segment iata="SEA"></auro-flight-segment>
        <auro-flight-segment iata="LAX"></auro-flight-segment>
      </auro-flightline>
    `);

    await expect(el).to.be.accessible();
  });

  it('custom element is defined', async () => {
    const el = await Boolean(customElements.get("auro-flightline"));

    await expect(el).to.be.true;
  });

  it('shows expanded view depending on width', async () => {
    const el = await fixture(html`
      <auro-flightline id="condensed">
        <auro-flight-segment iata="SEA" duration="0h 40m"></auro-flight-segment>
        <auro-flight-segment iata="BOS" duration="1h 40m"></auro-flight-segment>
        <auro-flight-segment iata="DUB" duration="13h 40m"></auro-flight-segment>
      </auro-flightline>
    `);

    const slottedSegment = el.querySelector('auro-flight-segment');
    const summarySegment = el.shadowRoot.querySelector('auro-flight-segment');

    // when too narrow to show all segments, the condensed segment is shwon
    el.style.width = "100px";
    await waitUntil(() => !el.expanded);
    expect(window.getComputedStyle(slottedSegment).display).to.eql('none');
    expect(window.getComputedStyle(summarySegment).display).to.eql('block');

    // when the element is resized, the expanded view is shown
    el.style.width = "700px";
    await waitUntil(() => el.expanded);
    expect(window.getComputedStyle(slottedSegment).display).to.eql('block');
    expect(window.getComputedStyle(summarySegment).display).to.eql('none');
  });
});

describe('auro-flight-segment', () => {  
  it('with a layover', async () => {
    const el = await fixture(html`
      <auro-flight-segment iata="SEA" duration="1h 2m"></auro-flight-segment>
    `);

    await expect(el.shadowRoot.querySelector('span').innerHTML).to.equal('<!---->SEA<!---->');
    await expect(el.shadowRoot.querySelectorAll('auro-badge').length).to.equal(1);
  });

  it('with a layover no duration', async () => {
    const el = await fixture(html`
      <auro-flight-segment iata="2 Stops"></auro-flight-segment>
    `);

    await expect(el.shadowRoot.querySelector('span').innerHTML).to.equal('<!---->2 Stops<!---->');
    await expect(el.shadowRoot.querySelectorAll('auro-badge').length).to.equal(0);
  });

  it('with a stopover', async () => {
    const el = await fixture(html`
      <auro-flight-segment iata="SEA" stopover></auro-flight-segment>
    `);

    await expect(el.shadowRoot.querySelector('span').innerHTML).to.equal('<!---->SEA<!---->');
  });
})
