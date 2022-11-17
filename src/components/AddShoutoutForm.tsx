import { FormEvent, useState } from "react";
import Shoutout from "../models/Shoutout";
import "./AddShoutoutForm.css";

interface Props {
  shoutout: (shoutout: Shoutout) => void;
}

const AddShoutoutForm = ({ shoutout }: Props) => {
  const [inputTo, setInputTo] = useState("");
  const [inputFrom, setInputFrom] = useState("");
  const [inputShoutout, setInputShoutout] = useState("");

  const submitHandler = (e: FormEvent) => {
    e.preventDefault();
    shoutout({ to: inputTo, from: inputFrom, text: inputShoutout });
    setInputTo("");
    setInputFrom("");
    setInputShoutout("");
  };

  return (
    <form className="AddShoutoutForm" onSubmit={submitHandler}>
      <h1>Leave a Shout out</h1>
      <label htmlFor="to">To</label>
      <input
        type="text"
        name="to"
        id="to"
        value={inputTo}
        onChange={(e) => setInputTo(e.target.value)}
      />
      <label htmlFor="from">From</label>
      <input
        type="text"
        name="from"
        id="from"
        value={inputFrom}
        onChange={(e) => setInputFrom(e.target.value)}
      />
      <label htmlFor="shoutout">Shout Out</label>
      <textarea
        value={inputShoutout}
        onChange={(e) => setInputShoutout(e.target.value)}
      ></textarea>
      <button>Submit Shout Out!</button>
    </form>
  );
};

export default AddShoutoutForm;
