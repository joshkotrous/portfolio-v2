import { MdOutlineEmail } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const HeroBanner = () => {
  const gitHubUrl = "https://github.com/joshkotrous";
  const linkedInUrl = "https://linkedin.com/in/joshkotrous";
  const emailUrl = "mailto:joshkotrous@gmail.com";
  const companyUrl = "https://www.americanexpress.com/";
  return (
    <div className="relative h-[90vh] content-center justify-center text-center bg-transparent z-50 text-white">
      <h2 className="inter-bold text-8xl">Hello World!</h2>
      <h3 className=" inter-semibold text-xl max-w-[600px] m-auto">
        Full stack engineer specialized in engineering leadership and building
        high performing teams.
      </h3>
      <h4 className="pt-4 inter-light">
        Currently Senior Software Engineering Manager @{" "}
        <a
          className="hover:underline"
          href={companyUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          American Express
        </a>
      </h4>
      <h4 className="inter-light">New York, NY</h4>
      <div className="absolute w-full left-0 mt-40 text-center">
        <div className="flex justify-center gap-4">
          <a href={emailUrl} rel="noopener noreferrer">
            <MdOutlineEmail className="size-[40px]" />
          </a>
          <a href={gitHubUrl} target="_blank" rel="noopener noreferrer">
            <FaGithub className="size-[40px]" />
          </a>
          <a href={linkedInUrl} target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="size-[40px]" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
