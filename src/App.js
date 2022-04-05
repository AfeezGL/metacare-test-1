import PrimaryNav from "./components/PrimaryNav";
import Teams from "./pages/Teams";
import { BrowserRouter } from "react-router-dom";
import MainHeader from "./components/MainHeader";

function App() {
  return (
    <BrowserRouter>
      <PrimaryNav />
      <div className="display">
        <MainHeader />
        {/* this is the main container for all pages */}
        <>
          <Teams />
        </>
      </div>
    </BrowserRouter>
  );
}

export default App;
