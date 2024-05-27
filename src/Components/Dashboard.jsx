import React from 'react'

function Dashboard() {
  return (
    <div className="container">
        <div className="header">
            <div className="leaderboard">
                <p class="heading">LeaderBoard</p>
                <p class="home-lb"> <img width="18" height="18" src="https://img.icons8.com/material-outlined/48/home--v2.png" alt="home--v2"/> / LeaderBoard</p>
            </div>
            <form>
                <input type="text" placeholder="Search by name"/>
                <button type="submit">Search</button>
            </form>
        </div>

        <div className="basket">
            <div className="basket-header">
                <h2>Basic Basktest</h2>
                <div className="slippage">
                    <span>Slippage</span>
                    <select>
                        <option>0%</option>
                        <option>0.5%</option>
                        <option>1%</option>
                    </select>
                </div>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Rank</th>
                        <th>Name</th>
                        <th>Calmar Ratio<img width="18" height="18" src="https://img.icons8.com/color/18/bullish.png" alt="bullish"/></th>
                        <th>Overall Profit</th>
                        <th>Avg. Daily Profit</th>
                        <th>Win %(Day)</th>
                        <th>Price (Rs)</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><strong>1</strong></td>
                        <td>Based on Premium and</td>
                        <td><img width="18" height="18" src="https://img.icons8.com/color/18/bullish.png" alt="bullish"/>2.02</td>
                        <td>	194096.05</td>
                        <td>158.45</td>
                        <td>0.62</td>
                        <td>-</td>
                        <td><a href="#">view↗</a></td>
                    </tr>
                    <tr>
                        <td><strong>2</strong></td>
                        <td>strategy_name</td>
                        <td><img width="18" height="18" src="https://img.icons8.com/color/18/bullish.png" alt="bullish"/>1.98</td>
                        <td>171862.74</td>
                        <td>138.26</td>
                        <td>0.6</td>
                        <td>500/-</td>
                        <td><a href="#">buy↗</a></td>
                    </tr>
                    <tr>
                        <td><strong>3</strong></td>
                        <td>strategy_name</td>
                        <td><img width="18" height="18" src="https://img.icons8.com/color/18/bullish.png" alt="bullish"/>1.75</td>
                        <td>264090.37</td>
                        <td>216.11</td>
                        <td>0.64</td>
                        <td>-</td>
                        <td><a href="#">view↗</a></td>
                    </tr>
                    <tr>
                        <td><strong>4</strong></td>
                        <td>strategy_name</td>
                        <td><img width="18" height="18" src="https://img.icons8.com/color/18/bullish.png" alt="bullish"/>1.75</td>
                        <td>264090.37</td>
                        <td>216.11</td>
                        <td>0.64</td>
                        <td>-</td>
                        <td><a href="#">view↗</a></td>
                    </tr>
                    <tr>
                        <td><strong>5</strong></td>
                        <td>Wait and trade_Save</td>
                        <td><img width="18" height="18" src="https://img.icons8.com/color/18/bullish.png" alt="bullish"/>1.62</td>
                        <td>124537.84</td>
                        <td>113.11</td>
                        <td>0.61</td>
                        <td>-</td>
                        <td><a href="#">view↗</a></td>
                    </tr>
                    <tr>
                        <td><strong>6</strong></td>
                        <td>Based on premium wit</td>
                        <td><img width="18" height="18" src="https://img.icons8.com/color/18/bullish.png" alt="bullish"/>1.55</td>
                        <td>99916.32</td>
                        <td>136.5</td>
                        <td>0.48</td>
                        <td>-</td>
                        <td><a href="#">view↗</a></td>
                    </tr>
                    <tr>
                        <td><strong>7</strong></td>
                        <td>Selling with re entr</td>
                        <td><img width="18" height="18" src="https://img.icons8.com/color/18/bullish.png" alt="bullish"/>1.38</td>
                        <td>254470.35</td>
                        <td>212.95</td>
                        <td>0.63</td>
                        <td>-</td>
                        <td><a href="#">view↗</a></td>
                    </tr>
                    <tr>
                        <td><strong>8</strong></td>
                        <td>iron condor</td>
                        <td><img width="18" height="18" src="https://img.icons8.com/color/18/bullish.png" alt="bullish"/>1.31</td>
                        <td>132699.25</td>
                        <td>103.43</td>
                        <td>0.63</td>
                        <td>-</td>
                        <td><a href="#">view↗</a></td>
                    </tr>
                    <tr>
                        <td><strong>9</strong></td>
                        <td>strategy_name</td>
                        <td><img width="18" height="18" src="https://img.icons8.com/color/18/bullish.png" alt="bullish"/>1.12</td>
                        <td>136226.09</td>
                        <td>111.11</td>
                        <td>0.58</td>
                        <td>-</td>
                        <td><a href="#">view↗</a></td>
                    </tr>
                    <tr>
                        <td><strong>10</strong></td>
                        <td>strategy_name</td>
                        <td><img width="18" height="18" src="https://img.icons8.com/color/18/bullish.png" alt="bullish"/>1.11</td>
                        <td>260759.53</td>
                        <td>175.71</td>
                        <td>0.35</td>
                        <td>-</td>
                        <td><a href="#">view↗</a></td>
                    </tr>
                </tbody>
            </table>
            <div className='buttons'>
                <button>prev</button>
                <button>1</button>
                <button>2</button>
                <button>3</button>
                <button>next</button>
            </div>
        </div>
    </div>
  )
}

export default Dashboard
