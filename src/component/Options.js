import React from 'react'

export default function Options ({ options = [] }) {
  return options.map(({ id, name }) => {
    return (
      <option key={id} value={id}>
        {name}
      </option>
    )
  })
}
