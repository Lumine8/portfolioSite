import { Footer } from "../footer/footer";
import { NavBar } from "../navigation/navbar";
import { DotLottie } from "../assets/dotLotties";

const Resume = () => {
  return (
    <>
      <NavBar />
      <div className="main-content">
        <h1>Resume</h1>
        <p>Here is my resume</p>
        <DotLottie />
      </div>
      <Footer />
    </>
  );
};

export default Resume;
