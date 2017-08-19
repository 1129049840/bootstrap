/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.0.0-beta): dom/event.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

const Event = {
  on(element, event, handler) {
    element.addEventListener(event, handler)
  },

  one(element, event, handler) {
    const complete = () => {
      handler.call(this)
      element.removeEventListener(event, complete)
    }

    element.addEventListener(event, complete)
  },

  trigger(element, event) {
    const eventToDispatch = new CustomEvent(event, {
      bubbles: true,
      cancelable: true
    })
    element.dispatchEvent(eventToDispatch)
  }
}

export default Event
