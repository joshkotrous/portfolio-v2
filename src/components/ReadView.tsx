import React, { useEffect, useState } from "react";
import { IoIosClose } from "react-icons/io";

import ReactMarkdown from "react-markdown";
import { Link } from "react-router-dom";
import remarkGfm from "remark-gfm";
// @ts-ignore
import { Helmet } from "react-helmet";

interface ReadViewProps {
  filepath: string;
  date?: string;
  summary?: string;
  title: string;
}

const ReadView: React.FC<ReadViewProps> = ({
  filepath,
  date,
  summary,
  title,
}) => {
  const [articleContent, setArticleContent] = useState("");

  const encodedTitle = encodeURIComponent(title);

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
    <div>
      <Helmet>
        <title>Josh Kotrous | {title}</title>
        <meta charSet="utf-8" />
        <meta name="title" property="og:title" content={title} />
        <meta name="description" property="og:description" content={summary} />
        <meta property="og:type" content="Article" />
        <meta
          property="og:url"
          content={`https://joshkotrous.io/portfolio-v2/posts/${encodedTitle}`}
        />
        <meta property="og:site_name" content="Josh Kotrous" />
        <meta property="og:locale" content="en_US" />
        <meta name="author" content="Josh Kotrous" />
      </Helmet>
      <div className="bg-white/40 text-white mt-5 p-4 transition-opacity fade-in-50">
        <Link to={"/portfolio-v2/"} className="inline-block">
          <IoIosClose className="text-6xl m-[-16px] hover:scale-80 transition-all" />
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
              <div className="text-center overflow-auto">
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
            ul: ({ children }) => (
              <div className="w-full max-w-[700px] flex justify-center m-auto px-10">
                <ul className="list-disc">{children}</ul>
              </div>
            ),
            strong: ({ children }) => (
              <strong className="font-bold">{children}</strong>
            ),
          }}
          remarkPlugins={[remarkGfm]}
          children={articleContent}
        />
      </div>
    </div>
  );
};

export default ReadView;
