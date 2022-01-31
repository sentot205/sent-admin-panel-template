import React from "react";
import Sidebar from "./components/sidebar";
import Navbar from "./components/navbar";
// import Login from "./components/login";
import Tables from "./components/table";
import Footer from "./components/footer";

// import logo from "./logo.svg";
import "./App.css";

function App() {

  return (
    <>
      <Navbar />
      <Sidebar />
      <div className="ml-0 md:ml-64 App">
        {/* <header className="App-header bg-white dark:bg-gray-800 text-gray-800 dark:text-white transition delay-150 duration-300">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
        </header> */}
        {/* <Login /> */}
        <Tables/>
        <Footer />
      </div>
    </>
  );
}

export default App;
