import React from "react";
import Sidebar from "./components/sidebar";
import Sidebar1 from "./components/sidebar/sidebar1";
import Navbar from "./components/navbar";
// import Login from "./components/login";
import Tables from "./components/table";
// import Blank from "./components/blank";
import Footer from "./components/footer";

function App() {

  return (
    <>
      {/* <Navbar /> */}
      {/* <Sidebar1 /> */}
      <div className="ml-0 md:ml-64 App">
        <Tables/>
        <Footer />
      </div>
    </>
  );
}

export default App;
