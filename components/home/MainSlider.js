// import Image from "next/image";
import HomePageImage from "../../images/homepage-images/home-page-image.jpg";

const MainSlider = () => {
  return (
    <div>
      {/* <Image> */}
      <img src={HomePageImage} alt="home-page-image" />
      {/* </Image> */}
    </div>
  );
};

export default MainSlider;
