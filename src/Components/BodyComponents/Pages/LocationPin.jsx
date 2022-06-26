import React from 'react'
import { Icon } from '@iconify/react'

export default function LocationPin({ text}) {
  return (
    <div>
        <Icon  className="pin-icon" />
        <p className="pin-text">{text}</p>
    </div>
  )
}
