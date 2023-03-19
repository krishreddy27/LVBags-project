import React from 'react'
import {createStore} from 'redux'

function countReducer({state = {count:0}, action}) {
  return (
    <div>
        <h1>Redux</h1>
    </div>
  )
}

export default countReducer

