import React, { useEffect, useState } from "react";
import { IoIosClose } from "react-icons/io";

import ReactMarkdown from "react-markdown";
import { Link } from "react-router-dom";
import remarkGfm from "remark-gfm";

interface ReadViewProps {
  filepath: string;
  date?: string;
}

const ReadView: React.FC<ReadViewProps> = ({ filepath, date }) => {
  const [articleContent, setArticleContent] = useState("");

  const fetchMarkdownFile = async () => {
    try {
      const response = await fetch(filepath, {
        headers: {
          Accept: "text/markdown",
        },
      }); // Replace with the path to your Markdown file
      const text = await response.text();
      setArticleContent(text);
    } catch (error) {
      console.error("Error fetching Markdown file:", error);
    }
  };

  useEffect(() => {
    fetchMarkdownFile();
  }, []);

  return (
    <div className="bg-white/40 text-white mt-5 p-4">
      <Link to={"/"} className="inline-block">
        <IoIosClose className="text-6xl m-[-16px] mb-[2px] hover:scale-80 transition-all" />
      </Link>
      <ReactMarkdown
        components={{
          h1: ({ children }) => (
            <>
              <h1 className="text-3xl inter-bold">{children}</h1>
              <p className="inter-regular">{date}</p>
            </>
          ),
          h2: ({ children }) => (
            <h2 className="text-2xl inter-bold mb-2 mt-4">{children}</h2>
          ),
          p: ({ children }) => <p className="inter-regular">{children}</p>,
          table: ({ children }) => (
            <div className="w-full text-center">
              <table className="border-collapse m-auto border-white border-small">
                {children}
              </table>
            </div>
          ),
          th: ({ children }) => (
            <th className="border-white border-small p-3">{children}</th>
          ),
          td: ({ children }) => (
            <td className="border-white border-small p-3">{children}</td>
          ),
          ol: ({ children }) => <ol className="list-decimal">{children}</ol>,
        }}
        remarkPlugins={[remarkGfm]}
        children={articleContent}
      />
    </div>
  );
};

export default ReadView;
