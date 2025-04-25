import { fixture, html, expect, waitUntil } from '@open-wc/testing';
import '../index';

// This suppresses ResizeObserver errors that only show up in the tests
// Ref: https://stackoverflow.com/a/64197640/14808988
before(() => {
  // called before any tests are run
  const e = window.onerror;
  window.onerror = function(err) {
    if(err === 'ResizeObserver loop limit exceeded') {
      console.warn('Ignored: ResizeObserver loop limit exceeded');
      return false;
    } else {
      return e(...arguments);
    }
  }
});

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

  it('shows canceled summary when contains canceled segment', async () => {
    const el = await fixture(html`
      <auro-flightline id="condensed">
        <auro-flight-segment canceled iata="SEA" duration="0h 40m"></auro-flight-segment>
        <auro-flight-segment iata="BOS" duration="1h 40m"></auro-flight-segment>
      </auro-flightline>
    `);

    const summarySegment = el.shadowRoot.querySelector('auro-flight-segment');
    expect(summarySegment.hasAttribute('canceled'), "Canceled attribute not set").to.be.true;
  })

  it('when flightline is canceled, all segments are canceled', async () => {
    const el = await fixture(html`
      <auro-flightline canceled>
        <auro-flight-segment iata="SEA" duration="0h 40m"></auro-flight-segment>
        <auro-flight-segment iata="BOS" duration="1h 40m"></auro-flight-segment>
      </auro-flightline>
    `);

    const segments = el.querySelectorAll('auro-flight-segment');

    expect(segments[0].hasAttribute('canceled'), "Canceled attribute not set").to.be.true;
    expect(segments[0].hasAttribute('destinationCanceled'), "destinationCanceled attribute not set").to.be.true;
    expect(segments[1].hasAttribute('canceled'), "Canceled attribute not set").to.be.true;
    expect(segments[1].hasAttribute('destinationCanceled'), "destinationCanceled attribute not set").to.be.true;
  })

  it('when all segments are canceled, summary segment is fully canceled', async () => {
    const el = await fixture(html`
      <auro-flightline>
        <auro-flight-segment canceled iata="SEA" duration="0h 40m"></auro-flight-segment>
        <auro-flight-segment canceled destinationCanceled iata="BOS" duration="1h 40m"></auro-flight-segment>
      </auro-flightline>
    `);

    const summarySegment = el.shadowRoot.querySelector('auro-flight-segment');
    expect(summarySegment.hasAttribute('canceled'), "Canceled attribute not set").to.be.true;
    expect(summarySegment.hasAttribute('partialCancel'), "partialCancel attribute not set").to.be.true;
    expect(summarySegment.hasAttribute('destinationCanceled'), "destinationCanceled attribute not set").to.be.true;
  })

  it('when only a middle segment is canceled, summary segment is partially canceled', async () => {
    const el = await fixture(html`
      <auro-flightline>
        <auro-flight-segment iata="SEA" duration="0h 40m"></auro-flight-segment>
        <auro-flight-segment canceled iata="BOS" duration="1h 40m"></auro-flight-segment>
        <auro-flight-segment iata="ORD" duration="1h 40m"></auro-flight-segment>
      </auro-flightline>
    `);

    const summarySegment = el.shadowRoot.querySelector('auro-flight-segment');
    expect(summarySegment.hasAttribute('canceled'), "Canceled attribute is set").to.be.false;
    expect(summarySegment.hasAttribute('partialCancel'), "partialCancel attribute not set").to.be.true;
    expect(summarySegment.hasAttribute('destinationCanceled'), "destinationCanceled attribute is set").to.be.false;
  })

  it('when the last segment is canceled, summary segment shows destination canceled', async () => {
    const el = await fixture(html`
      <auro-flightline>
        <auro-flight-segment iata="SEA" duration="0h 40m"></auro-flight-segment>
        <auro-flight-segment iata="BOS" duration="1h 40m"></auro-flight-segment>
        <auro-flight-segment canceled destinationCanceled iata="ORD" duration="1h 40m"></auro-flight-segment>
      </auro-flightline>
    `);

    const summarySegment = el.shadowRoot.querySelector('auro-flight-segment');
    expect(summarySegment.hasAttribute('canceled'), "Canceled attribute is set").to.be.false;
    expect(summarySegment.hasAttribute('partialCancel'), "partialCancel attribute not set").to.be.true;
    expect(summarySegment.hasAttribute('destinationCanceled'), "destinationCanceled attribute not set").to.be.true;
  })
});

describe('auro-flight-segment', () => {
  it('with a layover', async () => {
    const el = await fixture(html`
      <auro-flight-segment iata="SEA" duration="1h 2m"></auro-flight-segment>
    `);

    await expect(el.shadowRoot.querySelector('span').innerText).to.equal('SEA');
    await expect(el.shadowRoot.querySelectorAll('.duration').length).to.equal(1);
  });

  it('with a layover no duration', async () => {
    const el = await fixture(html`
      <auro-flight-segment iata="2 Stops"></auro-flight-segment>
    `);

    await expect(el.shadowRoot.querySelector('span').innerText).to.equal('2 Stops');
    await expect(el.shadowRoot.querySelectorAll('.duration').length).to.equal(0);
  });

  it('with a stopover', async () => {
    const el = await fixture(html`
      <auro-flight-segment iata="SEA" stopover></auro-flight-segment>
    `);

    await expect(el.shadowRoot.querySelector('span').innerText).to.equal('SEA');
  });
})
