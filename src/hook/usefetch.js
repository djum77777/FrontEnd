import axios from "axios";
import { useState, useEffect } from "react";

//buat hook sndiri untuk get data dan tmbhn fungsi isLoading
export const useGet= (url) => {
  const [data, setData] = useState(null);
  const [isLoading,setIsLoading]=useState(false)
  
  const getData=async()=>{
    
    try{
      setIsLoading(true)
      const response = await axios.get(url)
      console.log(response.data);
      setData(response.data)
      setIsLoading(false)
    }catch (error){
      console.log(error);
      setIsLoading(false)
    }
  }
  useEffect(() => {
    getData();
  }, [url]);

  return [data,isLoading];
};
