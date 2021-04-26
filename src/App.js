import { useEffect, useState } from "react";
import axios from "axios";

export default () => {
  const [joke, setJoke] = useState(["LOADING JOKE"]);
  const [isShowed, setShowed] = useState(false);

  const getJoke = () => {
    axios
      .get("https://api.chucknorris.io/jokes/random")
      .then((res) => setJoke(res.data.value));
  };

  return (
    <div>
      <h1>Daily Joke</h1>
      <p>{isShowed ? joke : "CLICK THE BUTTON TO GET A JOKE"}</p>
      <button
        onClick={(e) => {
          getJoke();
          console.log({ joke });
          setShowed(true);
          e.preventDefault();
        }}
      >
        {isShowed ? "Next Joke" : "Show Joke"}
      </button>
    </div>
  );
};
