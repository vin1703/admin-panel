import React,{useEffect,useState} from 'react'
import './widgetLg.css'
import { userRequest } from '../../requestMethods';

function WidgetLg() {
    const Button = ({ type }) => {
        return <button className={"widgetLgButton " + type}>{type}</button>;
      };
      const [orders,setOrders] = useState([]);
      useEffect(()=>{
        const getOrders = async()=>{
          try {
            const res = await userRequest.get('/order?new=true');
            setOrders(res.data);
          }catch{}
        }
        getOrders();
      })
  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Latest transactions</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Customer Id</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Amount</th>
          <th className="widgetLgTh">Status</th>
        </tr>
        {orders.map(user=>(
          <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">{user.userId}</span>
          </td>
          <td className="widgetLgDate">2 Jun 2021</td>
          <td className="widgetLgAmount">$ {user.amount}</td>
          <td className="widgetLgStatus">
            <Button type={user.status.charAt(0).toUpperCase() + user.status.slice(1).toLowerCase()} />
          </td>
        </tr>
        ))}
      </table>
    </div>

  )
}

export default WidgetLg
