import { useState } from "react";
import { Cards } from "../Components/ItemCard";
import mockData from "./data.json";

export const useGetData = () => {
  //   const [data, setData] = useState<Cards>({ trips: [] });
  const [isLoading, setIsLoading] = useState<boolean>(true);

  if (isLoading) {
    setTimeout(() => setIsLoading(false), 1000);
  }
  // use this fetch when connecting to API. JS in browser cannot read local files

  //   fetch("data.json")
  //     .then((response) => {
  //       if (!response.ok) {
  //         throw new Error(`HTTP error! Status: ${response.status}`);
  //       }
  //       return response.json();
  //     })
  //     .then((fetchedData) => {
  //         setData(fetchedData)
  //         setIsLoading(false)
  //     })
  //     .catch((error) => console.error("Failed to fetch data:", error));
  return { data: mockData, loading: isLoading };
};
