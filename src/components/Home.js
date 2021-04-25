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
       <marquee>All data is provided by covid19india.org, volunteer driven, crowdsourced tracker for Covid19 cases in India. </marquee>
     {data && <TotalCasesCards data={data} {...props}/>}
     {data && <CasesTable data={data} {...props}/>}
    </div>
  );
}
