import earthVideo from "../../assets/moving-earth.mp4";
import { Link } from "react-router-dom";
import arrow from "../../assets/icons/arrow.svg";
const Start: React.FC = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={earthVideo}
        autoPlay
        loop
        muted
      />

      <h1 className="text-5xl font-bold mb-6">Welcome to My World</h1>
      <Link to={"/home"} className="neo-brutalism-white neo-btn">
        {"Explore My World!"}
        <img src={arrow} alt="arrow" className="w-4 h-4 object-contain" />
      </Link>
    </section>
  );
};

export default Start;
