import { array, string } from 'prop-types'
import dateformat from 'dateformat'
import React from 'react'

import './TimeTable.css'

const TimeTable = ({ items, startTime }) => {
  const clock = new Date(startTime)
  return (
    <table className="TimeTable">
      <thead>
        <tr>
          <th>Time</th>
          <th>Track A</th>
          <th>Track B</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item, i) => {
          let rowBody = null
          if (item.description) {
            rowBody = <td colSpan="2">{item.description}</td>
          } else {
            rowBody = [
              <td key="0">
                {item.trackA.title}
                <br/>
                {item.trackA.speaker}
              </td>,
              <td key="1">
                {item.trackB.title}
                <br/>
                {item.trackB.speaker}
              </td>
            ]
          }
          const row = (
            <tr key={i}>
              <td>{dateformat(clock, 'h:MMtt')}</td>
              {rowBody}
            </tr>
          )
          clock.setMinutes(clock.getMinutes() + item.duration)
          return row
        })}
      </tbody>
    </table>
  )
}

TimeTable.propTypes = {
  items: array.isRequired,
  startTime: string.isRequired
}

export default TimeTable
