import React from "react";
import { mySidebarData } from "../../data/sidebarData";
import './index.scss'

const Sidebar = () => {
     return (
          <>
               <aside className='sidebar-menu shadow'>
                    {mySidebarData.map((data, index) => {
                         return (
                              <a className="text-decoration-none" href={data.path} key={index}>
                                   <div className={data.className}>
                                        {data.icon}
                                   </div>
                              </a>
                         )
                    })}
               </aside>
          </>
     )
}

export default Sidebar;