let lastX = 0
let lastY = 0
let lastTime: Date | null = null
let changeFired = false

export default function DebouncePlugin() {
  function Debounce() {
    this.defaults = {
      debounceTimeout: 1000,
      shakeRange: 3
    }
  }

  Debounce.prototype = {
    dragStart({ originalEvent }) {
      // init postion and time info
      lastX = originalEvent.screenX
      lastY = originalEvent.screenY
      lastTime = new Date()
    },
    dragOverValid({ originalEvent, changed, completed, cancel }) {
      const options = this.options

      if (
        Math.abs(originalEvent.screenX - lastX) < options.shakeRange &&
        Math.abs(originalEvent.screenY - lastY) < options.shakeRange
      ) {
        // if keep in a circle area
        const currentTime = new Date()
        if (lastTime && currentTime - lastTime > options.debounceTimeout) {
          // culculate staying time. if overtime, complete.
          if (!changeFired) {
            changed()
            completed(true)
            changeFired = true
          } else {
            cancel()
          }
        } else {
          cancel()
        }
        return
      }
      changeFired = false
      lastX = originalEvent.screenX
      lastY = originalEvent.screenY
      lastTime = new Date()

      cancel()
    },

    nulling() {
      lastTime = null
      lastX = 0
      lastY = 0
    }
  }

  return Object.assign(Debounce, {
    pluginName: 'debounce'
  })
}
