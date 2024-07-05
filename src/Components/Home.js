import { useParams } from "react-router-dom";
import { React, useEffect   } from "react";
function Home({ getDetails }) {
  const { id } = useParams();
  useEffect(() => {
    getDetails(id);
  }, [id]);
  return <div>Home</div>;
}

export default Home;
