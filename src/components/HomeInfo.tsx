import InfoBox from "./InfoBox";

const renderObject = {
  1: (
    <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
      Welcome! I'm <span className="font-bold">Subhadeep Das</span>
      <br />A passionate <span className="italic">Software Engineer</span> from
      India, solving challenges with code.
    </h1>
  ),
  2: (
    <InfoBox
      text={
        "Currently innovating at Brainium Information Technologies as a Software Engineer, building solutions that make an impact."
      }
      link={"/about"}
      btnText={"Discover My Journey"}
    />
  ),
  3: (
    <InfoBox
      text={
        "I specialize in creating beautiful, efficient, and scalable web applications. Check out the projects that drive my passion."
      }
      link={"/projects"}
      btnText={"Explore My Work"}
    />
  ),
  4: (
    <InfoBox
      text={`Let’s connect! Whether it's for collaboration, feedback, or just a chat, I’d love to hear from you.`}
      link={"/contact"}
      btnText={"Get In Touch"}
    />
  ),
};

console.log("Calling Infobox");
const HomeInfo: React.FC<{ currentStage: number | null }> = ({
  currentStage,
}) => {
  return renderObject[currentStage as keyof typeof renderObject] || null;
};

export default HomeInfo;
