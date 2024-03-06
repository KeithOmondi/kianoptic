import React from "react";
import { Link } from "react-router-dom";
import styles from "../../../styles/styles";

const Hero = () => {
  return (
    <div
  className={`relative min-h-[70vh] 800px:min-h-[80vh] w-full bg-no-repeat ${styles.noramlFlex}`}
  style={{
    backgroundImage:
      "url(https://img.freepik.com/free-photo/young-female-put-glasses-looking-determined_176420-20746.jpg?t=st=1709572230~exp=1709575830~hmac=24d56b9fdfdd00962f15b05f054592f29c1391b0b54e73be99bccc03c9f66983&w=740)",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPositionY: "-40px",
    backdropFilter: "blur(-8px)", // Apply blur effect
    backgroundColor: "rgba(255, 255, 255, 0.5)", // Adjust background color opacity for better visibility
  }}
>
  {/* Content for hero section */}
  <div>
    <h1 className="text-[35px] font-bold uppercase pl-10">fine eyewear <br /> optimize <br/> your world</h1>
  </div>
</div>

  );
};

export default Hero;
