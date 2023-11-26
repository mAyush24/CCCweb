import css from "./App.module.css"
import Body from "./components/Body";
import Gallery from "./components/Gallery";
import Line from "./components/Line";
import Navbar from "./components/Navbar";
import Provides from "./components/Provides";
import Schedule from "./components/Schedule";

function App() {
  return (
    <div className={css.body}>
      <div className={css.black}>
        <Navbar />
        <div style={{display:'flex', justifyContent:'center'}}>
          <Body />
        </div>
        <Schedule />

        <div className={css.content}>
          <p><span style={{ color: '#8154FF' }}>Creators' </span><span style={{ color: '#36AEB2' }}>Campus </span><span style={{ color: '#EFD140' }}>Connect </span> : Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium quibusdam eaque facere sequi, error, eum similique nesciunt fuga, earum nobis natus! Delectus perspiciatis, in eius temporibus sapiente odit, quod harum officia nostrum enim hic!
          </p>
        </div>

        <Provides />
        <Line />
        <Gallery />
      </div>

      <div className={css.white}>
        <div className={css.heading}>
          <h1><span style={{ color: '#555BF4' }}>EXCITED!?</span> BOOK <br /> YOUR TICKET NOW</h1>
          <h1 className={css.ticket}>CHOOSE YOUR <span style={{ color: '#8154FF' }}>TICKET</span></h1>

          <div className={css.ticketBox}>
            <div className={css.card} style={{ width: 'fit-content' }}>
              <div className={css.innerBorder}>
                <h2 style={{ color: 'gold' }}>TICKET</h2>
                <p style={{ color: 'gold' }}>★★★★★</p>
              </div>
            </div>
          </div>

          <center>
            <button className={css.btn}>Coming Soon</button>
          </center>
        </div>
      </div>
    </div>
  );
}

export default App;
