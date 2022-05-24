import * as bsIcons from 'react-icons/bs'
import * as mdIcons from 'react-icons/md'
import * as goIcons from 'react-icons/go'

export const mySidebarData = [
     {
          className: 'sidebar_link',
          path: "#",
          icon: <bsIcons.BsPerson />
     },

     {
          className: 'sidebar_link',
          path: "#services",
          icon: <mdIcons.MdWorkOutline />
     },

     {
          className: 'sidebar_link',
          path: '#projects',
          icon: <bsIcons.BsCodeSlash />
     },

     {
          className: 'sidebar_link-last',
          path: "#contact",
          icon: <goIcons.GoMail />
     }
]