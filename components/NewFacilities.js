import Image from "next/image";
import styles from "../styles/Home.module.css";

import paintbooth from "../public/images/homepage-images/paintbooth.jpg";

const NewFacilities = () => {
  return (
    <div className={styles.newFacilities}>
      <div className={styles.paintboothImage}>
        <Image src={paintbooth} alt="paintbooth" />
      </div>
    </div>
  );
};

export default NewFacilities;
