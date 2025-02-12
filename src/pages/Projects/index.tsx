import { Link } from "react-router-dom";
import arrow from "../../assets/icons/arrow.svg";
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
        <p className=""></p>
      </div>
      <div className="flex flex-wrap my-20 gap-16">
        <div className="lg:w-[400px] w-full ">
          <div className="block-container w-12 h-12">
            <div className={`btn-back rounded-xl `} />
            <div className="btn-front rounde-xl flex justify-center">
              <img />
            </div>
          </div>
          <div className="mt-5 flex flex-col">
            <h4 className="text-2xl font-poppins font-semibold">
              Project Name
            </h4>
            <p className="mt-2 text-slate-500">Project Description</p>
            <div className="mt-5 flex items-center gap-2 font-poppins">
              <Link
                to={"/project"}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-blue-600"
              >
                Live Link
              </Link>
              <img src={arrow} alt="arrow" className="w-4 h-4 object-contain" />
            </div>
          </div>
        </div>
        <hr className="border-slate-200" />
      </div>
    </section>
  );
};

export default Projects;
