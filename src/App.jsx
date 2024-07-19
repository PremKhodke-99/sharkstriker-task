import Accordian from "./components/Accordian"
import BarChart from "./components/BarChart"
import Box from "./components/Box"
import Earth from "./components/Earth"
import Navbar from "./components/Navbar"
import SearchAndFilter from "./components/SearchAndFilter"
import Table from "./components/Table"

function App() {

  return (
    <div>
      <Navbar />
      <SearchAndFilter />
      <div className="grid-view">
        <div className="left">
          <div className="top">
            <img src="back.png" alt="back" />
            <h5>Top Users</h5>
          </div>
          <div className="radar">
            <p>Current Top Suspect Assets{' '}
              <select>
                <option>25</option>
              </select>
            </p>
            <img src="radar.webp" alt="radar" />
          </div>
          <p className="para">Expand All</p>
          <Accordian />
        </div>

        <div className="middle">
          <div className="top">
            <Box
              title={'ml-ids'}
              content={'2 / 2 / 21K'}
              classN='top-left'
            />
            <Box
              title={'traffic anomalies'}
              content={'31 / 220'}
            />
            <Box
              title={'malware sandbox'}
              content={'0 / 0'}
              classN='top-right'
            />
          </div>

          <div className="center">
            <div className="circle">
              <img src="meter.png" alt="meter" />
              <div className="earth">
                <Earth />
              </div>
            </div>
          </div>

          <div className="bottom">
            <Box
              title={'found assets'}
              content={'0 / 4 / 1715'}
              classN='bottom-left'
            />
            <Box
              title={'uba detections'}
              content={'0 / 0'}
            />
            <Box
              title={'daily data injested'}
              content={'11.78 / 1000'}
              classN='bottom-right'
            />
          </div>
        </div>

        <div className="right">
          <div className="bar">
            <p>Top Security Events{' '}
              <select>
                <option>100</option>
              </select>
            </p>
            <BarChart barwidth={100} barheight={100} />
          </div>
          <p className="para">Collapse All</p>

          <h5>🔑 Private to Private Exploit Anomaly{' '}<span>77 Score</span></h5>
          <Table />
        </div>
      </div>

      <div className="border">
        <div className="inner-box">
          <div className="head">
            <h5>Security Events Over Time</h5>
            <img src="graph-ico.png" />
          </div>
          <BarChart barwidth={800} barheight={100} />
        </div>
      </div>

    </div>
  )
}

export default App
