import React from 'react';
import ReactDOM from 'react-dom';
import KeyFeatures from './Components/keyFeatures/';
import Map from './Components/Map/';
import './styles.css';

const App = () => {
  const features = [
    'Help to Buy available, ideal for first time buyers',
    'Within walking distance of the Northern Quarter, Ancoats & NOMA',
    'Exposed brickwork retaining the charm of the existing building',
    'Cycle storage',
    'Victorian Mill conversion',
    '13 unique 1, 2 and 3 bed apartments available'
  ]

  return (
    <div className="App" >
      <h1>Hello PUnk!</h1>
      <h2>Start editing Punk!</h2>
      <KeyFeatures features={features} />
      <Map />
    </div>
  )
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);

//  Tut @ developerhandbook.com/react/set-up-react-project-parceljs/