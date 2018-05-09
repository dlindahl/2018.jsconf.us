import dateformat from 'dateformat'
import { arrayOf, func, number, shape, string } from 'prop-types'

const TIME = /(\d{2})(\d{2})/
const MINUTES = 60000

function addTickTime (tick, duration) {
  tick.setTime(tick.getTime() + duration * MINUTES)
  return tick
}

function setTickTime (tick, time) {
  // eslint-disable-next-line no-unused-vars
  const [_, hours, minutes] = time.padStart(4, '0').match(TIME)
  tick.setUTCHours(hours)
  tick.setUTCMinutes(minutes)
  return tick
}

const Clock = ({ items, renderTick, startAt }) => {
  let tick = new Date(startAt)
  return items.map((item, i) => {
    if (item.startTime) {
      tick = setTickTime(tick, item.startTime)
      item = Object.assign({}, item, {
        startTime: dateformat(tick, 'UTC:h:MMTT')
      })
    } else {
      item = Object.assign({}, item, {
        startTime: dateformat(tick, 'UTC:h:MMTT')
      })
    }
    if (item.endTime) {
      tick = setTickTime(tick, item.endTime)
      item = Object.assign({}, item, {
        endTime: dateformat(tick, 'UTC:h:MMTT')
      })
    }
    if (item.duration) {
      tick = addTickTime(tick, item.duration)
      item = Object.assign({}, item, {
        endTime: dateformat(tick, 'UTC:h:MMTT')
      })
    }
    return renderTick(item, `${i}-${item.title}`)
  })
}

Clock.propTypes = {
  items: arrayOf(
    shape({
      duration: number,
      endTime: string,
      startTime: string,
      title: string
    })
  ),
  renderTick: func.isRequired,
  startAt: string
}

export default Clock
