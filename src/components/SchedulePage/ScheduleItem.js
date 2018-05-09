import { arrayOf, object, string } from 'prop-types'
import React from 'react'
import './ScheduleItem.css'
import ScheduleItemDetails from './ScheduleItemDetails'

const ScheduleItem = ({ components, endTime, focus, startTime, ...props }) => {
  if (!components) {
    components = [props]
  }
  return (
    <div className="ScheduleItem">
      <div className="ScheduleItem-Time">
        {startTime} - {endTime}
      </div>
      <div className="ScheduleItem-Container">
        {components.map((compProps, key) => (
          <ScheduleItemDetails key={key} {...compProps}/>
        ))}
      </div>
    </div>
  )
}

ScheduleItem.propTypes = {
  components: arrayOf(object),
  contentTag: string,
  endTime: string.isRequired,
  focus: string,
  startTime: string.isRequired
}

export default ScheduleItem
