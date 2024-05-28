import { Link } from "react-router-dom";
const Navigation = () => {
  return (
    <>
      <div className="fixed w-full  p-4 flex justify-center z-50 text-white">
        <div className="flex w-full justify-between items-center max-w-[1024px]">
          <Link to={"/portfolio-v2/"}>
            <h2 className="inter-bold text-3xl">Josh Kotrous</h2>
          </Link>
          <ul className="flex gap-4 text-xl inter-regular">
            <li>{`</>`}</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navigation;
