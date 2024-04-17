import React from 'react'
import './topbar.css'
import { NotificationsNone, Language, Settings } from "@material-ui/icons";

function Topbar() {
  return (
<div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">CS Admin</span>
        </div>
        <div className="topRight">
          {/* <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div> */}
          {/* <div className="topbarIconContainer">
            <Language />
            <span className="topIconBadge">2</span>
          </div> */}
          {/* <div className="topbarIconContainer">
            <Settings />
          </div> */}
          <img src="https://media.licdn.com/dms/image/D5603AQEW-g3BNmsRLw/profile-displayphoto-shrink_800_800/0/1700204649863?e=2147483647&v=beta&t=v_zykYE9LuLcSzzGdILknuC83_4u6hQr738YmNuRSp8" alt="" className="topAvatar" />
        </div>
      </div>
    </div>
  )
}

export default Topbar
