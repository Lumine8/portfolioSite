// import { SplineAnimation } from "../assets/SplineAnimation";
import { Footer } from "../footer/footer";
import { NavBar } from "../navigation/navbar";

// import SplineAnimation from "../assets/SplineAnimation"; // ✅ Fixed Import

export const HomePage = () => {
  return (
    <>
      <NavBar />
      <div className="main-content">
        <h1>Welcome to HomePage</h1>
        <p>This is the home page.</p>
        {/* <SplineAnimation /> ✅ Now it works! */}
      </div>
      <Footer />
    </>
  );
};
