import { Link } from "react-router-dom";
import arrow from "../../assets/icons/arrow.svg";
import { projects } from "../../utils/constant";
const Projects: React.FC = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        My{" "}
        <span className="blue-gradient_text font-semibold drop-shadow-sm">
          Projects
        </span>
      </h1>
      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p className="">
          Here are some of the projects I’ve worked on, showcasing my expertise
          in React.js, Next.js, and modern web development. From intuitive user
          interfaces to high-performance applications, each project reflects my
          dedication to clean code, seamless UX, and innovative problem-solving.
          Click on any project to explore it further!
        </p>
      </div>
      <div className="flex flex-wrap my-20 gap-16">
        {projects.map((project) => (
          <>
            <div className="lg:w-[400px] w-full " key={project.name}>
              <div className="block-container w-12 h-12">
                <div className={`btn-back rounded-xl ${project.theme}`} />
                <div className="btn-front rounde-xl flex justify-center items-center">
                  <img
                    src={project.iconUrl}
                    alt="project-icon"
                    className="w-1/2 h-1/2 object-contain"
                  />
                </div>
              </div>
              <div className="mt-5 flex flex-col">
                <h4 className="text-2xl font-poppins font-semibold">
                  {project.name}
                </h4>
                <p className="mt-2 text-slate-500">{project.description}</p>
                <p className="mt-2 text-slate-500 font-semibold">
                  Status:{" "}
                  <span className="text-green-600">{project.status}</span>
                </p>
                <div className="mt-5 flex items-center gap-2 font-poppins">
                  <Link
                    to={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-blue-600"
                  >
                    Live Link
                  </Link>
                  <img
                    src={arrow}
                    alt="arrow"
                    className="w-4 h-4 object-contain animate-ping duration-300"
                  />
                </div>
              </div>
            </div>
          </>
        ))}
        <hr className="border-slate-200" />
      </div>
    </section>
  );
};

export default Projects;
