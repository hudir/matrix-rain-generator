import React from 'react'
import { useContext } from 'react'
import Store from '../../store/store'
import "./showCode.scss"

export default function ShowCode() {
    const {storeA,storeB,maxLettersSingleRain,lettersFromStroeA,howHeavy, ani} =useContext(Store)
  return (
    <div className='code'>
        <h1>add these code to component</h1>
    <pre>{`
import {useEffect, useState } from "react";

export default function MRain() {
    const [rain, setRain] = useState(null)
    ,[ani, setAni] =useState({
        randomNum:function(max,min=0){return Math.floor(Math.random()*(max-min))+min},
        durationBasic:${ani.durationBasic},
        durationRandom:${ani.durationRandom},
        delayBasic:${ani.delayBasic},
        delayRandom:${ani.delayRandom},
        opacityBasic:${ani.opacityBasic},
        opacityRandom:${ani.opacityRandom},
        linear:${ani.linear},
    })
    ,storeA='${storeA}'
    ,storeB='${storeB}'

    useEffect(()=>{
        function randomNum(max,min=0){
            return Math.floor(Math.random()*(max-min))+min
        };
        
        function rainEle(store1=storeA, store2=storeB , lengFunc=randomNum){
            let leng = lengFunc(${maxLettersSingleRain});
            let res='';
        
            while(leng>-1){
                const whichStore = lengFunc(100);
                if(whichStore<${lettersFromStroeA} && store2.length>0) res+=store2[randomNum(store2.length)]
                else if(store1.length>0) res+=store1[randomNum(store1.length)]
                leng--
            }
            return res;
        }

        function heavyRain(water=rainEle,num=${howHeavy}){
            let i = 100
            const res = [];
            while(i>0){
               randomNum(100) >= 100-num ? res.push(water()) : res.push('')
               i--
            }
            return res;
        }
 
       const raining = heavyRain()
       setRain(raining)
     },[])

  
 return(
    <div className="mRain">
        {rain && rain.map((x,i)=> (
            <p key={i} className={ani.linear ? "linear" : ''} style={
             {
                animation:\`fall \${(ani.randomNum(ani.durationRandom)+ani.durationBasic) + 'ms'} \${(ani.randomNum(ani.delayRandom)+ ani.delayBasic) + 'ms'} infinite\`, opacity: \`\${(ani.randomNum(ani.opacityRandom) + ani.opacityBasic ) / 100 }\`
              } 
        }>{x}</p>
       ))}
    </div>
  )
 }


 `}</pre>

 <h1>add these code to css</h1>

 <pre>{`
 .mRain {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    width: 100%;
    height: 100vh;
    background-color: black;
    color: #5e5;
    display: flex;
    overflow: hidden;
  }
  
  .mRain p {
    writing-mode: vertical-rl;
    text-orientation: upright;
    text-align: right;
    width: 1%;
    max-height: 100vh;
    font-size: 18px;
    position: relative;
     top: -200vh;   
  }
  
  @keyframes fall {
    0% {
        top: -200vh;
        opacity: 1;
    }
    100% {
        top: calc(130vh);
        opacity: 0.2;
    }
  }
  
  .linear {
    background: linear-gradient(rgba(0, 120, 0, 0) ,rgb(0,250,0) 62%);
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }
 `}</pre>

    </div>
    
  )
}
