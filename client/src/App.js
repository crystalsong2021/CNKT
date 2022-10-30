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
      .then((data) => setEvents(data.sampleData));
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <p>{!events ? "Loading..." : events.map(event => <li>{event.eventTitle}</li>)

         }</p>
      </header>
    </div>
  );
}

export default App;
