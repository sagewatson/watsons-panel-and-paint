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
            At Watson's Panel & Paint, we pride ourselves on our ability to get
            your car up and running on the road again as quick as possible.
            After recent rennovations, we now have the facilities to get your
            car looking as good as new and faster than before.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewFacilities;
