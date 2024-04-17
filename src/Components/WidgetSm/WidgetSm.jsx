import React, { useEffect,useState} from 'react'
import VisibilityIcon from '@material-ui/icons/Visibility';
import './widgetSm.css'
import { userRequest } from '../../requestMethods';
export default function WidgetSm() {
  const [users,setUsers] = useState([]);
  useEffect(()=>{
    const getUsers = async()=>{
      try {
        const res = await userRequest.get('/user?new=true');
        setUsers(res.data);
      }catch{}
    }
    getUsers();
  })
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">

        {users.map(user=>(
          <li className="widgetSmListItem">
          <img
            src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"
            alt=""
            className="widgetSmImg"
            Key={user._id}
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">{user.username}</span>
            {/* <span className="widgetSmUserTitle">Software Engineer</span> */}
          </div>
          <button className="widgetSmButton">
            <VisibilityIcon className="widgetSmIcon" />
            Display
          </button>
        </li>
        ))}
      </ul>
    </div>
  )
}
