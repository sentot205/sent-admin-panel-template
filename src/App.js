import React from "react";
import Sidebar from "./components/sidebar";
import Navbar from "./components/navbar";
// import Login from "./components/login";
import Tables from "./components/table";
// import Blank from "./components/blank";
import Footer from "./components/footer";

function App() {

  return (
    <>
      <Navbar />
      <Sidebar />
      <div className="ml-0 md:ml-64 App">
        <Tables/>
        <Footer />
      </div>
    </>
  );
}

export default App;
