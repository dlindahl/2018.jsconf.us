import { any } from 'prop-types'
import dateformat from 'dateformat'
import GridRow from '../GridRow'
import React, { Children } from 'react'
import './ScheduleNav.css'
import { slugify } from '../../util/string'

function componentize (schedule) {
  const [title, date] = schedule
  return (
    <li className="Schedule-NavItem" key={title}>
      <a className="Schedule-NavLink" href={`#${slugify(title)}`}>
        <span className="Schedule-LinkDate">{dateformat(date, 'UTC:m/d')}</span>
        <span className="Schedule-LinkTitle">{title}</span>
      </a>
    </li>
  )
}

const ScheduleNav = ({ children }) => {
  const schedules = Children.toArray(children).map((item) => {
    const retval = [item.props.title]
    const timetable = Children.toArray(item.props.children).find(
      (child) => child.type.displayName === 'TimeTable'
    )
    if (timetable) {
      retval.push(timetable.props.date)
    }
    return retval
  })
  return (
    <div>
      <GridRow className="Schedule-NavRow">
        <nav className="Schedule-Nav">
          <ul className="Schedule-NavItems">{schedules.map(componentize)}</ul>
        </nav>
      </GridRow>
      {children}
    </div>
  )
}

ScheduleNav.propTypes = {
  children: any
}

export default ScheduleNav
