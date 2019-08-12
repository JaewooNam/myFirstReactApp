import React, { useState } from 'react'
import TodoItems from './TodoItems'
import './TodoList.css'

const TodoList = () => {
  const [items, setItems] = useState([])
  const [inputValue, setInput] = useState('')
  const addItem = (e) => {
    e.preventDefault()
    if (e.target.value !== "") {
      const newItem = {
        text: inputValue,
        key: Date.now(),
      }
      setItems((prevState) => {
        return {
          items: setItems(prevState.concat(newItem))
        }
      })
    }

    setInput('')
  }

  const handleInput = e => {
    setInput(e.target.value)
  }

  return (
    <div className="todoListMain">
      <div className="header">
        <form onSubmit={addItem}>
          <input
            value={inputValue}
            onChange={handleInput}
            placeholder="enter task">
          </input>
          <button type="submit">add</button>
        </form>
      </div>
      <TodoItems entries={items} />
    </div>
  )
}

export default TodoList