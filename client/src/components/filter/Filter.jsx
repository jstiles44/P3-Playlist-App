import React from 'react'
import './Filter'

const Filter = (props) => {
  return (
    <form className='filter-form' onSubmit={(e) => props.onSubmit(e)}>
      <input 
        className="filter-input"
        value={props.value}
        onChange={(e) => props.onChange(e)}
        name="filter"
        placeholder="search"
        type="text"
        autoFocus
    />
    </form>
    
  )
}