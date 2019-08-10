import React from 'react'
import PhoneForm from  './components/PhoneForm'

const App = () => {
  const handleCreate = data => {
    console.log(data)
  }

  return (
    <div>
      <PhoneForm onCreate={handleCreate}/>
    </div>
  )
}

export default App