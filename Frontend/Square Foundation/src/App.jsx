import { BrowserRouter, Link, Route, Routes } from "react-router";

import "./App.css";
import Homepage from "./Components/HomePage/homepage";
import Login from "./Components/LoginPage/login";
import Signup from "./Components/SignUp/signup";
import ViewDetails from "./Components/ViewDetails/viewDetails";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/detail" element={<ViewDetails/>}/>
          <Route
            path="*"
            element={
              <div>
                NOT FOUND <Link to="/">Home</Link>
              </div>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
