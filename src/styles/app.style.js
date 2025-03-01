import styled from "styled-components";

export const AppContainer = styled.div`
`;
export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 17vh;
  padding: 0 5rem;
  .button {
  border: 2px solid rgb(53, 53, 53); /* Border color */
  background-color: transparent; /* Transparent background */
  color: rgb(53, 53, 53); /* Text color */
  padding: 10px 20px;
  cursor: pointer;
  transition: all 0.3s ease; /* Smooth transition for color change */
  border-radius: 2rem;
}

.button:hover {
  background-color: rgb(53, 53, 53); /* Hover effect */
  color: white; /* Change text color on hover */
}

.button.active {
  background-color: rgb(53, 53, 53); /* Active background color */
  color: white; /* Active text color */
}
  .name {
    font-size: 2rem;
  }

  .name:hover {
    cursor: default;
  }

  .links {
    display: flex;
    gap: 2rem;
    list-style: none;
    font-size: 1.5rem;
  }

  a {
    text-decoration: none;
    color: black;
  }

  a:hover {
    color: grey;
    text-decoration: underline;
    text-underline-offset: 0.5rem;
    text-decoration-color: rgb(181, 181, 181);
  }

  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

export const HamburgerContainer = styled.div`
  display: none;
  justify-content: space-between;
  align-items: center;
  height: 17vh;
  padding: 0 2rem;
  width: 100%;

  .name {
    font-size: 2rem;
  }

  .name:hover {
    cursor: default;
  }

  .hamburger-menu {
    position: relative;
  }

  .hamburger-icon {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 24px;
    width: 30px;
    cursor: pointer;
  }

  .hamburger-icon span {
    width: 100%;
    height: 3px;
    background-color: black;
    transition: all 0.3s ease-in-out;
  }

  .menu-links {
    position: absolute;
    top: 100%;
    right: 0;
    background-color: white;
    width: 200px;
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s ease-in-out;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
  }

  .menu-links.open {
    max-height: 300px;
    padding: 1rem 0;
  }

  .menu-links a {
    display: block;
    padding: 10px;
    text-align: center;
    font-size: 1.2rem;
    color: black;
    text-decoration: none;
    transition: all 0.3s ease-in-out;
  }

  .menu-links a:hover {
    background-color: #f0f0f0;
  }

  .menu-links li {
    list-style: none;
  }

  .hamburger-icon.open span:first-child {
    transform: rotate(45deg) translate(5px, 6px);
  }

  .hamburger-icon.open span:nth-child(2) {
    opacity: 0;
  }

  .hamburger-icon.open span:last-child {
    transform: rotate(-45deg) translate(5px, -6px);
  }

  @media screen and (max-width: 1024px) {
    display: flex;
  }

  @media screen and (max-width: 480px) {
    padding: 0 1rem;

    .name {
      font-size: 1.5rem;
    }

    .hamburger-icon {
      width: 25px;
      height: 20px;
    }

    .menu-links {
      width: 170px;
    }

    .menu-links a {
      font-size: 1rem;
      padding: 8px;
    }
  }
`;
export const ProfileContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 5rem;
  min-height: 80vh;
  align-items: center;
  flex-wrap: wrap;
  padding: 2rem;

  .profile-con {
    display: flex;
    width: 350px;
    height: 350px;
    margin: auto 0;
  }

  .profile-con img {
    width: 100%;
    height: 100%;
    max-width: 400px;
    max-height: 400px;
    border-radius: 50%;
    object-fit: cover;
  }

  .profile-info {
    align-self: center;
    text-align: center;
  }

  .profile-info-p2 {
    font-size: 1.75rem;
    margin-bottom: 1rem;
  }

  .profile-info-p1 {
    font-weight: 600;
  }

  .title {
    font-size: 3rem;
    text-align: center;
  }

  .social-icons {
    display: flex;
    justify-content: center;
    margin-top: 1rem;
    gap: 1rem;
  }

  .social-icons img {
    cursor: pointer;
    height: 2rem;
  }

  .btn-container {
    display: flex;
    justify-content: center;
    gap: 1rem;
    flex-wrap: wrap;
  }

  .btn {
    font-weight: 600;
    transition: all 300ms ease;
    padding: 1rem;
    width: 8rem;
    border-radius: 2rem;
    border: 0.1rem solid rgb(53, 53, 53);
    background: none;
    color: white;
    cursor: pointer;
  }

  .btn-color-1 {
    background: rgb(0, 0, 0);
  }
  .btn-color-1:hover {
    background: rgb(53, 53, 53);
  }

  .btn-color-2 {
    border-color: rgb(53, 53, 53);
    color: rgb(53, 53, 53);
  }

  .btn-color-2:hover {
    background: rgb(53, 53, 53);
    border-color: rgb(255, 255, 255);
    color: aliceblue;
  }

  @media screen and (max-width: 1024px) {
    flex-direction: column;
    gap: 3rem;
    min-height: auto;
    text-align: center;

    .profile-con {
      width: 250px;
      height: 250px;
    }

    .profile-con img {
      width: 100%;
      height: 100%;
    }

    .profile-info-p2 {
      font-size: 1.5rem;
    }

    .title {
      font-size: 2.5rem;
    }
  }

  @media screen and (max-width: 768px) {
    .profile-con {
      width: 200px;
      height: 200px;
    }

    .profile-info-p2 {
      font-size: 1.25rem;
    }

    .title {
      font-size: 2rem;
    }

    .btn {
      width: 7rem;
      padding: 0.75rem;
    }
  }

  @media screen and (max-width: 480px) {
    padding: 1rem;
    gap: 2rem;

    .profile-con {
      width: 150px;
      height: 150px;
    }

    .profile-info-p2 {
      font-size: 1rem;
    }

    .title {
      font-size: 1.75rem;
    }

    .btn {
      width: 6rem;
      padding: 0.5rem;
      font-size: 0.9rem;
    }
  }
`;


export const AboutContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem 6rem 8rem 6rem;

  .about-title {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 6rem;
  }

  .about-p1 {
    font-weight: 600;
  }

  .section-container {
    display: flex;
    gap: 4rem;
    height: 80%;
    align-items: center;
  }

  .section-pic-container {
    margin: auto 0;
  }

  .title {
    font-size: 3rem;
    text-align: center;
  }

  .about-containers {
    gap: 2rem;
    margin-bottom: 2rem;
    margin-top: 2rem;
    max-width: 800px;
    width: 100%;
  }

  .about-details-container {
    justify-content: center;
    flex-direction: column;
  }

  .about-containers,
  .about-details-container {
    display: flex;
  }

  .about-pic {
    border-radius: 2rem;
    width: 400px;
  }

  .arrow {
    position: absolute;
    right: 5rem;
    bottom: 2.5rem;
  }

  .details-container {
    padding: 1.5rem;
    flex: 1;
    background: white;
    border-radius: 2rem;
    border: 0.1rem solid rgb(53, 53, 53);
    text-align: center;
    border-color: rgb(163, 163, 163);
  }

  .text-container {
    max-width: 800px;
    width: 100%;
  }

  /* Responsive Design */
  @media screen and (max-width: 1024px) {
    padding: 2rem 3rem;

    .section-container {
      flex-direction: column;
      align-items: center;
      text-align: center;
    }

    .about-pic {
      width: 300px;
    }

    .arrow {
      right: 2rem;
      bottom: 2rem;
    }
  }

  @media screen and (max-width: 768px) {
    padding: 2rem 2rem;

    .title {
      font-size: 2.5rem;
    }

    .about-containers {
      flex-direction: column;
      align-items: center;
    }

    .about-pic {
      width: 250px;
    }

    .details-container {
      padding: 1rem;
    }
  }

  @media screen and (max-width: 480px) {
    padding: 2rem 1rem;

    .title {
      font-size: 2rem;
    }

    .about-pic {
      width: 200px;
    }

    .arrow {
      right: 1rem;
      bottom: 1.5rem;
    }
  }
`;

export const ExperienceContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 80%;
  padding: 6rem 6rem 10rem 6rem;

  .experience-containers {
    display: flex;
    gap: 2rem;
    padding-bottom: 8rem;
  }

  .about-title {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 6rem;
  }

  .section-text-p1 {
    font-weight: 600;
  }

  .experience-sub-title {
    color: rgb(83, 83, 83);
    font-weight: 600;
    font-size: 1.75rem;
    margin-bottom: 3rem;
  }

  .title {
    font-size: 3rem;
    text-align: center;
  }

  .arrow {
    position: absolute;
    right: 5rem;
    bottom: 2.5rem;
  }

  .experience-details-container {
    display: flex;
    justify-content: center;
    flex-direction: column;
  }

  .details-containers {
    padding: 1.5rem;
    flex: 1;
    background: white;
    border-radius: 2rem;
    border: 0.1rem solid rgb(53, 53, 53);
    text-align: center;
    border-color: rgb(163, 163, 163);
  }

  .article-container {
    display: flex;
    text-align: initial;
    flex-wrap: wrap;
    flex-direction: row;
    gap: 2.5rem;
    justify-content: space-around;
  }

  article {
    display: flex;
    width: 10rem;
    justify-content: space-around;
    gap: 0.5rem;
  }

  article .icon {
    cursor: default;
  }

  /* Responsive Design */
  @media screen and (max-width: 1024px) {
    padding: 4rem 3rem;

    .experience-containers {
      flex-direction: column;
      align-items: center;
      padding-bottom: 6rem;
    }

    .arrow {
      right: 2rem;
      bottom: 2rem;
    }
  }

  @media screen and (max-width: 768px) {
    padding: 3rem 2rem;

    .title {
      font-size: 2.5rem;
    }

    .experience-containers {
      gap: 1.5rem;
      padding-bottom: 4rem;
    }

    .details-containers {
      padding: 1rem;
    }

    .article-container {
      flex-direction: column;
      align-items: center;
    }
  }

  @media screen and (max-width: 480px) {
    padding: 2rem 1rem;

    .title {
      font-size: 2rem;
    }

    .experience-containers {
      gap: 1rem;
      padding-bottom: 3rem;
    }

    .article-container {
      gap: 1rem;
    }

    .arrow {
      right: 1rem;
      bottom: 1.5rem;
    }
  }
`;

export const ProjectsContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 80vh;
  padding: 6rem 6rem 10rem 6rem;

  .about-title {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .title {
    font-size: 3rem;
    text-align: center;
  }

  .experience-details-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .about-containers {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    justify-content: center;
    margin: 2rem 0;
    width: 100%;
  }

  .details-containers {
    padding: 1.5rem;
    flex: 1;
    background: white;
    border-radius: 2rem;
    border: 1px solid rgb(163, 163, 163);
    text-align: center;
    max-width: 350px; /* Prevents project cards from being too large */
  }

  .article-container {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .project-img {
    border-radius: 2rem;
    width: 100%;
    height: 250px;
    object-fit: cover;
  }

  .experience-sub-title {
    color: rgb(83, 83, 83);
    font-weight: 600;
    font-size: 1.75rem;
    margin-bottom: 1.5rem; /* Reduced margin */
  }

  .btn-container {
    display: flex;
    justify-content: center;
    gap: 1rem;
  }

  .btn {
    font-weight: 600;
    transition: all 300ms ease;
    padding: 0.8rem;
    width: 8rem;
    border-radius: 2rem;
    border: 1px solid rgb(53, 53, 53);
    background: rgb(53, 53, 53);
    color: white;
    cursor: pointer;
  }

  .btn-color-2 {
    background: none;
    color: rgb(53, 53, 53);
  }

  .btn-color-2:hover {
    background: rgb(53, 53, 53);
    color: white;
  }

  .color-container {
    background: rgb(250, 250, 250);
  }

  .arrow {
    position: absolute;
    right: 5rem;
    bottom: 2.5rem;
    cursor: pointer;
  }

  /* Responsive Design */

  @media (max-width: 1024px) {
    padding: 5rem 3rem;

    .title {
      font-size: 2.5rem;
    }

    .about-containers {
      gap: 1.5rem;
    }

    .details-containers {
      max-width: 300px;
    }
  }

  @media (max-width: 768px) {
    padding: 4rem 2rem;

    .title {
      font-size: 2.2rem;
    }

    .about-containers {
      flex-direction: column;
      align-items: center;
    }

    .details-containers {
      width: 100%;
      max-width: 100%;
    }

    .btn {
      width: 100%;
    }

    .arrow {
      right: 2rem;
      bottom: 2rem;
    }
  }

  @media (max-width: 480px) {
    padding: 3rem 1rem;

    .title {
      font-size: 2rem;
    }

    .details-containers {
      padding: 1rem;
      width: 100%;
    }

    .btn-container {
      flex-direction: column;
      gap: 0.5rem;
    }

    .arrow {
      right: 1rem;
      bottom: 1.5rem;
    }
  }
`;



export const ContactContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 80vh;
  padding: 4rem 6rem; /* Added padding for better layout */

  .contact-info-upper-container {
    display: flex;
    justify-content: center;
    border-radius: 2rem;
    border: 0.1rem solid rgb(163, 163, 163);
    background: rgb(250, 250, 250);
    margin: 2rem auto;
    padding: 1rem;
    width: 100%;
    max-width: 700px;
  }

  .contact-info-container {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    margin: 1rem;
  }

  .email {
    text-decoration: none;
    font-weight: 600;
  }

  .email:hover {
    text-decoration: underline;
    color: grey;
  }

  .contact-info-container p {
    font-size: 1.2rem;
  }

  .contact-icon {
    cursor: default;
  }

  .about-title {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .title {
    font-size: 3rem;
    text-align: center;
  }

  /* Responsive Design */
  @media (max-width: 1024px) {
    padding: 3rem 4rem;

    .title {
      font-size: 2.5rem;
    }

    .contact-info-upper-container {
      max-width: 500px;
      flex-direction: column;
      padding: 1rem;
      max-width: 100%;
    }
  }

  @media (max-width: 768px) {
    padding: 2rem 2rem;

    .title {
      font-size: 2rem;
    }

    .contact-info-upper-container {
      flex-direction: column;
      padding: 1rem;
      max-width: 100%;
    }
  }

  @media (max-width: 480px) {
    padding: 2rem 1rem;

    .title {
      font-size: 1.8rem;
    }

    .contact-info-container {
      flex-direction: column;
      text-align: center;
    }
  }
`;

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  justify-content: center;
  height: 20vh;
  margin: 0;
  padding: 2rem;

  .links {
    display: flex;
    gap: 1.5rem;
    list-style: none;
    font-size: 1.2rem;
  }

  a {
    text-decoration: none;
    font-weight: 600;
  }

  a:hover {
    color: grey;
    text-decoration: underline;
    text-underline-offset: 0.5rem;
    text-decoration-color: rgb(181, 181, 181);
  }

  p {
    text-align: center;
    font-size: 1rem;
    color: rgb(83, 83, 83);
  }

  /* Responsive Design */
  @media (max-width: 1024px) {
    height: auto;
    gap: 2rem;
    padding: 2rem;
  }

  @media (max-width: 768px) {
    .links {
      flex-direction: column;
      gap: 1rem;
    }

    a {
      font-size: 1rem;
    }
  }

  @media (max-width: 480px) {
    .links {
      font-size: 0.9rem;
    }

    p {
      font-size: 0.9rem;
    }
  }
`;

