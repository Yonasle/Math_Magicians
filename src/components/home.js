// src/components/Home.js
import React from 'react';
import Header from './header';

function Home() {
  return (
    <div>
      <Header />
      <h2>Welcome to our page!</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Sed ac urna euismod, varius libero sit amet, hendrerit quam. Phasellus commodo
        erat nec odio convallis, a bibendum nunc efficitur. Sed bibendum, tellus nec
        mattis euismod, lorem ligula vulputate nunc, id iaculis ligula orci in leo.
        Curabitur ac tortor nec tellus lacinia facilisis vel sit amet ligula. Quisque
        fermentum bibendum facilisis.
      </p>
    </div>
  );
}

export default Home;
