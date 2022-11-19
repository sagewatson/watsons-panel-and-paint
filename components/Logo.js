import logo from "../public/images/homepage-images/WATSON-LOGO-STRETCHED-TRANSPARENT.png";
import Image from "next/image";

const Logo = () => {
  return (
    <div>
      <Image
        src={logo}
        alt="watson's panel and paint logo"
        width={400}
        height={50}
      />
    </div>
  );
};

export default Logo;
