import { Outlet } from "react-router-dom";
import LayoutProvider from "./components/LayoutProvider";

function App() {
  return (
    <LayoutProvider>
      <Outlet />
    </LayoutProvider>
  );
}

export default App;
