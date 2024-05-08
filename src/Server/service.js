import React, { useState, useEffect } from "react";
import axios from "axios";

const MyComponent = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:9090/admin/articles"
        );

        setData(response.data);
      } catch (error) {
        setError(error.message);
        console.log("Meng");
      }
    };

    fetchData();

    // Clean-up function
    return () => {
      // Any clean-up code
    };
  }, []);

  return (
    <div>
      {error && <div>Error: {error}</div>}
      {data && (
        <div>
          <h2>Data from API:</h2>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default MyComponent;
