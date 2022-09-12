import React from 'react'
import './searchbar.css'

export default function SearchBar(props) {
  return (
    <div className={props.classNameProps}>
        <form className='searchBar-form'>
            <input id='searchBar-input'></input>
        </form>
    </div>
  )
}
