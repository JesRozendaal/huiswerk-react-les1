import React from 'react';
import './App.css';
import Buttons from "./Buttons";

function App() {
  return (
      <div>
      <h1>Handbags & Purses</h1>
        <nav>
          <Buttons
          buttonName="to the collection"
          />
        <Buttons
          buttonName="shop all bags"
          />
          <Buttons
            buttonName="pre-orders"
            disabled="true"
            />
        </nav>
      </div>
  );
}

export default App;



