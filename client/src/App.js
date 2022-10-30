/* eslint-disable no-unused-expressions */
import React from 'react';
import './App.css';

function App() {
  // const [events, setEvents] = React.useState(null);
  React.useEffect(() => {
    fetch('http://localhost:3001/events', {
      headers: {
         "Access-Control-Allow-Origin": "*",
         "mode":"no-cors"
      }})
      .then((res) => res.json())
      .then((data) => console.log(data))
  })

  return (
    <div className="App">
      <header className="App-header">
        <h>hello</h>
      </header>
    </div>
  );
}

export default App;
