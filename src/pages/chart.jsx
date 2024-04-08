import React, { useState,useEffect } from 'react'
import { Bar,Line} from 'react-chartjs-2';
import axios from "axios";
import Layout from '../components/Layout';


// export function MyChart() {
//   const labels=['Jan','Feb','Mar','April','May','June'];
//   const data ={
//     labels,
//     datasets:[{
//       label:'My First Chart',
//       backgroundColor:'rgb(255, 99, 132)',
//       borderColor:'rgb(255, 99, 132)',
//       data:[10,10,5,12,8,6]
//     }]
//   }
//   return (
//     <Layout>
//       <Bar data={data}/>
//     </Layout>
//   )
// }



export function ChartSix() {

  const [data, setData] = useState([]);
  const [posts, setPosts] = useState([]);

  let title = [];
  let id = [];
  let count=0;
  useEffect(() => {

    axios.get("https://jsonplaceholder.typicode.com/posts").then(res => {
      console.log(res.data);
      const tampung = res.data;
    //   setPosts(ipl);
    
      tampung.forEach(item => {
      if (count<=10)
      {
        title.push(item.title);
        id.push(item.id);
        count++
      }
        
    });
  
      

      setData({
        Data: {
          labels: title,
          datasets: [
            {
              label: "IPL 2018/2019 Top Run Scorer",
              data: id,
              backgroundColor: [
                "#3cb371",
                "#0000FF",
                "#9966FF",
                "#4C4CFF",
                "#00FFFF",
                "#f990a7",
                "#aad2ed",
                "#FF00FF",
                "Blue",
                "Red"
              ]
            }
          ]
        }
      });
    });
  },[]);

  return (
    <div>
      <Line data={data.Data} />
      <p>test</p>
    </div>
  )
}

  
