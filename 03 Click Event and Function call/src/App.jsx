
import './App.css'

//  function fruit(name) {
//     alert(name);
//   }


function App() {

  function fruit(name) {
    alert(name);
  }

  return(
    <>
    <h1>Click Event and Function Call</h1>
    <button onClick={() => fruit("apple")}>Apple</button>
    <button onClick={() => fruit("banana")}>Banana</button>
    </>
  )
}

export default App
