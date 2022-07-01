import React from "react";
import styles from "./footer.module.scss";

const Footer = () => {
  return (
    <div className={styles.container}>
      {" "}
      <span>© Copyright 2022 Biswap.org , Audited by CERTIK.</span>
    </div>
  );
};

export default Footer;
