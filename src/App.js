import React from 'react';
import './App.css';
import Buttons from './components/Buttons';
import Products from './components/Products';
import bag_1 from './assets/bag_1.png';
import bag_2 from './assets/bag_2.png';
import bag_3 from './assets/bag_3.png';
import bag_4 from './assets/bag_4.png';

function App() {
  return (
      <>
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
        <main>
          <Products
            category="Best seller"
            image={bag_1}
            text="The handy bag"
            price="€400,-"
          />
          <Products
            category="Best seller"
            image={bag_2}
            text="The stylish bag"
            price="€250,-"
            />
          <Products
              category="New collection"
              image={bag_3}
              text="The simple bag"
              price="€300,-"
              />
          <Products
              category="New collection"
              image={bag_4}
              text="The trendy bag"
              price="€150,-"
          />
        </main>
      </>
  );
}

export default App;



