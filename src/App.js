import "./App.css";

const Hello = ({name="World", age="many years old"}) => {
  return (
    <div>
      <p>Hello {name}, you are {age}</p>
    </div>
  );
};

const App = () => {
  const age = 12
  return (
    <div>
      <h1>Greetings</h1>
      <Hello name="bob" age="9"/>
      <Hello name="Jeff" age={age}/>
      <Hello />
    </div>
  );
};

export default App;


