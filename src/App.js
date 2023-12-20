import './App.css';

const Person = () =>{
  return(
    <>
      <h1>Name: Ismail</h1>
      <h2>Age: 23</h2>
    </>
  )
}
const App = () => {
  const name = 'ismail'
  let isNameShowing = false
  return (
    <div className="App">
      <Person />
    </div>
  );
}

export default App;
