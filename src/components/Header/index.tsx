import Image from "next/image";

import styles from './styles.module.scss';

export function Header(){
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <Image src="/images/logo.svg" alt="Ig.news"  layout="fill" />
        <nav>
          <a>Home</a>
          <a>Posts</a>
        </nav>
      </div>
    </header>
  )
}