import "./App.css"

import {useEffect, useState } from "react";

export default function MRain() {
    const [rain, setRain] = useState(null)
    ,[ani, setAni] =useState({
        randomNum:function(max,min=0){return Math.floor(Math.random()*(max-min))+min},
        durationBasic:8500,
        durationRandom:3000,
        delayBasic:1000,
        delayRandom:5000,
        opacityBasic:30,
        opacityRandom:70,
        linear:true,
    })
    ,storeA='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ@#&'
    ,storeB='永和九年岁在癸丑暮春之初会于会稽山阴之兰亭脩稧事也群贤毕至少长咸集此地有崇山峻领茂林脩竹又有清流激湍映带左右引以为流觞曲水列坐其次虽无丝竹管弦之盛一觞一咏亦足以畅叙幽情'

    useEffect(()=>{
        function randomNum(max,min=0){
            return Math.floor(Math.random()*(max-min))+min
        };
        
        function rainEle(store1=storeA, store2=storeB , lengFunc=randomNum){
            let leng = lengFunc(80);
            let res='';
        
            while(leng>-1){
                const whichStore = lengFunc(100);
                if(whichStore<10 && store2.length>0) res+=store2[randomNum(store2.length)]
                else if(store1.length>0) res+=store1[randomNum(store1.length)]
                leng--
            }
            return res;
        }

        function heavyRain(water=rainEle,num=100){
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
    <div className="mRain" >
        {rain && rain.map((x,i)=> (
            <p key={i} className={ani.linear ? "linear" : ''} style={
             {
                animation:`fall ${(ani.randomNum(ani.durationRandom)+ani.durationBasic) + 'ms'} 
                ${(ani.randomNum(ani.delayRandom)+ ani.delayBasic) + 'ms'} infinite`, 
                opacity: `${(ani.randomNum(ani.opacityRandom) + ani.opacityBasic ) / 100 }`
              } 
        }>{x}</p>
       ))}
    </div>
  )
 }