import css from "./App.module.css"
import Body from "./components/Body";
import Navbar from "./components/Navbar";
import Provides from "./components/Provides";
import Schedule from "./components/Schedule";

function App() {
  return (
    <div className={css.body}>
      <div className={css.black}>
        <Navbar />
        <Body />
        <Schedule />

        <div className={css.content}>
          <p><span style={{ color: '#8154FF' }}>Creators' </span><span style={{ color: '#36AEB2' }}>Campus </span><span style={{ color: '#EFD140' }}>Connect </span> : Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium quibusdam eaque facere sequi, error, eum similique nesciunt fuga, earum nobis natus! Delectus perspiciatis, in eius temporibus sapiente odit, quod harum officia nostrum enim hic!
          </p>
        </div>

        <Provides />
      </div>

      <div className={css.white}></div>
    </div>
  );
}

export default App;
