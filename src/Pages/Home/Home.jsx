import React,{useEffect,useMemo,useReducer,useState}from 'react'
import './home.css'
import FeaturedInfo from '../../Components/FeaturedInfo/FeaturedInfo'
import Chart from '../../Components/Chart/Chart'
import { userData } from '../../data'
import WidgetSm from '../../Components/WidgetSm/WidgetSm'
import WidgetLg from '../../Components/WidgetLg/WidgetLg'
import { userRequest } from '../../requestMethods'
function Home() {
  const [userStats,setUserStats] = useState([]);
  const MONTHS = useMemo(
    () =>[
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Agu",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],[]
  );
  useEffect(()=>{
    const getStats = async ()=>{
      try{
        const res = await userRequest.get('/user/stats');
        const updatedStats = res.data.map(item=>(
          {
            name: MONTHS[item?._id-1],
            "Active User":item?.total
          }
        ))
        setUserStats(updatedStats);
      }catch(error){
        console.log("Fetching User Stats Failed",error);
      };
    };
    getStats();
  },[MONTHS]);
  return (
    <div className='home'>
      <FeaturedInfo/>
      <Chart title="User Analytics" data={userStats} grid datakey="Active User"/>
      <div className="homeWidgets">
        <WidgetSm/>
        <WidgetLg/>
      </div>
    </div>
  )
}

export default Home
