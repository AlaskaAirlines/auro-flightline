/** @type {Map<Node, resizeCallback>} */
const callbacks = new Map();

/**
 * Handle the resize event.
 * @param {Element} target - The observed node.
 */
function resizeCallback(target) {
  const { width } = target.getBoundingClientRect();

  callbacks.get(target)(width);
}

/**
 * Callback for the resize observer.
 * In the future, this could be replaced with CSS container queries.
 * @param {ResizeObserverEntry[]} entries - Elements that have been resized.
 * @returns {void}
 */
function handleResize(entries) {
  entries.forEach(({target}) => resizeCallback(target));
}

// this observer is shared between all auro-flightline instances on a page
const ro = new ResizeObserver(handleResize);

/**
 * @callback resizeCallback
 * @param {number} width
 */

/**
 * Observe changes to a node's width.
 * @param {Node} node - The node to observe.
 * @param {resizeCallback} cb - The callback to execute when the node's width changes.
 */
export function observeResize(node, cb) {
  callbacks.set(node, cb);
  ro.observe(node);
  // call immediately to prevent FOUC
  resizeCallback(node);
}

/**
 * Unobserve a node.
 * @param {Node} node - The node to unobserve.
 */
export function unobserve(node) {
  ro.unobserve(node);
  callbacks.delete(node);
}
