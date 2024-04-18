import { useState } from "react";
import "./App.css";

function App() {
  const [currentPost, setCurrentPost] = useState({});

  async function fetchRandomPost() {
     // TODO: fetch a random post from https://jsonplaceholder.typicode.com/posts/${post_id}
  }

  return (
    <>
    {/* display your post here */}
      <div className="card">
        <h2>{/* display the post title here */}</h2>
        <p>{/* display the post body here */}</p>
      </div>
      <br />
      <button onClick={() => fetchRandomPost()}>Get Random Post</button>
    </>
  );
}

export default App;
