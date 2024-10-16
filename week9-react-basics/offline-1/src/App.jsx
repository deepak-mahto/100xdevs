import { useState } from "react";
import Post from "./components/Post";

const App = () => {
  const [posts, setPosts] = useState([]);

  function addPost() {
    setPosts([
      ...posts,
      {
        name: "deepak",
        subtitle: "20k followers",
        time: "4min ago",
        image:
          "https://imgcdn.stablediffusionweb.com/2024/5/21/8e1b0f43-cca9-46e6-a5ff-45785271fc19.jpg",
        description: "This is description of the this profile",
      },
    ]);
  }

  return (
    <div
      style={{
        background: "aquamarine",
        height: "100vh",
      }}
    >
      <button onClick={addPost}>Add post</button>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div>
          {posts.map((post) => (
            <Post
              name={post.name}
              subtitle={post.subtitle}
              time={post.time}
              image={post.image}
              description={post.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
