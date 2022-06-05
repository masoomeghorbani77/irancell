import React from "react";
import Features from "../../Components/Features/Features";
import Chart from "../../Components/Chart/Chart";
import './Home.css'
import  {xAxisData} from "../../datas";

import Table from "../../Components/Table";




export default function Home (){
    return(
        <div className="home"> 
           <Features/>
           <Chart grid title="نمودار میزان مصرف کل" data={xAxisData} dataKey="Sale"/>
           <br/>
      <div className="homeWidgets">

          <Table/> 
         
        </div>
         
        </div>
        
    )
}