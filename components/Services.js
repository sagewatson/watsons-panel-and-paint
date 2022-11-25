import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCarBurst,
  faFillDrip,
  faTruckPickup,
  faScrewdriverWrench,
  faPenToSquare,
  faGear,
} from "@fortawesome/free-solid-svg-icons";

import styles from "../styles/Home.module.css";

const Services = () => {
  return (
    <>
      <div className={styles.ourServices}>
        <h2>Our services</h2>
      </div>
      <div className={styles.icons}>
        <div>
          <FontAwesomeIcon icon={faCarBurst} />
          <p>Smash repairs</p>
        </div>
        <div>
          <FontAwesomeIcon icon={faFillDrip} />
          <p>Car painting</p>
        </div>
        <div>
          <FontAwesomeIcon icon={faTruckPickup} />
          <p>Tow service</p>
        </div>
        <div>
          <FontAwesomeIcon icon={faScrewdriverWrench} />
          <p>Tow service</p>
        </div>
        <div>
          <FontAwesomeIcon icon={faPenToSquare} />
          <p>Free quotes</p>
        </div>
        <div>
          <FontAwesomeIcon icon={faGear} />
          <p>Wheel alignments</p>
        </div>
      </div>
    </>
  );
};

export default Services;
