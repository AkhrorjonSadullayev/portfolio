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
import project1 from "./assets/project1.jpg";
import project2 from "./assets/project2.jpeg";
import contact from './assets/contact.svg'
import email from './assets/email.svg'
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
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Dolorem perferendis, fugiat nemo laudantium debitis, quod dolore
                exercitationem consequatur qui voluptatibus fuga voluptatem
                animi blanditiis sed sequi, maiores alias consectetur. Deserunt
                quos molestias id, nesciunt dolorem asperiores. Expedita saepe,
                nulla pariatur praesentium nesciunt autem facere eveniet
                debitis, cum soluta sit est.
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
                    <h3>JavaScript</h3>
                    <p>Basic</p>
                  </div>
                </article>
                <article>
                  <img className="icon" src={checkmark} alt="Experience Icon" />
                  <div>
                    <h3>TypeScript</h3>
                    <p>Basic</p>
                  </div>
                </article>
                <article>
                  <img className="icon" src={checkmark} alt="Experience Icon" />
                  <div>
                    <h3>Material UI</h3>
                    <p>Advanced</p>
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
              <h2 className="experience-sub-title project-title">
                Project One
              </h2>
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
                      "https://github.com/AkhrorjonSadullayev/camper-origin-frontend-"
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
                  src={project1}
                  alt="Project 2 img"
                />
              </div>
              <h2 className="experience-sub-title project-title">
                Project Two
              </h2>
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
                      "https://github.com/AkhrorjonSadullayev/camper-origin-frontend-"
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
                  alt="Project 3 img"
                />
              </div>
              <h2 className="experience-sub-title project-title">
                Project Three
              </h2>
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
                      "https://github.com/AkhrorjonSadullayev/camper-origin-frontend-"
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
            <img className="icon contact-icon" src={email} alt="Email Icon"  />
            <p><a className="email" href="mailto:ahrorsadullayev@gmail.com">ahrorsadullayev@gmail.com</a></p>
          </div>
          <div className="contact-info-container">
            <img className="icon contact-icon" src={contact} alt="Phone Icon"  />
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
