import logo from "../public/images/homepage-images/watsons-logo.png";
import Image from "next/image";

const Logo = () => {
  return (
    <div>
      <Image
        src={logo}
        alt="Watson's Panel and Paint"
        width={350}
        height={43.75}
      />
    </div>
  );
};

export default Logo;
