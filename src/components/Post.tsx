import { Card, CardHeader, CardBody } from "@nextui-org/card";
import { useNavigate } from "react-router-dom";
interface PostProps {
  title?: string;
  summary?: string;
  date?: string;
  id?: number;
  url?: string;
}

const Post: React.FC<PostProps> = ({ title, summary, date, url }) => {
  const navigate = useNavigate();
  return (
    <Card
      isPressable
      isBlurred
      className="w-full my-4 bg-white/40 text-white hover:scale-95 text-left"
      onClick={() => {
        navigate(`/portfolio-v2/posts/${url}`);
      }}
    >
      <CardHeader className="pb-1">
        <div className="flex w-full justify-between items-center">
          <h2 className="inter-bold text-2xl">{title}</h2>
          <p className="inter-light text-right">{date}</p>
        </div>
      </CardHeader>
      <CardBody className="pt-0">{summary}</CardBody>
    </Card>
  );
};

export default Post;
