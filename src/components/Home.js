import React,{useEffect,useState} from "react";
import TotalCasesCards from "./TotalCasesCards"
import API from "../api/index";
import CasesTable from "./CasesTable"

export default function Home(props) {
const [data, setData] = useState(null)
  useEffect(() => {
    API.url.get(API.path.data)
    .then(res=>setData(res.data))
    .catch(err=>console.log(err))
    
  }, [])

  return (
    <div>
     
     {data && <TotalCasesCards data={data} {...props}/>}
     {data && <CasesTable data={data} {...props}/>}
    </div>
  );
}
