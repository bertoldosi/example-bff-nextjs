import React from "react";

import styles from "./styles.module.scss";

import Search from "../components/Search";

const Main = () => {
  return (
    <div className={styles.Main}>
      <Search />
    </div>
  );
};

export default Main;
