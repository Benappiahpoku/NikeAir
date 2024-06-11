import { FC } from "react";
import styles from "./Navbar.module.css";

const Navbar: FC = () => {
  return (
    <div className=" text-white">
      <nav className="flex justify-center items-center h-16">
        <ul className="flex space-x-20">
          <li className={styles.uppercase}>Home</li>
          <li className={styles.uppercase}>Collection</li>
          <li className={styles.uppercase}>About</li>
          <li className={styles.uppercase}>Contact</li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
