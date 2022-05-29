import MyPortfolio from '../assets/images/my_portfolio.jpg'
import Joyce from '../assets/images/joyce.jpg'
import TodoApp from '../assets/images/todo.jpg'
import CNN from '../assets/images/cnn.jpg'

export const myProjectsData = [
     {
          className: "border border-dark border-2",
          detailedText: "This is my portfolio website built mainly on javascript with it's most popular library, React.js. This project is my personal project that tells the world what I do, it contains information about me, projects I've done and my contact information.",
          projectTitle: "Nathan - portfolio",
          colSystem: 6,
          path: "https://github.com/Nathan-freelance-dev/portfolio",
          img: MyPortfolio,
          imageClass: "border-bottom border-dark border-2",
          altText: "Nathaniel's project"
     },

     {
          className: "border border-dark border-2",
          detailedText: "Joyce in a hair styling business website I started building for a client, it contains functions like online booking, contact, and login/signup auth. Although this project is still under development, it is built primarily with javascript.",
          projectTitle: "Joyce - Hair salon",
          colSystem: 6,
          path: "https://github.com/Nathan-freelance-dev/joyce",
          img: Joyce,
          imageClass: "border-bottom border-dark border-2",
          altText: "Nathaniel's project"
     },
     
     {
          className: "border border-dark border-2",
          detailedText: "This is a javascript project I made when learning the fundamentals of javascript it uses the localstorage inbuilt function to store data to the browser.",
          projectTitle: "Todo app - JS Personal project",
          colSystem: 6,
          path: "https://ourtodo.netlify.app/",
          img: TodoApp,
          imageClass: "border-bottom border-dark border-2",
          altText: "Nathaniel's project"
     },

     {
          className: "border border-dark border-2",
          detailedText: "The cnn clone website is a replica of the original cnn website, it was made by me when i just started learing how to code.",
          projectTitle: "CNN - Cloned website",
          colSystem: 6,
          path: "https://cnnclone.netlify.app/",
          img: CNN,
          imageClass: "border-bottom border-dark border-2",
          altText: "Nathaniel's project"
     }
]