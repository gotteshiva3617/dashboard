import React from 'react'

function NavBar() {
  return (
      <div className="navbar">
        <div className="main-nav">
            <div className="left-box">
                <img src="https://www.unfluke.in/static/media/cropped_unfluke_full.148e5bfc.png" alt="logo"/>
            </div>
            <div className="right-box">
                <img src="https://www.unfluke.in/static/media/bell-icon.d99e8edc.png" alt="notification"/>
                <img src="https://www.unfluke.in/static/media/coin.9bfaef7e.jpeg" alt="money"/>
                <div class="dropdown">
                <button class="dropbtn"><img src="https://www.unfluke.in/static/media/monkey.5456259d.jpg" alt="user"/></button>
                <div class="dropdown-content">
                  <a href="#">My Earnings</a>
                  <a href="#">Funds</a>
                  <a href="#">Change Password</a>
                  <a href="#">Logout</a>
                </div>
            </div>
            </div>
        </div>
        <hr/>

      <div className="nav-links">
            <h4>LeaderBoard</h4>
            <h4>Historical Trading</h4>
            <h4>Historical Chart</h4>
            <h4>Scanners</h4>
            <h4>Alert</h4>
            <h4>Basic Backtest</h4>
            <h4>Advance Backtest</h4>
            <h4>Pricing</h4>
            <h4>My Earnings</h4>
      </div>
    </div>
  )
}

export default NavBar
