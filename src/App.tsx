import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Navigation from "./components/Navigation";
import HeroBanner from "./components/HeroBanner";
import Mesh from "./components/Mesh";
import Noise from "./components/Noise";
import Section from "./components/Section";
import Post from "./components/Post";
import ReadView from "./components/ReadView";
import { useEffect, useState } from "react";
// @ts-ignore
import { Helmet } from "react-helmet";
interface Post {
  title: string;
  summary: string;
  date: string;
  filepath: string;
}
function App() {
  const [posts, setPosts] = useState<Array<Post>>();
  const getPosts = async () => {
    try {
      const response = await fetch("/portfolio-v2/posts/posts.json", {
        headers: {
          Accept: "application/json",
        },
      });
      const data = await response.json();
      setPosts(data);
    } catch (error) {
      console.error("Error fetching Markdown file:", error);
    }
  };

  const formatDate = (date: any) => {
    // Create a formatter with desired options
    const formatter = new Intl.DateTimeFormat("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });

    // Format the date
    return formatter.format(Date.parse(date));
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <>
      <Router>
        <Helmet>
          <title>Josh Kotrous</title>
          <meta charSet="utf-8" />
          <meta name="title" property="og:title" content="Josh Kotrous" />
          <meta
            name="description"
            property="og:description"
            content="Josh Kotrous's personal website"
          />
          <meta property="og:url" content="https://joshkotrous.io" />
          <meta property="og:site_name" content="Josh Kotrous" />
          <meta property="og:locale" content="en_US" />
        </Helmet>
        <Navigation />

        <div className="relative w-full px-4 pt-10 pb-20 bg-transparent z-40">
          <div className="w-full flex-col max-w-[1024px] m-auto bg-transparent">
            <Routes>
              <Route
                path="/portfolio-v2/"
                element={
                  <>
                    <HeroBanner />
                    <Section title="Posts">
                      {posts &&
                        posts.map((post, index) => (
                          <div key={index} className="flex-col">
                            <Post
                              title={post.title}
                              summary={post.summary}
                              date={formatDate(post.date)}
                              id={index}
                              url={post.title.replace(/ /g, "-")}
                            />
                          </div>
                        ))}
                    </Section>
                  </>
                }
              />
              {posts &&
                posts.map((post, index) => {
                  return (
                    <Route
                      key={index}
                      path={`/portfolio-v2/posts/${post.title.replace(
                        / /g,
                        "-"
                      )}`}
                      element={
                        <ReadView
                          filepath={post.filepath}
                          date={formatDate(post.date)}
                          title={post.title}
                          summary={post.summary}
                        />
                      }
                    />
                  );
                })}
            </Routes>
          </div>
        </div>
      </Router>

      <Noise />
      <Mesh />
    </>
  );
}

export default App;
