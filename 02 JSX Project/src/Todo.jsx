function Todo() {

    function clicked() {alert("Function Called")}
    
  return (
    <div>
      
      <h1>Sachin todos </h1>
      <img
        src="https://imgs.search.brave.com/evjssa_-BynrGUj7Shv3Y96V_qqQ2HgZ2xCssi7J8DI/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4u/Y3JlYXRlLnZpc3Rh/LmNvbS9hcGkvbWVk/aWEvc21hbGwvMTEx/MzI1MTMvc3RvY2st/cGhvdG8tYWJzdHJh/Y3QtM2QtbGV0dGVy/LXdpdGgtaGFsZnRv/bmUtdGV4dHVyZS1z"
        alt="image"
      />
      <ul>
        <li>Invert new traffic lights</li>
        <li>Rehearse a movie scene</li>
        <li>Hii hello React </li>
      </ul>
      <button onClick={clicked}>Click me</button>
    </div>
  );
}

export default Todo;
