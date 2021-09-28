import React, { useState } from 'react'
import "./App.css";



const Forcss = [
  {
    name: "Learn Flexbox for free",
    Link: "https://scrimba.com/learn/flexbox",
    Image: require("./Asswsts/cssflexbox.png").default,

  },
  {
    name: "Learn CSS Grid for free",
    Link: "https://scrimba.com/learn/cssgrid",
    Image: require("./Asswsts/ccssgrid.png").default,
    
  },
  {
    name: "Learn CSS Animations",
    Link: "https://youtu.be/LCEgHntqBps",
    Image:require("./Asswsts/cssanimetion.png").default,
  },
]

const ForJs = [
  {
    name: "Learn Flexbox for free",
    Link: "https://scrimba.com/learn/flexbox",
    Image:require("./Asswsts/cssanimetion.png").default,
  },
  {
    name: "Learn CSS Grid for free",
    Link: "https://scrimba.com/learn/cssgrid",
    Image: require("./Asswsts/cssanimetion.png").default,
  },
  {
    name: "Learn CSS Animations",
    Link: "https://youtu.be/LCEgHntqBps",
    Image: require("./Asswsts/cssanimetion.png").default,
  },
]

const ForReact = [
  {
    name: "Learn React for free",
    Link: "https://scrimba.com/learn/learnreact",
    Image:require("./Asswsts/reactfree.png").default,
  },
  {
    name: "Learn CSS Grid for free",
    Link: "https://scrimba.com/learn/cssgrid",
    Image:require("./Asswsts/cssanimetion.png").default,
  },
  {
    name: "Learn CSS Animations",
    Link: "https://youtu.be/LCEgHntqBps",
    Image: require("./Asswsts/cssanimetion.png").default,
  },
]






const App = () => {
  const  [show, SetShow] = useState(ForJs);

  const ShowThisList = (obj) => {
  
    SetShow(obj)
  }

  return (
    <div>
     <center> <h2>courses recommendation</h2></center>
      <div className="ButtonBox">
      <button onClick={()=>ShowThisList(ForJs)}>JavaScript</button>
      <button onClick={()=>ShowThisList(ForReact)}>React</button>
      <button onClick={() => ShowThisList(Forcss)}>CSS</button>
     </div>
     <hr />
      
     <div className="card-list">
        {
          show.map(item => {
            return <div className="mycard">
                      <div className="card-container">
                    <img src={item.Image} className="picture" alt="" />
                    <h2>{item.name}</h2>
                <div className="seemore"><a href={item.Link}> See More</a></div>
                   </div>
               </div>;
          })
        }
      </div>
   </div>
  
    

  );
};

export default App;

