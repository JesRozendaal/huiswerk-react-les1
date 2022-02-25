import React from 'react';
import './App.css';
import Buttons from './components/Buttons';
import Products from './components/Products';
import Tiles from "./components/Tiles";
import bag_1 from './assets/bag_1.png';
import bag_2 from './assets/bag_2.png';
import bag_3 from './assets/bag_3.png';
import bag_4 from './assets/bag_4.png';
import brand from './assets/brand.png';
import story from './assets/our_story.png';

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
        <footer>
          <Tiles title="The brand">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate eius eos error eveniet fugit nobis non, saepe temporibus vel veritatis?</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias asperiores aspernatur et expedita ipsa laborum quis quos tenetur unde, voluptate.</p>
          </Tiles>
          <Tiles
          image={brand}
          text="our logo"
          />
          <Tiles
            image={story}
            text="picture of us"
            />
          <Tiles title="Our story">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusamus ad asperiores blanditiis cumque delectus deleniti, dolores facilis hic illo inventore neque praesentium, reprehenderit, vero vitae? Alias architecto officia tenetur.</p>
          </Tiles>
        </footer>
      </>
  );
}

export default App;



