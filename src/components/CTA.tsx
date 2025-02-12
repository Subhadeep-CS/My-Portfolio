import { Link } from "react-router-dom";

const CTA: React.FC = () => {
  return (
    <section className="cta">
      <p className="cta-text">
        Have a new idea in mind?
        <br className="sm:block hidden" />
        Let's implement the idea together!{" "}
      </p>
      <Link to="/contact" className="btn">
        Contact
      </Link>
    </section>
  );
};

export default CTA;
