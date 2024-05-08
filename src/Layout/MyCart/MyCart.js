import React from "react";
import AboutMeStyle from "./MyCart.module.css";
import { useDarkMode } from "../../Utils/DarkMode";
import { useUserStore } from "../../Zustand/Store";

function MyCart() {
  const { darkMode } = useDarkMode();
  const { user } = useUserStore();

  // console.log(user);

  return (
    <div className={AboutMeStyle.containerCard}>
      <div className={AboutMeStyle.card}>
        <div
          className={
            darkMode === true ? AboutMeStyle.front : AboutMeStyle.frontDark
          }
        >
          <div className={AboutMeStyle.cardTop}>
            <p className={AboutMeStyle.cardTopPara}>Profile</p>
          </div>

          <div className={AboutMeStyle.biggerCard}>
            <div className={AboutMeStyle.smallCard}>
              <img
                src={`${process.env.REACT_APP_IMAGE_PATH}/${user?.profile}`}
                alt={user?.firstName}
                className={AboutMeStyle.myPhoto}
              />
              <p className={AboutMeStyle.heading}> {user?.career} </p>
            </div>
            <p className={AboutMeStyle.follow}>Hover me for more...</p>
          </div>
        </div>
        <div className={AboutMeStyle.back}>
          <p className={AboutMeStyle.heading}>Follow Me</p>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100"
            height="100"
            fill="currentColor"
            // class="bi bi-person-add"
            className={AboutMeStyle.biPersonAdd}
            viewBox="0 0 16 16"
          >
            <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm.5-5v1h1a.5.5 0 0 1 0 1h-1v1a.5.5 0 0 1-1 0v-1h-1a.5.5 0 0 1 0-1h1v-1a.5.5 0 0 1 1 0Zm-2-6a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"></path>
            <path d="M8.256 14a4.474 4.474 0 0 1-.229-1.004H3c.001-.246.154-.986.832-1.664C4.484 10.68 5.711 10 8 10c.26 0 .507.009.74.025.226-.341.496-.65.804-.918C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4s1 1 1 1h5.256Z"></path>
          </svg>

          <div className={AboutMeStyle.icons}>
            <a href={user?.instagramLink}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="currentColor"
                // class="bi bi-instagram"
                className={AboutMeStyle.biInstagram}
                viewBox="0 0 16 16"
              >
                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"></path>
              </svg>
            </a>

            <a href={user?.facebookLink}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="currentColor"
                // class="bi bi-facebook"
                className={AboutMeStyle.biFacebook}
                viewBox="0 0 16 16"
              >
                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"></path>
              </svg>
              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="currentColor"
                className={AboutMeStyle.githubIcon}
                viewBox="0 0 16 16"
              >
                <path d="M12 0a12 12 0 0 0-3.8 23c.6 0 1.2-.2 1.7-.5 2.2 0 3.7-1 4.4-1.9.3-.3.6-.4.8-.8 0-.3.3-1.1 0-1.9-.3-.9-.5-1.5-1.7-1.8 0-.4-.6-2-.6-4.4 0-.9.3-1.6.8-2.2-2.8-.3-5.7-1.4-5.7-6.3 0-1.4.5-2.6 1.3-3.5-.1-.3-.6-1.7.1-3.5 0 0 1.1-.3 3.6 1.4 1-.3 2.1-.4 3.2-.4s2.2.1 3.2.4c2.5-1.7 3.6-1.4 3.6-1.4.7 1.8.2 3.2.1 3.5.8.9 1.3 2.1 1.3 3.5 0 4.9-3 6-5.8 6.3.5.4.9 1.2.9 2.5 0 1.8-.1 3.2-.1 3.6 0 .3.2.7.8.6.5-.4 1.7-1 4.4-1.9.5.4 1.1.5 1.7.5A12 12 0 0 0 12 0"></path>
              </svg> */}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyCart;
