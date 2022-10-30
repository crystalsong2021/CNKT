/* eslint-disable no-unused-expressions */
import React from 'react';
import './App.css';

function App() {
  const [events, setEvents] = React.useState(null);
  React.useEffect(() => {
    fetch('http://localhost:3001/events', {
      headers: {
         "Access-Control-Allow-Origin": "*",
         "mode":"no-cors"
      }})
      .then((res) => res.json())
      .then((data) => setEvents(data));
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <p>{
          // eslint-disable-next-line array-callback-return
          !events ? "Loading..." : events.map((event) => <li>{event.eventDateTime}</li>)
         }</p>
      </header>
    </div>
  );
}

export default App;
