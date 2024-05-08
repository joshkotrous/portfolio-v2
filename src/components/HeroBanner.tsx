import { MdOutlineEmail } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const HeroBanner = () => {
  const gitHubUrl = "https://github.com/joshkotrous";
  const linkedInUrl = "https://linkedin.com/in/joshkotrous";
  const emailUrl = "mailto:joshkotrous@gmail.com";
  const companyUrl = "https://www.americanexpress.com/";
  return (
    <div className="relative h-[100vh] content-center justify-center text-center bg-transparent text-white transition-opacity fade-in pb-20">
      <h1 className="inter-bold text-8xl">Hello World!</h1>
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
      <div className="absolute w-full text-center bottom-[6rem]">
        <div className="flex w-full h-[100px] justify-center items-center m-auto gap-4">
          <a href={emailUrl} rel="noopener noreferrer">
            <MdOutlineEmail className="transition-all text-5xl hover:scale-125" />
          </a>
          <a href={gitHubUrl} target="_blank" rel="noopener noreferrer">
            <FaGithub className="transition-all text-5xl hover:scale-125" />
          </a>
          <a href={linkedInUrl} target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="transition-all text-5xl hover:scale-125" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
