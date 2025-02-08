import { useNavigate, useLocation } from "react-router-dom";
import { FaCode, FaHtml5, FaCss3Alt, FaJsSquare, FaBootstrap, FaReact } from "react-icons/fa";
import { CiDatabase } from "react-icons/ci";
import { RxLinkedinLogo } from "react-icons/rx";
import "./Home.css";

  function Home() {
        const navigate = useNavigate();
        const location = useLocation(); 
        const cards = [
          {
            title: "HTML",
            icon: <FaHtml5 color="#E34F26" size={120} />,
            description: "HTML is the backbone of web development, providing structure and semantic elements for content on the web.",
            route: "/main/html",
          },
          {
            title: "CSS",
            icon: <FaCss3Alt color="#1572B6" size={120} />,
            description: "CSS styles the web, enhancing the visual appeal and layout of web pages with features like flexbox, grid, and animations.",
            route: "/main/css",
          },
          {
            title: "Bootstrap",
            icon: <FaBootstrap color="#7952B3" size={120} />,
            description: "Bootstrap is a powerful, open-source framework for building responsive, mobile-first websites with pre-designed components and a flexible grid system.",
            route: "/main/bootstrap",
          },
          {
            title: "JavaScript",
            icon: <FaJsSquare color="#F7DF1E" size={120} />,
            description: "JavaScript brings interactivity and dynamic behavior to web pages, enabling features like form validation, animations, and data manipulation.",
            route: "/main/js",
          },
          {
            title: "React",
            icon: <FaReact color="#61DAFB" size={120} />,
            description: "React is a JavaScript library for building dynamic, component-based user interfaces, offering efficiency and reusability.",
            route: "/main/react",
          },
          {
            title: "MongoDB",
            icon: <CiDatabase className="text-success" size={120} />,
            description: "The backend handles the server, database, and application logic, ensuring data processing, storage, and security for web applications.",
            route: "/main/mongo",
          },
        ];
    return (
      <div>
        <div className="nav">
          <div className={'left-nav d-flex align-items-center ${location.pathname === "/" ? "active" : ""}'} onClick={() => navigate("/")}>
            <FaCode size={50} color="white" />
            <p className="text-white lumora">Lumora</p>
          </div>

          <div className="vnr-logo p-2">
            <span className="text-white lumora">VNRVJIET</span>
          </div>
        </div>

        {/* <div className="d-flex flex-wrap text-white text-center align-items-center justify-content-center gap-5 logos">
          <div className={`html ${location.pathname === "/main/" ? "active" : ""}`} onClick={() => navigate("/main/")}>
            <FaHtml5
              size={180}
              color="#E34F26"
              className="icons"
            />
            <p>HTML</p>
          </div>
          <div className={`html ${location.pathname === "/main/css" ? "active" : ""}`} onClick={() => navigate("/main/css")}>
            <FaCss3Alt size={200} className="icons" color="#1572B6" />
            <p>CSS</p>
          </div>

          <div className={`html ${location.pathname === "/main/js" ? "active" : ""}`} onClick={() => navigate("/main/js")}>
            <FaJsSquare size={200} color="#F7DF1E" className="icons" />
            <p>JAVASCRIPT</p>
          </div>

          <div className={`html ${location.pathname === "/main/react" ? "active" : ""}`} onClick={() => navigate("/main/react")}>
            <FaReact size={200} color="#61DAFB" className="icons" />
            <p>REACT</p>
          </div>

          <div className={`html ${location.pathname === "/main/mongo" ? "active" : ""}`} onClick={() => navigate("/main/mongo")}>
            <SiMongodb size={200} color="#47A248" className="icons" />
            <p>MONGODB</p>
          </div>
        </div> */}


  <div className="container">
        <div className="grid">
          {cards.map((card, index) => (
            <div 
              key={index} 
              className="rounded-lg bg-gray-800 text-white overflow-hidden flex flex-col shadow-lg card"
              onClick={() => navigate(card.route)} // Added routing
              style={{ cursor: "pointer" }} // Make it clickable
            >
              {/* Header */}
              <div className="p-3  border-b border-gray-700 flex items-center space-x-3">
                <span className="icon-container">{card.icon}</span>
                <h3 className="text-xl font-semibold">{card.title}</h3>
              </div>

              {/* Footer */}
              <div className="p-4 bg-gray-900 border-t border-gray-700">
                <p className="text-gray-300 text-sm">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
          
      <footer className="text-white text-center py-1 mt-5 ">
        <div className="container line">
          <p className="lead fs-5">©2025 VNRVJIET</p>
          <p className="lead fs-5">Special thanks to <strong>Rajesh Sir</strong> for his invaluable guidance.</p>
          <a 
  href="https://www.linkedin.com/in/rajesh-t?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" 
  target="_blank" 
  rel="noopener noreferrer" 
  className="linkedin-link"
>
  <RxLinkedinLogo size={33} className="mx-1" /> <span className="lead fs-">Connect!</span>
</a>

        </div>
      </footer>

      </div>
    );
  }
  export default Home;
