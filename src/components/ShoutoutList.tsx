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

  const onAddShoutout = (shoutout: Shoutout) => {};

  return (
    <div className="ShoutoutList">
      <AddShoutoutForm shoutout={onAddShoutout} />
      <ul>
        {allShoutouts?.map((item) => (
          <SingleShoutout key={item._id} shoutout={item} />
        ))}
      </ul>
    </div>
  );
};

export default ShoutoutList;
