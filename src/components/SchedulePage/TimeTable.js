import { array, string } from 'prop-types'
import Clock from './Clock'
import dateformat from 'dateformat'
import React from 'react'
import RepeatEvents from './RepeatEvents'
import ScheduleItem from './ScheduleItem'
import './TimeTable.css'

// eslint-disable-next-line react/prop-types
function renderTick ({ contentTag, ...item }, key) {
  if (contentTag) {
    const Tag = RepeatEvents[contentTag]
    return <Tag key={key} {...item}/>
  }
  return <ScheduleItem key={key} {...item}/>
}

const TimeTable = ({ date, schedule }) => {
  const clock = new Date(date)
  return (
    <div className="TimeTable">
      <header className="TimeTable-Header">
        <h3 className="TimeTable-Heading">
          {dateformat(clock, `UTC:dddd, mmmm dS`)}
        </h3>
      </header>
      <div className="TimeTable-Schedule">
        <Clock items={schedule} renderTick={renderTick} startAt={date}/>
      </div>
    </div>
  )
}

TimeTable.propTypes = {
  date: string.isRequired,
  schedule: array.isRequired
}

export default TimeTable
