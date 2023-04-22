import { Link, Outlet } from "react-router-dom";
import TopNav from "./components/TopNav";

function App() {
  return (
    <div className="h-screen font-poppins  w-full p-3 flex items-center justify-center">
      <div className="h-full w-full bg-red-200">
        <TopNav />
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default App;
