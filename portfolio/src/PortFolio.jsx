import "./PortFolio.css";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import {
  FaDownload,
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaReact,
  FaPhp,
  FaLaravel,
  FaPython,
  FaGitAlt,
  FaDocker,
  FaAws,
} from "react-icons/fa";

import {
  SiAdobephotoshop,
  SiGitlab,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiPostman,
  SiJira,
} from "react-icons/si";

function PortFolio() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_3ibualx",
        "template_luodv6b",
        form.current,
        "EubcPtCWBgGqeeiO8"
      )
      .then(
        (result) => {
          alert("Message sent successfully ✅");
          form.current.reset();
        },
        (error) => {
          alert("Error ❌");
        }
      );
  };
  return (
    <div>
      <div className="hero">
        {/* Navbar */}
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top custom-navbar">
          <div className="container">
            <a className="navbar-brand fw-bold fs-4 text-warning" href="/">
              PortFolio
            </a>
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="#home">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#skills">
                  Skills
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#projects">
                  Projects
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#experience">
                  Experience
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </nav>

        {/* Header */}
        <header className="text-center text-light my-5" id="home">
          <div className="container">
            <h1>Salah Eddine Loushil</h1>
            <h2 className="text-info">Full Stack Developer</h2>
            <p>
              Full-Stack Web Developer with a Specialized Technician diploma in{" "}
              <br />
              Web Development. Motivated, fast learner, and passionate about{" "}
              <br />
              building modern web applications.
            </p>

            <div className="buttons">
              <a href="#contact">
                <button className="btn-hover color-1">
                  Contact Me Here <FaEnvelope />
                </button>
              </a>
              <a href="CV professionnel.pdf" download>
                <button className="btn-hover color-2">
                  Download CV <FaDownload />
                </button>
              </a>
            </div>

            <div className="socialIcons">
              <ul className="icons">
                <li>
                  <a
                    className="LinkedIn"
                    href="https://www.linkedin.com/in/salaheddineloushil"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <FaLinkedin aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a
                    className="GitHub"
                    href="https://github.com/salaheddineloushil"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <FaGithub aria-hidden="true" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </header>

        {/* About */}
        <section className="container my-5" id="about">
          <div className="row justify-content-center align-items-center text-light">
            <h1 className="my-4 p-4">About</h1>
            <div className="col-6">
              <img
                src="photo.jpeg"
                alt="Salah Eddine Loushil"
                className="rounded-circle w-50"
              />
            </div>
            <div className="col-6">
              <p className="mb-2">
                ✨ About Me As a passionate and creative full-stack web
                developer, I design and build high-performance web applications
                with expertise in both front-end and back-end. Organized and
                results-oriented, I transform needs into effective and
                innovative digital solutions.
                <hr /> 🎯 My Goal To put my skills to work on projects that
                combine innovation and impact and allow me to continue growing
                in a stimulating technical environment. <hr /> 💌 Contact Always
                open to discussions and opportunities. <br />
                <span className="text-info"> 📧 salahlsh4@gmail.com</span>
              </p>
              <div className="row text-center mt-4">
                <div className="col-4">
                  <h6 className="text-secondary">Years experience</h6>
                  <h3 className="text-primary">+1</h3>
                </div>
                <div className="col-4">
                  <h6 className="text-secondary">Projects completed</h6>
                  <h3 className="text-primary">+5</h3>
                </div>
                <div className="col-4">
                  <h6 className="text-secondary">Companies worked</h6>
                  <h3 className="text-primary">3</h3>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills */}
        <div className="container my-5" id="skills">
          <h1 className="py-4 text-light display-1">My Skills</h1>
          <div className="categorie py-4">
            <h2 className="text-danger">Fronend</h2>
            <div className="py-4">
              <span className="skill">
                <FaHtml5 /> HTML
              </span>
              <span className="skill">
                <FaCss3Alt /> CSS
              </span>
              <span className="skill">
                <FaBootstrap /> Bootstrap
              </span>
              <span className="skill">
                <SiJavascript /> JavaScript
              </span>
              <span className="skill">
                <FaReact /> React
              </span>
            </div>
          </div>
          <div className="categorie py-4">
            <h2 className="text-danger">Backend</h2>
            <div className="py-4">
              <span className="skill">
                <FaPhp /> PHP
              </span>
              <span className="skill">
                <FaLaravel /> Laravel
              </span>
              <span className="skill">
                <FaPython /> Python
              </span>
              <span className="skill">C++</span>
              <span className="skill">REST APIs</span>
              <span className="skill">JWT</span>
            </div>
          </div>
          <div className="categorie py-4">
            <h2 className="text-danger">Databases</h2>
            <div className="py-4">
              <span className="skill">
                <SiMongodb /> MongoDB
              </span>
              <span className="skill">
                <SiMysql /> MySQL
              </span>
            </div>
          </div>
          <div className="categorie py-4">
            <h2 className="text-danger">DevOps & Cloud</h2>
            <div className="py-4">
              <span className="skill">
                <FaAws /> AWS
              </span>
              <span className="skill">
                <FaGithub /> GitHub
              </span>
              <span className="skill">
                <FaDocker /> Docker
              </span>

              <span className="skill">Azure</span>
              <span className="skill">
                <SiGitlab /> GitLab CI
              </span>
            </div>
          </div>
          <div className="categorie py-4">
            <h2 className="text-danger">Tools & Platforms</h2>
            <div className="py-4">
              <span className="skill">
                <SiAdobephotoshop /> Adobe Photoshop
              </span>
              <span className="skill">
                <SiPostman /> Postman
              </span>
              <span className="skill">
                <FaGitAlt /> Git
              </span>
              <span className="skill">
                <SiJira /> Jira
              </span>
            </div>
          </div>
        </div>

        {/* Projects */}
        <div className="container my-5" id="projects">
          <h1 className="py-4 text-light display-1">Projects</h1>
          <div className="container">
            <div className="row">
              <div className="col-6">
                <img
                  src="projet1.png"
                  alt="TODO APP"
                  className="w-100 rounded"
                />
              </div>
              <div className="col-6">
                <h4 className="text-white">TODO APP</h4>
                <p className="text-white">
                  A simple todo application built with React and Laravel.
                </p>
                <div className="d-flex justify-content-around flex-wrap my-4">
                  <span className="Tools">REACT</span>
                  <span className="Tools">MYSQL</span>
                  <span className="Tools">LARAVEL</span>
                  <span className="Tools">CSS</span>
                  <span className="Tools">BOOTSTRAP</span>
                  <span className="Tools">JWT</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Experience & Education */}
        <div className="container my-5" id="experience">
          <h1 className="py-4 text-light display-1">Experience & Education</h1>
          <div className="row">
            <div className="col-md-6">
              <h2 className="text-danger">Experience</h2>
              <ul className="text-white">
                <li>
                  <b className="text-secondary">2024-2025 : </b> 1 mois Stage
                  effectué dans ELEC TECH, entreprise spécialisée dans les
                  câbles électriques, où j’ai travaillé en tant que développeur
                  à RABAT.
                </li>
              </ul>
            </div>
            <div className="col-md-6">
              <h2 className="text-danger">Education</h2>
              <ul className="text-white">
                <li>
                  <b className="text-secondary">2023 - 2025 : </b> Diplôme
                  Développement Digital Option Web Full Stack ISTA TEMARA
                </li>
                <li>
                  <b className="text-secondary">2022 - 2023 : </b> Etude de
                  l’économie FACULTÉ "économie" MD V souissi RABAT
                </li>
                <li>
                  <b className="text-secondary">2021 - 2022 : </b> Baccalauréat
                  Série Science Physique Lycée Annakhil El Firdaous
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Contact */}
        <div className="container my-5" id="contact">
          <h1 className="py-4 text-light display-1">Contact Me</h1>
          <form ref={form} onSubmit={sendEmail}>
            <div className="mb-3">
              <label className="form-label text-light">Name</label>
              <input
                type="text"
                name="from_name"
                className="form-control"
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label text-light">Email</label>
              <input
                type="email"
                name="from_email"
                className="form-control"
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label text-light">Message</label>
              <textarea
                name="message"
                className="form-control"
                rows="4"
                required
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
          </form>
        </div>
      </div>
      {/* Footer */}
      <footer className="bg-dark text-light py-4 w-100">
        <div className="container">
          <p className="text-center mb-0">
            &copy; {new Date().getFullYear()} My Portfolio. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default PortFolio;
