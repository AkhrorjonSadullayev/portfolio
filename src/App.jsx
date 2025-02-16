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
import instagram from "./assets/instagram-53.png";
import facebook from "./assets/facebook.png";
import aboutPic from "./assets/aboutPic.jpg";
import experienseIcon from "./assets/experiense.svg";
import educationIcon from "./assets/education.svg";
import next from "./assets/arrow.svg";
import checkmark from "./assets/check.svg";
import project1 from "./assets/camper.webp";
import project2 from "./assets/zoo-market.jpg";
import project3 from "./assets/admin.jpg";
import contact from "./assets/contact.svg";
import email from "./assets/email.svg";
const App = () => {
  function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }

  return (
    <AppContainer>
      <NavContainer>
        <div className="name">Akhrorjon Sadullaev</div>
        <div>
          <ul className="links">
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#experience">Experience</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </NavContainer>

      <HamburgerContainer>
        <div className="name">Akhrorjon Sadullaev</div>
        <div className="hamburger-menu">
          <div className="hamburger-icon" onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="menu-links">
            <li>
              <a href="#about" onClick={toggleMenu}>
                About
              </a>
            </li>
            <li>
              <a href="#experience" onClick={toggleMenu}>
                Experience
              </a>
            </li>
            <li>
              <a href="#projects" onClick={toggleMenu}>
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" onClick={toggleMenu}>
                Contact
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
          <p className="profile-info-p1">Hello, I'm</p>
          <h1 className="title">Akhrorjon Sadullaev</h1>
          <p className="profile-info-p2">Full Stack Web Developer</p>
          <div className="btn-container">
            <button
              className="btn btn-color-2"
              onClick={() =>
                window.open("https://github.com/AkhrorjonSadullayev")
              }
            >
              GitHub
            </button>
            <button
              className="btn btn-color-1"
              onClick={() => (location.href = "./#contact")}
            >
              Contact
            </button>
          </div>
          <div className="social-icons">
            <img
              onClick={() =>
                window.open("https://www.instagram.com/akhrorjon_sadullaev/")
              }
              className="icon"
              src={instagram}
              alt="instagram profile"
            />
            <img
              onClick={() =>
                window.open("https://www.instagram.com/akhrorjon_sadullaev/")
              }
              className="icon"
              src={facebook}
              alt="instagram profile"
            />
          </div>
        </div>
      </ProfileContainer>

      <AboutContainer id="about">
        <div className="about-title">
          <p className="about-p1">Get To Know More</p>
          <h1 className="title">About Me</h1>
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
                <h3>Experience</h3>
                <p>
                  6 months of experience in the Bootcamp <br />
                  Full Stack Web Development
                </p>
              </div>
              <div className="details-container">
                <img
                  className="icon"
                  src={educationIcon}
                  alt="Education Icon"
                />
                <h3>Education</h3>
                <p>
                  3rd year bachelor degree student <br /> at Joongbu University
                </p>
              </div>
            </div>
            <div className="text-container">
              <p>
                Full-stack Developer – Passionate and Fast Learner I completed a
                6-month bootcamp, where I learned HTML, CSS, JavaScript,
                React.js, TypeScript, Node.js, and Express.js. I enjoy learning
                new technologies and applying them to real projects. During this
                time, I successfully developed two real-world projects, which
                provided me with hands-on experience and solid skills.
              </p>
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
          <p className="section-text-p1">Explore My</p>
          <h1 className="title">Experience</h1>
        </div>
        <div className="experience-details-container">
          <div className="experience-containers">
            <div className="details-containers">
              <h2 className="experience-sub-title">Frontend Development</h2>
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
              <h2 className="experience-sub-title">Backend Development</h2>
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
          <p className="section-text-p1">Browse My Recent</p>
          <h1 className="title">Projects</h1>
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
              <h2 className="experience-sub-title project-title">Camper Car</h2>
              <p style={{ paddingBottom: "1rem" }}>
                This is my first project. I used React.js for the frontend, MUI
                for components and icons, Styled-components for styling, React
                Router for navigation, React Modal for pop-ups, and React Slick
                with Responsive Carousel for carousels. EmailJS was added for
                sending emails. The project is fully responsive.
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
                  Github
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
                  Live Demo
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
              <h2 className="experience-sub-title project-title">Zoo Market</h2>
              <p style={{ paddingBottom: "1rem" }}>
                Zoo Market is a full-stack web application for selling people's
                pets and pet-related products. The frontend is built with
                TypeScript , Styled-components , MUI , React Router , React
                Modal , and React Slick , and it connects to the backend using
                Axios . The backend is powered by Node.js , Express.js , and
                MongoDB , with Nodemailer integrated for automated email
                sending.
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
                  Github
                </button>
                <button
                  className="btn btn-color-2 project-btn"
                  onClick={() =>
                    window.open(
                      "https://pet-project-frontend-lovat.vercel.app"
                    )
                  }
                >
                  Live Demo
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
                Zoo Market <br />
                (Admin-Dashboard) <br />
              </h3>
              <h3>email:</h3>
              <p>ahrorjonsadullayev2@gmail.com</p>

              <h3>password: </h3>
              <p>111111</p>

              <p style={{ paddingBottom: "1rem" }}>
                Admin Dashboard – for managing the Zoo Market platform. Built
                with TypeScript , Styled-components , MUI Material , and MUI Joy
                . Chart.js and react-chartjs-2 show information about products
                and users. Axios handles data requests, react-router-dom manages
                navigation, and react-toastify shows notifications. JWT
                authentication and jspdf help with security and creating
                reports.
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
                  Github
                </button>
                <button
                  className="btn btn-color-2 project-btn"
                  onClick={() =>
                    window.open(
                      "https://pet-project-admin-g7ms-gosbij8vj-akhrorjons-projects.vercel.app"
                    )
                  }
                >
                  Live Demo
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
          <p className="section-text-p1">Get In Touch</p>
          <h1 className="title">Contact Me</h1>
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
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#experience">Experience</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </nav>
        <p>Made in © 2025 Akhrorjon Sadullaev</p>
      </FooterContainer>
    </AppContainer>
  );
};

export default App;
