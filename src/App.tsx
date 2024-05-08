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
      const response = await fetch("/posts/posts.json", {
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
        <Navigation />

        <div className="relative w-full px-4 pt-10 pb-20 bg-transparent z-40">
          <div className="w-full flex-col max-w-[1024px] m-auto bg-transparent">
            <Routes>
              <Route
                path="/"
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
                            />
                          </div>
                        ))}
                    </Section>
                  </>
                }
              />
              {posts &&
                posts.map((post, index) => (
                  <Route
                    key={index}
                    path={`/posts/${post.title}`}
                    element={
                      <ReadView
                        filepath={post.filepath}
                        date={formatDate(post.date)}
                      />
                    }
                  />
                ))}
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
