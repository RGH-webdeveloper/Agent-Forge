import React from "react";

const LoadingComponent = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("");
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.log("Error : ", error);
      } finally {
        setIsLoading(false);
      }
      fetchData();
    };
  }, []);
  if (isLoading) {
    return (
      <div className="clock_loader">
        <BarLoader color="#47d7a3" />
      </div>
    );
  }
};

export default LoadingComponent;
