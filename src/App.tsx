import "./App.css";
import Navigation from "./components/Navigation";
import HeroBanner from "./components/HeroBanner";
import Mesh from "./components/Mesh";
import Noise from "./components/Noise";

function App() {
  return (
    <>
      <Navigation />

      <div className="w-full h-screen px-4 pt-10 overflow-y-auto bg-transparent">
        <div className="w-full flex-col max-w-[1024px] m-auto bg-transparent">
          <HeroBanner />
        </div>
      </div>
      <Noise />
      <Mesh />
    </>
  );
}

export default App;
