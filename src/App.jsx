// import logo from "/logo.png";
// import "./App.css";
// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";
// import { Footer } from "./footer/footer";
// // import { Footer } from "./footer/Footer"; // Ensure the footer component is imported correctly

// function App() {
//   return (
//     <div id="root">
//       <div className="main-content">
//         <motion.div
//           className="App"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           transition={{ duration: 2 }}
//         >
//           <Link to="/home">
//             <img
//               style={{ height: "10rem" }}
//               src={logo}
//               className="logo react"
//               alt="React logo"
//             />
//           </Link>
//           <h1>
//             LUMINE
//             <hr />
//           </h1>
//           <h3>Sankar Gopan</h3>
//         </motion.div>
//       </div>
//       {/* Footer Component */}
//       <Footer />
//     </div>
//   );
// }

// export default App;
import { useEffect } from "react";
import logo from "/logo.png";
import "./App.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Footer } from "./footer/footer";

function App() {
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      document.body.style.backgroundPosition = `0% ${scrollPosition / 5}%`;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div id="root">
      <div className="main-content">
        <motion.div
          className="App"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 2 }}
        >
          <Link to="/home">
            <img
              style={{ height: "10rem" }}
              src={logo}
              className="logo react"
              alt="React logo"
            />
          </Link>
          <h1>
            LUMINE
            <hr />
          </h1>
          <h3>Sankar Gopan</h3>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
