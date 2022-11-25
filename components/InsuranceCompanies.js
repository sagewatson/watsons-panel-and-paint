import Image from "next/image";
import styles from "../styles/Home.module.css";

import aaLogo from "../public/images/homepage-images/insurance-logos/aa.jpg";
import amiLogo from "../public/images/homepage-images/insurance-logos/ami.jpg";
import ampLogo from "../public/images/homepage-images/insurance-logos/amp.jpg";
import andoLogo from "../public/images/homepage-images/insurance-logos/ando.jpg";
import craLogo from "../public/images/homepage-images/insurance-logos/cra.jpg";
import fleetSmartLogo from "../public/images/homepage-images/insurance-logos/fleet-smart.jpg";
import fleetLogo from "../public/images/homepage-images/insurance-logos/fleet.jpg";
import iagLogo from "../public/images/homepage-images/insurance-logos/iag.jpg";
import lanternLogo from "../public/images/homepage-images/insurance-logos/lantern.jpg";
import licensedCraLogo from "../public/images/homepage-images/insurance-logos/licensed-cra.jpg";
import lumleyLogo from "../public/images/homepage-images/insurance-logos/lumley.jpg";
import nacLogo from "../public/images/homepage-images/insurance-logos/nac.jpg";
import nziLogo from "../public/images/homepage-images/insurance-logos/nzi.jpg";
import qbeLogo from "../public/images/homepage-images/insurance-logos/qbe.jpg";
import starLogo from "../public/images/homepage-images/insurance-logos/star.jpg";
import stateLogo from "../public/images/homepage-images/insurance-logos/state.jpg";
import towerLogo from "../public/images/homepage-images/insurance-logos/tower.jpg";
import tradeMeLogo from "../public/images/homepage-images/insurance-logos/trade-me.jpg";
import veroLogo from "../public/images/homepage-images/insurance-logos/vero.jpg";
import toyotaLogo from "../public/images/homepage-images/insurance-logos/toyota.jpg";

// add FMG and Protecta Logo 100px x 100px

const InsuranceCompanies = () => {
  return (
    <div className={styles.insuranceContainer}>
      <h2>
        We are backed by the most popular and trusted insurance companies around
        the country
      </h2>
      <div className={styles.insuranceImages}>
        <Image src={aaLogo} alt="AA logo" />
        <Image src={craLogo} alt="CRA logo" />
        <Image src={amiLogo} alt="AMI logo" />
        <Image src={ampLogo} alt="AMP logo" />
        <Image src={andoLogo} alt="Ando logo" />
        <Image src={fleetSmartLogo} alt="Fleet Smart logo" />
        <Image src={fleetLogo} alt="Fleet logo" />
        <Image src={iagLogo} alt="IAG logo" />
        <Image src={lanternLogo} alt="Lantern logo" />
        <Image src={licensedCraLogo} alt="Licensed CRA logo" />
        <Image src={lumleyLogo} alt="Lumley logo" />
        <Image src={nacLogo} alt="NAC logo" />
        <Image src={nziLogo} alt="NZI logo" />
        <Image src={qbeLogo} alt="QBE logo" />
        <Image src={starLogo} alt="Star logo" />
        <Image src={stateLogo} alt="State logo" />
        <Image src={towerLogo} alt="Tower logo" />
        <Image src={tradeMeLogo} alt="Trade Me logo" />
        <Image src={veroLogo} alt="Vero logo" />
        <Image src={toyotaLogo} alt="Toyota logo" />
      </div>
    </div>
  );
};

export default InsuranceCompanies;
