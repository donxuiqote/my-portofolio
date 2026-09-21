import React, { useState } from "react";
import fotoProfil from "./assets/img/endin.jpeg";

import TOEFL from "./assets/sertifikat/TOEFL.jpeg";
import TOEIC from "./assets/sertifikat/TOEIC.png";
import JNA from "./assets/sertifikat/BNSP_Junior Network Adminstrator.png";
import JWD from "./assets/sertifikat/BNSP_Junior Web Developer.png";
import LAN from "./assets/sertifikat/BNSP_Local Area Network Engineer.png";
import MTCNA from "./assets/sertifikat/MTCNA.jpg";
import tcrpredict from "./assets/project/tcrpredict.png";
import tanada from "./assets/project/tanada.png";
import analisis from "./assets/project/analisis jaringan.png";
import planeDash from "./assets/project/plane dash.png";
import fruitSlash from "./assets/project/fruit slash.png";

export default function App() {
  const [activeTab, setActiveTab] = useState("Experience");
  const [selectedCert, setSelectedCert] = useState(null);

  // Data diperbarui berdasarkan Hard Skills di CV
  const skills = [
    { name: "PHP", icon: "fa-php", type: "fab" },
    { name: "Python", icon: "fa-python", type: "fab" },
    { name: "JavaScript", icon: "fa-js", type: "fab" },
    { name: "Laravel", icon: "fa-laravel", type: "fab" },
    { name: "React.js", icon: "fa-react", type: "fab" },
    { name: "Flask", icon: "fa-pepper-hot", type: "fas" },
    { name: "Tailwind CSS", icon: "fa-wind", type: "fas" },
    { name: "SQL & DBs", icon: "fa-database", type: "fas" },
    { name: "Docker", icon: "fa-docker", type: "fab" },
    { name: "Git", icon: "fa-git-alt", type: "fab" },
    { name: "Figma", icon: "fa-figma", type: "fab" },
    { name: "Data Science", icon: "fa-chart-pie", type: "fas" },
  ];

  // Data diperbarui berdasarkan bagian Certifications di CV
  const certificates = [
    { title: "TOEFL ITP", image: TOEFL },
    { title: "TOEIC", image: TOEIC },
    { title: "Junior Network Administrator (BNSP)", image: JNA },
    { title: "Junior Web Developer (BNSP)", image: JWD },
    { title: "Local Area Network Engineering (BNSP)", image: LAN },
    { title: "MikroTik Certified Network Associate", image: MTCNA },
    { title: "Junior Graphic Designer (BNSP)", image: "https://picsum.photos/seed/certdesign/800/600" }, // Menggunakan picsum sementara
  ];

  // Data diperbarui berdasarkan Relevant Projects di CV
  const projects = [
    {
      title: "RUMAH PRIMA - Household Procurement & Inventory Management System",
      tech: "Laravel, Tailwind CSS, JavaScript, MySQL",
      img: "https://picsum.photos/seed/rumahprima/400/300", // Menggunakan picsum sementara
      link: "#"
    },
    {
      title: "Thyroid Cancer Recurrence Prediction Using Stacked Ensemble Learning",
      tech: "Flask, Python, SMOTE, Stack Ensemble, Decision Tree, SVM, Logistic Regression",
      img: tcrpredict,
      link: "https://drive.google.com/file/d/1oBuh6ldmxof_zhi7l27M_PfIN4XkzF5b/view?usp=sharing"
    },
    {
      title: "Implementasi Case Based Reasoning Untuk Mendiagnosis Diabetes",
      tech: "C++ (Qt), Python, K-Nearest Neighbor (KNN)",
      img: "https://picsum.photos/seed/diabetes/400/300", // Menggunakan picsum sementara
      link: "#"
    },
    {
      title: "Metode Simulated Annealing Untuk Optimasi Biaya Operasional Penerbangan",
      tech: "Python, Pandas, NumPy, Matplotlib, Google Colab",
      img: "https://picsum.photos/seed/optimasi/400/300", // Menggunakan picsum sementara
      link: "#"
    },
    {
      title: "Website Profil Sekolah Menggunakan Laravel dan Bootstrap",
      tech: "Laravel, Bootstrap, PHP, JavaScript, HTML, CSS",
      img: tanada,
      link: "https://drive.google.com/file/d/1d1B0bnqMQXrqhnZ6hbYt8H5tNDBzznys/view"
    },
    {
      title: "Analisis dan Desain Jaringan Lab PTIK Gedung FIK UPN Veteran Jawa Timur",
      tech: "Packet Tracer",
      img: analisis,
      link: "https://github.com/donxuiqote/DMJ_Projek"
    },
    {
      title: "Game Arkade Plane Dash",
      tech: "JavaScript",
      img: planeDash,
      link: "https://donxuiqote.github.io/planeDash/"
    },
    {
      title: "Game Arkade Fruit Slash",
      tech: "JavaScript, Construct 3", // Di CV tertulis Construct 3
      img: fruitSlash,
      link: "https://donxuiqote.github.io/fruit-slash/"
    },
  ];

  return (
    <div className=" text-base-content flex flex-col max-w-4xl mx-auto pb-10 px-4">
      {/* Header Profile */}
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mt-10">
        <div className="flex-shrink-0">
          <img
            src={fotoProfil}
            alt="profile"
            className="w-32 h-32 object-cover rounded-full border-4 border-primary/20 shadow-md"
          />
        </div>
        <div className="text-center sm:text-left">
          <h1 className="text-3xl font-bold mt-2">
            Hey, it's <span className="text-primary">ENDIN RAHMANDA PUTRI</span> 👋
          </h1>
          <p className="text-emerald-500 font-medium mt-2 flex items-center justify-center sm:justify-start gap-2">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
            </span>
            Available for Work
          </p>
          <p className="text-sm opacity-70 mt-1"><i className="fa-solid fa-location-dot mr-1"></i> Jakarta, DKI Jakarta</p>
        </div>
      </div>

      {/* Intro */}
      <div className="max-w-3xl mt-6 text-center sm:text-left">
        <p className="text-lg font-bold mb-2">
          Computer Science Graduate 🎓 | AI & Full-Stack Enthusiast 💻
        </p>
        <p className="text-sm opacity-80 leading-relaxed text-justify">
          Computer Science graduate with practical experience in <b>machine learning, artificial intelligence, full-stack web development, system analysis, and networking</b>. Experienced in developing enterprise web applications, ML models, technical documentation, and software testing. Proficient in <b>PHP, Python, JavaScript, Laravel, React, Flask, MySQL, PostgreSQL, Docker, Git,</b> and network administration.
        </p>
      </div>

      {/* Buttons */}
      <div className="flex flex-wrap justify-center sm:justify-start gap-3 mt-6">
        <a className="btn btn-primary btn-sm" href="https://drive.google.com/file/d/1ILwCgpWuEXGnMVpOHanmEQouBdVIS3XE/view?usp=sharing" target="_blank" rel="noopener noreferrer">
          Resume <i className="fa-solid fa-file-arrow-down"></i>
        </a>
        <a
          className="btn btn-outline btn-sm"
          href="https://github.com/donxuiqote"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-github"></i> GitHub
        </a>
        <a
          className="btn btn-outline btn-sm"
          href="https://www.linkedin.com/in/endinrahmanda"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-linkedin"></i> LinkedIn
        </a>
        <a
          className="btn btn-outline btn-sm"
          href="mailto:rahmandaendin@gmail.com"
        >
          <i className="fa fa-envelope"></i> Email
        </a>
      </div>

      {/* Tabs Menu */}
      <div className="mt-10 tabs tabs-boxed flex-wrap justify-center sm:justify-start">
        <a
          className={`tab ${activeTab === "Experience" ? "tab-active" : ""}`}
          onClick={() => setActiveTab("Experience")}
        >
          Experience
        </a>
        <a
          className={`tab ${activeTab === "Projects" ? "tab-active" : ""}`}
          onClick={() => setActiveTab("Projects")}
        >
          Projects
        </a>
        <a
          className={`tab ${activeTab === "Skills" ? "tab-active" : ""}`}
          onClick={() => setActiveTab("Skills")}
        >
          Tools I Use
        </a>
        <a
          className={`tab ${activeTab === "Education" ? "tab-active" : ""}`}
          onClick={() => setActiveTab("Education")}
        >
          Education
        </a>
        <a
          className={`tab ${activeTab === "Publications" ? "tab-active" : ""}`}
          onClick={() => setActiveTab("Publications")}
        >
          Publications
        </a>
        <a
          className={`tab ${activeTab === "Certificate" ? "tab-active" : ""}`}
          onClick={() => setActiveTab("Certificate")}
        >
          Certificates
        </a>
      </div>

      {/* EXPERIENCE SECTION */}
      {activeTab === "Experience" && (
        <div className="mt-8 space-y-6 text-justify">
          <div className="bg-base-200/50 border border-base-300 shadow-sm p-6 rounded-xl">
            <div className="flex flex-col sm:flex-row justify-between mb-2">
              <h2 className="text-xl font-bold text-primary">Web Developer</h2>
              <span className="text-sm font-semibold opacity-70 bg-base-300 px-3 py-1 rounded-full w-fit">May 2026 - Aug 2026</span>
            </div>
            <p className="text-md font-semibold mb-3">
              <i className="fa-solid fa-building mr-2"></i>Rekonesia - Jakarta, Indonesia
            </p>
            <ul className="list-disc list-outside ml-5 space-y-2 text-sm opacity-80">
              <li>Prepared system analysis and technical documentation including Business Process Analysis, Use Case Diagrams, Activity Diagrams, and ERD.</li>
              <li>Developed web-based information systems using Laravel, including authentication, role-based access control, and email verification using Gmail SMTP.</li>
              <li>Implemented containerization with Docker and performed QA/manual testing to ensure features functioned according to requirements.</li>
            </ul>
          </div>

          <div className="bg-base-200/50 border border-base-300 shadow-sm p-6 rounded-xl">
            <div className="flex flex-col sm:flex-row justify-between mb-2">
              <h2 className="text-xl font-bold text-primary">Staff Data and Analyst</h2>
              <span className="text-sm font-semibold opacity-70 bg-base-300 px-3 py-1 rounded-full w-fit">Nov 2025 - Jun 2026</span>
            </div>
            <p className="text-md font-semibold mb-3">
              <i className="fa-solid fa-building-columns mr-2"></i>Kementerian Imigrasi dan Pemasyarakatan - Jakarta
            </p>
            <ul className="list-disc list-outside ml-5 space-y-2 text-sm opacity-80">
              <li>Developed RUMAH PRIMA, a web-based procurement and inventory management system using Laravel, Tailwind CSS, and MySQL.</li>
              <li>Developed BPSDM Dalam Angka, a Laravel-based web dashboard for visualizing institutional performance and statistical recapitulation.</li>
              <li>Produced system analysis and technical documentation (DFD, Sitemap, Functional Analysis, and Use Case Diagrams).</li>
            </ul>
          </div>

          <div className="bg-base-200/50 border border-base-300 shadow-sm p-6 rounded-xl">
            <div className="flex flex-col sm:flex-row justify-between mb-2">
              <h2 className="text-xl font-bold text-primary">IT Support and Network Technician</h2>
              <span className="text-sm font-semibold opacity-70 bg-base-300 px-3 py-1 rounded-full w-fit">Dec 2017 - Jun 2018</span>
            </div>
            <p className="text-md font-semibold mb-3">
              <i className="fa-solid fa-network-wired mr-2"></i>PSIK FEB Universitas Brawijaya - Malang
            </p>
            <ul className="list-disc list-outside ml-5 space-y-2 text-sm opacity-80">
              <li>Provided IT support by troubleshooting hardware, software, and network connectivity issues.</li>
              <li>Performed mass Windows OS deployment to laboratory computers using a centralized deployment server.</li>
              <li>Supported network infrastructure implementation through router/switch installation, UTP crimping, and office network setup.</li>
            </ul>
          </div>
        </div>
      )}

      {/* SKILLS SECTION */}
      {activeTab === "Skills" && (
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-4 mt-8">
          {skills.map((skill, idx) => (
            <div
              key={idx}
              className="card bg-base-200 shadow-sm p-4 flex flex-col items-center justify-center hover:bg-base-300 transition"
            >
              <i className={`${skill.type} ${skill.icon} text-4xl text-primary opacity-80`}></i>
              <p className="mt-2 font-semibold text-sm text-center">{skill.name}</p>
            </div>
          ))}
        </div>
      )}

      {/* EDUCATION SECTION */}
      {activeTab === "Education" && (
        <div className="mt-8 space-y-6 text-justify">
          <div className="bg-base-200/50 border border-base-300 shadow-sm p-6 rounded-xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-2 h-full bg-primary"></div>
            <h2 className="text-xl font-bold mb-2">UPN Veteran Jawa Timur</h2>
            <p className="text-sm opacity-80 mb-2 font-semibold">
              Bachelor’s Degree in Computer Science (2020 - 2025) • GPA: 3.59
            </p>
            <p className="text-sm opacity-80">
              Throughout my studies, I focused on software development, web technologies, and data science. For my undergraduate thesis, I conducted research on <b>“Classification of Thyroid Cancer Recurrence Using Stack Ensemble and SMOTE”.</b> 
              The study utilized the Differentiated Thyroid Cancer Recurrence dataset from the UCI Machine Learning Repository and was implemented in <b>Python</b> using libraries such as pandas, numpy, matplotlib, seaborn, scikit-learn, imbalanced-learn, and joblib.
            </p>
            <p className="text-sm opacity-80 mt-2">
              In this work, I applied a <b>stack ensemble learning</b> approach, which combines multiple base models like Decision Tree, Support Vector Machine (SVM), and Logistic Regression in order to achieve better predictive performance. The project was further deployed as a <b>Flask-based web application</b> and successfully registered as an intellectual property with registration number <b>EC002025073061.</b>
            </p>
          </div>
          <div className="bg-base-200/50 border border-base-300 shadow-sm p-6 rounded-xl relative overflow-hidden">
             <div className="absolute top-0 left-0 w-2 h-full bg-gray-400"></div>
            <h2 className="text-xl font-bold mb-2">SMK Negeri 1 Turen</h2>
            <p className="text-sm opacity-80 mb-2 font-semibold">
              Teknik Komputer dan Jaringan (2016 - 2019)
            </p>
            <p className="text-sm opacity-80">
              During my studies, I developed fundamental knowledge of <b>computer networks</b>, particularly Mikrotik configuration and local area network (LAN) engineering. I also had the opportunity to complete an internship at the PSIK of the Faculty of Economics and Business, Universitas Brawijaya.
            </p>
          </div>
        </div>
      )}

      {/* PUBLICATIONS SECTION */}
      {activeTab === "Publications" && (
        <div className="mt-8 space-y-4">
          {[
            {
              title: "KLASIFIKASI PERULANGAN KANKER TIROID MENGGUNAKAN STACK ENSEMBLE DAN SMOTE",
              source: "JATI (Jurnal Mahasiswa Teknik Informatika)",
              date: "May 1, 2025",
              link: "https://ejournal.itn.ac.id/index.php/jati/article/view/13616"
            },
            {
              title: "PENGEMBANGAN GAME ARCADE 2D “FRUITDASH” MENGGUNAKAN JAVASCRIPT PADA GAME ENGINE CONSTRUCT 3",
              source: "Jurnal Methodika",
              date: "Sep 20, 2024",
              link: "https://doi.org/10.46880/mtk.v10i2.3104"
            },
            {
              title: "Implementasi Case Based Reasoning Untuk Mendiagnosis Diabetes Menggunakan K-Nearest Neighbor",
              source: "Santika (Seminar Nasional Informatika Bela Negara) 2024",
              date: "Sep 13, 2024",
              link: "https://santika.upnjatim.ac.id/submissions/index.php/santika/article/view/410"
            },
            {
              title: "Metode Simulated Annealing Untuk Optimasi Biaya Operasional Penerbangan",
              source: "Santika (Seminar Nasional Informatika Bela Negara) 2024",
              date: "Sep 27, 2024",
              link: "https://santika.upnjatim.ac.id/submissions/index.php/santika/article/view/313"
            },
          ].map((pub, idx) => (
            <div
              key={idx}
              className="bg-base-200/50 border border-base-300 shadow-sm p-6 rounded-xl flex flex-col sm:flex-row sm:items-center sm:justify-between"
            >
              <div>
                <h2 className="text-lg font-bold mb-1">{pub.title}</h2>
                <p className="text-sm opacity-80">
                  {pub.source} · {pub.date}
                </p>
              </div>
              <a
                href={pub.link}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline btn-sm mt-3 sm:mt-0"
              >
                Read <i className="fa-solid fa-arrow-up-right-from-square ml-2"></i>
              </a>
            </div>
          ))}
        </div>
      )}

      {/* CERTIFICATES SECTION */}
      {activeTab === "Certificate" && (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-5 mt-8">
          {certificates.map((cert, idx) => (
            <div
              key={idx}
              className="card bg-base-200 shadow-sm p-2 cursor-pointer hover:-translate-y-1 transition duration-200"
              onClick={() => setSelectedCert(cert)}
            >
              <img
                src={cert.image}
                alt={cert.title}
                className="w-full h-32 object-cover rounded-md opacity-80 hover:opacity-100 transition"
              />
              <p className="text-center mt-3 text-xs font-bold px-1 pb-2">{cert.title}</p>
            </div>
          ))}
        </div>
      )}

      {/* MODAL FOR CERTIFICATES */}
      {selectedCert && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50 transition-opacity">
          <div className="bg-base-100 p-4 rounded-xl shadow-2xl relative max-w-4xl w-[90%] md:w-auto mx-auto mt-10">
            <button
              className="absolute -top-3 -right-3 btn btn-sm btn-circle btn-error text-white shadow-md"
              onClick={() => setSelectedCert(null)}
            >
              ✕
            </button>
            <img
              src={selectedCert.image}
              alt={selectedCert.title}
              className="w-full max-h-[75vh] object-contain rounded-md"
            />
            <p className="text-center mt-4 text-lg font-bold">
              {selectedCert.title}
            </p>
          </div>
        </div>
      )}

      {/* PROJECTS SECTION */}
      {activeTab === "Projects" && (
        <div className="mt-8 space-y-6">
          {projects.map((proj, idx) => (
            <div
              key={idx}
              className="bg-base-200/50 border border-base-300 shadow-sm p-5 rounded-xl flex flex-col sm:flex-row gap-5"
            >
              <img
                src={proj.img}
                alt={proj.title}
                className="w-full sm:w-48 h-32 object-cover rounded-lg shadow-sm"
              />
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <h2 className="text-lg font-bold mb-1">{proj.title}</h2>
                  <p className="text-sm text-primary font-semibold mb-3">
                    <i className="fa-solid fa-code"></i> {proj.tech}
                  </p>
                </div>
                <div>
                  {proj.link !== "#" ? (
                     <a
                     href={proj.link}
                     target="_blank"
                     rel="noopener noreferrer"
                     className="btn btn-outline btn-sm"
                   >
                     View Project <i className="fa-solid fa-arrow-up-right-from-square ml-2"></i>
                   </a>
                  ) : (
                     <button className="btn btn-disabled btn-sm">Internal Project</button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}