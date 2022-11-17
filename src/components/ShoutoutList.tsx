import { useState, useEffect } from "react";
import Shoutout from "../models/Shoutout";
import { getAllShoutouts } from "../services/shoutoutApiService";
import AddShoutoutForm from "./AddShoutoutForm";
import "./ShoutoutList.css";
import SingleShoutout from "./SingleShoutout";

const ShoutoutList = () => {
  const [allShoutouts, setAllShoutouts] = useState<Shoutout[]>();

  useEffect(() => {
    getAllShoutouts().then((res) => setAllShoutouts(res));
  }, []);

  const addShoutoutHandler = (shoutout: Shoutout) => {
    setAllShoutouts((prev) => [...prev, shoutout]);
  };

  return (
    <div className="ShoutoutList">
      <AddShoutoutForm shoutout={addShoutoutHandler} />
      <ul>
        {allShoutouts?.map((item) => (
          <SingleShoutout key={item._id} shoutout={item} />
        ))}
      </ul>
    </div>
  );
};

export default ShoutoutList;
