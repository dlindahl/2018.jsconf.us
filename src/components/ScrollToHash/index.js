import { number } from 'prop-types'
import React from 'react'

export default class ScrollToHash extends React.Component {
  static defaultProps = {
    offsetY: 0
  }
  static propTypes = {
    offsetY: number
  }
  componentDidMount () {
    if (typeof window === 'undefined') {
      return
    }
    setTimeout(this.handleHashScroll, 0)
  }
  handleHashScroll = () => {
    const hash = window.decodeURI(window.location.hash.replace('#', ''))
    if (hash !== '') {
      const el = window.document.getElementById(hash)
      if (el) {
        const offset = el.offsetTop

        window.scrollTo(0, offset - this.props.offsetY)
      }
    }
  }
  render () {
    return null
  }
}
