import React, {useState} from "react";
import "./App.css";
//import App from"App.js";



const BottomRow = () => {

  let [quarterValue, setQuarter] = useState(1);

  const quarterFunction = () => {
    if (quarterValue >= 4) {
      debugger
      quarterValue = 0;
    }
    setQuarter(quarterValue + 1)
  }


  return (
    <div className="bottomRow">
      <div className="down">
        <h3 className="down__title">Down</h3>
        <div className="down__value">3</div>
      </div>
      <div className="toGo">
        <h3 className="toGo__title">To Go</h3>
        <div className="toGo__value">7</div>
      </div>
      <div className="ballOn">
        <h3 className="ballOn__title">Ball on</h3>
        <div className="ballOn__value">21</div>
      </div>
      <div className="quarter">
        <h3 className="quarter__title">Quarter</h3>
        <div className="quarter__value">{quarterValue}</div>
      </div>
      <div className="awayButtons">
          <button onClick={() => quarterFunction()} className="awayButtons__touchdown">Quarter Button</button>
      </div>
    </div>
  );
};

export default BottomRow;
