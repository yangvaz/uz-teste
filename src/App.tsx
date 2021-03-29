import React from "react";

import "./styles.css";
import bud from  "./images/budweiser.png";

function App() {
  return (
    <div className="App">
      <div className="container">

        <div className="card">
           <img src={bud} />
          <div className="description">
            <h4> <strong> Budweiser </strong></h4>
            <div className="infoProduct"> 16 Unit - 330ml Bottle icOn </div>
            <div className="priceProduct"> R$ 43.00/Unit </div>
            <div className="info">
              For every 5 you buy, get up to 3 free Red Bull or 2 free Pepsi Black.
              <div className="detailsLink"><a href=""> View details </a> </div>
            </div>
          </div>

          <div className="footer">
            <button className="btnRetirar"> - </button>
            <label  />
            <button className="btnAdicionar"> + </button>

            <button className="btnUpdate"> UPDATE </button>
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;
