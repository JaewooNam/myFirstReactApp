import React from 'react'

const TodoItems = (props) => {
  const createTasks = (item) => {
    return <li key={item.key}>{item.text}</li>
  }

  var todoEntries = props.entries
  var listItems = todoEntries.map(createTasks)
  return (
    <ul className="theList">
      {listItems}
    </ul>
  )
}

export default TodoItems
