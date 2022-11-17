import Shoutout from "../models/Shoutout";
import "./SingleShoutout.css";

interface Props {
  shoutout: Shoutout;
}

const SingleShoutout = ({ shoutout }: Props) => {
  return (
    <li className="SingleShoutout">
      <p className="shoutout-to">Shout out to {shoutout.to}</p>
      <p className="shoutout-from">-From {shoutout.from}</p>
      <p className="shoutout-text">{shoutout.text}</p>
    </li>
  );
};

export default SingleShoutout;
