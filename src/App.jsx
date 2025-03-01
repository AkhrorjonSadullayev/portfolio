import {
  AboutContainer,
  AppContainer,
  ContactContainer,
  ExperienceContainer,
  FooterContainer,
  HamburgerContainer,
  NavContainer,
  ProfileContainer,
  ProjectsContainer,
} from "./styles/app.style";
import profileImg from "./assets/image1.jpg";
import aboutPic from "./assets/aboutPic.jpg";
import experienseIcon from "./assets/experiense.svg";
import educationIcon from "./assets/education.svg";
import next from "./assets/arrow.svg";
import checkmark from "./assets/check.svg";
import project1 from "./assets/camper.webp";
import project2 from "./assets/zoo-market.jpg";
import project3 from "./assets/admin.jpg";
import project4 from "./assets/korea-auto-app.png";
import contact from "./assets/contact.svg";
import email from "./assets/email.svg";
import { useTranslation } from 'react-i18next';
import { useState } from "react";
const App = () => {
  const { t, i18n } = useTranslation();
  const [activeLang, setActiveLang] = useState('en'); 
  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang);
    setActiveLang(lang); // Set the active language
  };
  function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }

  return (
    <AppContainer>
    <div>
      <NavContainer>
        <div style={{ display: 'flex', flexDirection: 'column',alignItems: 'center'}}>
        <div className="name">{t('name')}</div>
      <div className="button-container">
      <button
        className={`button ${activeLang === 'ko' ? 'active' : ''}`}
        onClick={() => handleLanguageChange('ko')}
      >
        한국어
      </button>
      <button
        className={`button ${activeLang === 'en' ? 'active' : ''}`}
        onClick={() => handleLanguageChange('en')}
      >
        English
      </button>
    </div>
        </div>
      <div >
        <ul className="links">
          <li>
            <a href="#about">{t('about')}</a>
          </li>
          <li>
            <a href="#experience">{t('experience')}</a>
          </li>
          <li>
            <a href="#projects">{t('projects')}</a>
          </li>
          <li>
            <a href="#contact">{t('contact')}</a>
          </li>
        </ul>
      </div>
      </NavContainer>

      <HamburgerContainer>
      <div style={{ display: 'flex', flexDirection: 'column',alignItems: 'center'}}>
        <div className="name">{t('name')}</div>
      <div className="button-container">
      <button
        className={`button ${activeLang === 'ko' ? 'active' : ''}`}
        onClick={() => handleLanguageChange('ko')}
      >
        한국어
      </button>
      <button
        className={`button ${activeLang === 'en' ? 'active' : ''}`}
        onClick={() => handleLanguageChange('en')}
      >
        English
      </button>
    </div>
        </div>
        <div className="hamburger-menu">
          <div className="hamburger-icon" onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="menu-links">
            <li>
              <a href="#about" onClick={toggleMenu}>
              {t('about')}
              </a>
            </li>
            <li>
              <a href="#experience" onClick={toggleMenu}>
              {t('experience')}
              </a>
            </li>
            <li>
              <a href="#projects" onClick={toggleMenu}>
              {t('projects')}
              </a>
            </li>
            <li>
              <a href="#contact" onClick={toggleMenu}>
              {t('contact')}
              </a>
            </li>
          </div>
        </div>
      </HamburgerContainer>

      <ProfileContainer>
      <div className="profile-con">
        <img src={profileImg} alt="Profile-Img" />
      </div>
      <div className="profile-info">
        <p className="profile-info-p1">{t('hello')}</p>
        <h1 className="title">{t('name')}</h1>
        <p className="profile-info-p2">{t('fullStackDeveloper')}</p>
        <div className="btn-container">
          <button
            className="btn btn-color-2"
            onClick={() =>
              window.open("https://github.com/AkhrorjonSadullayev")
            }
          >
            {t('gitHub')}
          </button>
          <button
            className="btn btn-color-1"
            onClick={() => (location.href = "./#contact")}
          >
            {t('contact')}
          </button>
        </div>
      </div>
    </ProfileContainer>

    <AboutContainer id="about">
      <div className="about-title">
        <p className="about-p1">{t('getToKnowMore')}</p>
        <h1 className="title">{t('aboutMe')}</h1>
      </div>
      <div className="section-container">
        <div className="section-pic-container">
          <img className="about-pic" src={aboutPic} alt="Profile Picture" />
        </div>
        <div className="about-details-container">
          <div className="about-containers">
            <div className="details-container">
              <img
                className="icon"
                src={experienseIcon}
                alt="Experience Icon"
              />
              <h3>{t('experience')}</h3>
              <p>{t('experienceText')}</p>
            </div>
            <div className="details-container">
              <img
                className="icon"
                src={educationIcon}
                alt="Education Icon"
              />
              <h3>{t('education')}</h3>
              <p>{t('educationText')}</p>
            </div>
          </div>
          <div className="text-container">
            <p>{t('fullStackDeveloperDescription')}</p>
          </div>
        </div>
      </div>
      <img
        className="icon arrow"
        onClick={() => (location.href = "./#experience")}
        src={next}
        alt="Next Icon"
      />
    </AboutContainer>

      <ExperienceContainer id="experience">
        <div className="about-title">
        <p className="section-text-p1">{t('exploreMy')}</p>
        <h1 className="title">{t('experience')}</h1>
        </div>
        <div className="experience-details-container">
          <div className="experience-containers">
            <div className="details-containers">
            <h2 className="experience-sub-title">{t('frontendDevelopment')}</h2>
              <div className="article-container">
                <article>
                  <img className="icon" src={checkmark} alt="Experience Icon" />
                  <div>
                    <h3>HTML</h3>
                    <p>Experienced</p>
                  </div>
                </article>
                <article>
                  <img className="icon" src={checkmark} alt="Experience Icon" />
                  <div>
                    <h3>CSS</h3>
                    <p>Experienced</p>
                  </div>
                </article>
                <article>
                  <img className="icon" src={checkmark} alt="Experience Icon" />
                  <div>
                    <h3>React JS</h3>
                    <p>intermediate</p>
                  </div>
                </article>
                <article>
                  <img className="icon" src={checkmark} alt="Experience Icon" />
                  <div>
                    <h3>JavaScript</h3>
                    <p>intermediate</p>
                  </div>
                </article>
                <article>
                  <img className="icon" src={checkmark} alt="Experience Icon" />
                  <div>
                    <h3>TypeScript</h3>
                    <p>intermediate</p>
                  </div>
                </article>
                <article>
                  <img className="icon" src={checkmark} alt="Experience Icon" />
                  <div>
                    <h3>Material UI</h3>
                    <p>Advanced</p>
                  </div>
                </article>
                <article>
                  <img className="icon" src={checkmark} alt="Experience Icon" />
                  <div>
                    <h5>Styled-components</h5>
                    <p>Advanced</p>
                  </div>
                </article>
                <article>
                  <img className="icon" src={checkmark} alt="Experience Icon" />
                  <div>
                    <h5>react-native</h5>
                    <p>beginner</p>
                  </div>
                </article>
              </div>
            </div>
            <div className="details-containers">
            <h2 className="experience-sub-title">{t('backendDevelopment')}</h2>
              <div className="article-container">
                <article>
                  <img className="icon" src={checkmark} alt="Experience Icon" />
                  <div>
                    <h3>Node JS</h3>
                    <p>Intermediate</p>
                  </div>
                </article>
                <article>
                  <img className="icon" src={checkmark} alt="Experience Icon" />
                  <div>
                    <h3>No SQL</h3>
                    <p>Intermediate</p>
                  </div>
                </article>
                <article>
                  <img className="icon" src={checkmark} alt="Experience Icon" />
                  <div>
                    <h3>Express JS</h3>
                    <p>Intermediate</p>
                  </div>
                </article>
                <article>
                  <img className="icon" src={checkmark} alt="Experience Icon" />
                  <div>
                    <h3>Mongo Db</h3>
                    <p>Intermediate</p>
                  </div>
                </article>
                <article>
                  <img className="icon" src={checkmark} alt="Experience Icon" />
                  <div>
                    <h3>SSH</h3>
                    <p>Intermediate</p>
                  </div>
                </article>
                <article>
                  <img className="icon" src={checkmark} alt="Experience Icon" />
                  <div>
                    <h3>TimeWeb</h3>
                    <p>Intermediate</p>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
        <img
          className="icon arrow"
          onClick={() => (location.href = "./#projects")}
          src={next}
          alt="Next Icon"
        />
      </ExperienceContainer>

      <ProjectsContainer id="projects">
        <div className="about-title">
          <p className="section-text-p1">{t('browseMyRecent')}</p>
          <h1 className="title">{t('projects')}</h1>
        </div>

        <div className="experience-details-container">
          <div className="about-containers">
            <div className="details-containers color-container">
              <div className="article-container">
                <img
                  className="project-img"
                  src={project1}
                  alt="Project 1 img"
                />
              </div>
              <h2 className="experience-sub-title project-title"> {t('camperCarTitle')}</h2>
              <p style={{ paddingBottom: "1rem" }}>
              {t('camperCarDescription')}
              </p>
              <div className="btn-container">
                <button
                  className="btn btn-color-2 project-btn"
                  onClick={() =>
                    window.open(
                      "https://github.com/AkhrorjonSadullayev/camper-origin-frontend-"
                    )
                  }
                >
                  {t('gitHub')}
                </button>
                <button
                  className="btn btn-color-2 project-btn"
                  onClick={() =>
                    window.open(
                      "https://camper-origin-frontend-5x15-git-main-akhrorjons-projects.vercel.app/",
                      "_blank"
                    )
                  }
                >
                 {t('liveDemo')}
                </button>
              </div>
            </div>

            <div className="details-containers color-container">
              <div className="article-container">
                <img
                  className="project-img"
                  src={project2}
                  alt="Project 2 img"
                />
              </div>
              <h2 className="experience-sub-title project-title">{t('zooMarketTitle')}</h2>
              <h5 style={{color: "red"}}>{t('zooMarketWarning')}</h5>
              <p style={{ paddingBottom: "1rem" }}>
              {t('zooMarketDescription')}
              </p>
              <div className="btn-container">
                <button
                  className="btn btn-color-2 project-btn"
                  onClick={() =>
                    window.open(
                      "https://github.com/AkhrorjonSadullayev/pet-project-frontend-"
                    )
                  }
                >
                     {t('gitHub')}
                </button>
                <button
                  className="btn btn-color-2 project-btn"
                  onClick={() =>
                    window.open("https://pet-project-frontend-lovat.vercel.app")
                  }
                >
                 {t('liveDemo')}
                </button>
              </div>
            </div>

            <div className="details-containers color-container">
              <div className="article-container">
                <img
                  className="project-img"
                  src={project3}
                  alt="Project 3 img"
                />
              </div>
              <h3 className="">
             {t('adminDashboardTitle')}
              </h3>
              <h5 style={{color: "red"}}>{t('adminDashboardWarning')}</h5>
              <h3>{t('email')}</h3>
              <p>ahrorjonsadullayev2@gmail.com</p>

              <h3>{t('password')} </h3>
              <p>111111</p>

              <p style={{ paddingBottom: "1rem" }}>
                {t('adminDashboardDescription')}
              </p>
              <div className="btn-container">
                <button
                  className="btn btn-color-2 project-btn"
                  onClick={() =>
                    window.open(
                      "https://github.com/AkhrorjonSadullayev/pet-project-admin-"
                    )
                  }
                >
                   {t('gitHub')}
                </button>
                <button
                  className="btn btn-color-2 project-btn"
                  onClick={() =>
                    window.open(
                      "https://pet-project-admin.vercel.app/chart"
                    )
                  }
                >
                  {t('liveDemo')}
                </button>
              </div>
            </div>
            <div className="details-containers color-container">
              <div className="article-container">
                <img
                  className="project-img"
                  src={project4}
                  alt="Project 1 img"
                />
              </div>
              <h2 className="experience-sub-title project-title">
                {t('koreaAutoAppTitle')}
              </h2>
              <p style={{ paddingBottom: "1rem" }}>
                {t('koreaAutoAppDescription')}
              </p>
              <div className="btn-container">
                <button
                  className="btn btn-color-2 project-btn"
                  onClick={() =>
                    window.open(
                      "https://play.google.com/store/apps/details?id=com.urckoreaauto.app"
                    )
                  }
                >
                  {t('playMarket')}
                </button>
                <button
                  className="btn btn-color-2 project-btn"
                  onClick={() =>
                    window.open(
                      "https://apps.apple.com/kr/app/korea-auto/id6738042552?l=en-GB"
                    )
                  }
                >
                  {t('appStore')}
                </button>
              </div>
            </div>
          </div>
        </div>

        <img
          className="icon arrow"
          onClick={() => (location.href = "./#contact")}
          src={next}
          alt="Next Icon"
        />
      </ProjectsContainer>

      <ContactContainer id="contact">
        <div className="about-title">
          <p className="section-text-p1">{t('getInTouch')}</p>
          <h1 className="title">{t('contactMe')}</h1>
        </div>
        <div className="contact-info-upper-container">
          <div className="contact-info-container">
            <img className="icon contact-icon" src={email} alt="Email Icon" />
            <p>
              <a className="email" href="mailto:ahrorsadullayev@gmail.com">
                ahrorsadullayev@gmail.com
              </a>
            </p>
          </div>
          <div className="contact-info-container">
            <img className="icon contact-icon" src={contact} alt="Phone Icon" />
            <p>010-9560-0410</p>
          </div>
        </div>
      </ContactContainer>

      <FooterContainer>
        <nav>
          <div className="nav-links-container">
            <ul className="links">
              <li>
                <a href="#about">{t('about')}</a>
              </li>
              <li>
                <a href="#experience">{t('experience')}</a>
              </li>
              <li>
                <a href="#projects">{t('projects')}</a>
              </li>
              <li>
                <a href="#contact">{t('contact')}</a>
              </li>
            </ul>
          </div>
        </nav>
        <p>Made in © 2025 {t('name')}</p>
      </FooterContainer>
      </div>
    </AppContainer>
  );
};

export default App;
