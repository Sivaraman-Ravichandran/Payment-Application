import { useParams } from "react-router-dom";
import { React, useEffect } from "react";
import Slit from "./Slider";
function Home({ getDetails }) {
  const { id } = useParams();
  useEffect(() => {
    getDetails(id);
  }, [id]);
  return (
    <div>
      <div className="slit">
        <Slit />
      </div>
    </div>
  );
}

export default Home;
