import PrimaryNav from "./components/PrimaryNav";
import { BrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";

function App() {
  return (
    <BrowserRouter>
      <PrimaryNav />
      <Layout />
    </BrowserRouter>
  );
}

export default App;
