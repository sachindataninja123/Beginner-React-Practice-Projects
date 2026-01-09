import React from 'react'

const Compontent = () => {
  return (
    <div>
      <h1>This is import from component.jsx</h1>
      <Ui/>
    </div>
  )
}
function Ui() {
    return(
        <h1>This iS UI Component</h1>
    )
}

export default Compontent
