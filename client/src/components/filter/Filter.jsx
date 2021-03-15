import React from 'react'
import './Filter.css'

const Filter = (props) => {
  return (
    <form className='filter-form' onSubmit={(e) => props.onSubmit(e)}>
      <input 
        className="filter-input-explore"
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

export default Filter