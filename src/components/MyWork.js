import React from "react";

// Components
import ProjectCard from "./ProjectCard";

// Styles
import styles from "../styles/scrollBar.module.css";

// Imgs
import cryptoWatcherImg from "../assets/crypto-watcher.png";
import pomofocusImg from "../assets/pomofocus.png";
import plantShopImg from "../assets/plant-shop.png";

const MyWork = () => {
  return (
    <div
      className={`${styles.scrollBar}
        grid grid-cols-1 md:grid-cols-2 gap-5 flex-1 overflow-auto
        max-w-3xl text-white w-full mx-auto my-5 px-10`}
    >
      <ProjectCard
        img={cryptoWatcherImg}
        projectLink="https://crypto-watcher-amir-sh.vercel.app"
        description="Crypto price tracker"
        features="SPA - Client-side data fetching - Data Revalidation -
            Pagination - Watchlist - Coin Price History Chart"
        techStack="React JS - TailwindCSS - Pure Css - Chart JS -
            Moment JS - Redux - MUI Icons"
        githubLink="https://github.com/AmirSh1382/Crypto-Watcher"
      />

      <ProjectCard
        img={pomofocusImg}
        projectLink="https://pomofocus-amir-sh.vercel.app"
        description="Pomofocus web clone"
        features="Editable timer using setting - Alarm sound - Dark mode
            - Task adding - Add & Edit & Delete Tasks"
        techStack="React JS - TailwindCSS - Pure Css - Bootstrap Icons"
        githubLink="https://github.com/AmirSh1382/pomofoucs"
      />

      <ProjectCard
        img={plantShopImg}
        projectLink="https://plant-shop-amir-sh.vercel.app"
        description="Plant shopping store"
        features="SPA - Client-side data fetching - Pagination - Dark mode
            - Cart - Products Detail Page - User Authentication (login / sign up)"
        techStack="React JS - TailwindCSS - Pure Css - Bootstrap Icons
            - GraphQL - Redux"
        githubLink="https://github.com/AmirSh1382/Plant-Shop"
      />
    </div>
  );
};

export default MyWork;