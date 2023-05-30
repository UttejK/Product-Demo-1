import RenderCanvas from "./canvas";
import Customizer from "./pages/Customizer";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <main className="app transition-all ease-in">
        <Home />
        <RenderCanvas />
        <Customizer />
      </main>
    </>
  );
}

export default App;
