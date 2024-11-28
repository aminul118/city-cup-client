import { useLoaderData } from "react-router-dom";
import Juice from "../components/Juice";

const Juices = () => {
  const juices = useLoaderData();
  console.log(juices);
  return (
    <div className="grid grid-cols-3 gap-3">
      {juices.map((juice) => (
        <Juice key={juice._id} juice={juice} />
      ))}
    </div>
  );
};

export default Juices;
