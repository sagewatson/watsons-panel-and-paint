import Image from "next/image";
import styles from "../styles/Home.module.css";

import paintbooth from "../public/images/homepage-images/paintbooth.jpg";

const NewFacilities = () => {
  return (
    <div className={styles.newFacilities}>
      <div className={styles.paintBooth}>
        <Image
          src={paintbooth}
          alt="paintbooth"
          className={styles.paintBoothImage}
        />
        <div className={styles.paintBoothText}>
          <h2>The latest gear to get your car repaired faster</h2>
          <p>
            gfdsfdgdfsgdsfgsdfgsdfgsdfgsdfgdsfgsgsfdgfsdgfsdgfd
            gfdsfdgdfsgdsfgsdfgsdfgsdfgfdsafdsafsdfgdsfgsgsfdgfsdgfsdgfdgfds
            gdfs
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewFacilities;
