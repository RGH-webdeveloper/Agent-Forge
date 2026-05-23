import { useEffect, useState } from "react";
import { BarLoader } from "react-spinners";

const SpinnerLoader = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://rgh-webdeveloper.github.io/Agent-Forge/");
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.log("Error : ", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  if (isLoading) {
    return (
      <div>
        <BarLoader height={2} width={200} color="#47d7a3" />
      </div>
    );
  }
};

export default SpinnerLoader;