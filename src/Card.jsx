import BarGraph from "./BarGraph";

function Card() {

    return (
        <div className="container">
            <div className="top-section">
                <div className="top-section-heading">
                    <p>My balance</p>
                    <h3>$921.48</h3>
                </div>
                <svg width="72" height="48" viewBox="0 0 72 48" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><circle fill="#382314" cx="48" cy="24" r="24"/><circle stroke="#FFF" stroke-width="2" cx="24" cy="24" r="23"/></g></svg>
            </div>
            <div className="bottom-section">
                <h2>Spending - Last 7 days</h2>
                <BarGraph />
                <hr />
                <div className="info">
                    <p>Total this month</p>
                    <div className="money">
                        <h1 className="bold">$478.33</h1>
                        <div className="money-info">
                            <p className="bold">+2.4%</p>
                            <p>from last month</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      
    );
  }
  
  export default Card
  
/* mon
  tue
  wed
  thu
  fri
  sat
  sun
*/