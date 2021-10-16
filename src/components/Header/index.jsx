import React from "react";
import { useRouter } from "next/router";

import styles from "./styles.module.scss";

const Header = () => {
  const router = useRouter();

  return (
    <header className={styles.Header}>
      <div className={styles.HeaderLogo}>
        <h1 onClick={() => router.push("/")}>MUSIC</h1>
      </div>
      <nav className={styles.HeaderNavBar}>
        <a onClick={() => router.push("/")}>Pesquisar</a>
        <a onClick={() => router.push("/historico")}>Histórico</a>
      </nav>
    </header>
  );
};

export default Header;
