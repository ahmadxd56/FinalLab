import React from 'react';

function App() {
  const [state, setState] = React.useState([]);
  const [limit, setLimit] = React.useState(10)

  const apiList = state.map((item, index) => {
    return (
      <div key={index}>
        <li>{item.brand}</li>
        <li>{item.title}</li>
        <li>{item.description}</li>
        <br></br>
      </div>
    )
  })

  async function apiFetch() {
    const res = await fetch(`https://dummyjson.com/products?limit=${limit}`)
    const data = await res.json();
    console.log(data.products)
    setState(data.products)
  }
  async function addItems() {
    if (limit <= 150) {
      setLimit(limit + 10);
      apiFetch();
    }
  }
  return (
    <div className="App">
      <button onClick={apiFetch}>Fetch Data From API</button>
      <div>{apiList}</div>
      {state.length > 0 && <button onClick={addItems}>Import +10</button>}
    </div>
  );
}

export default App;