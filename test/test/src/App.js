import "./App.css"
import {useEffect, useState } from "react";

export default function MRain() {
    const [rain, setRain] = useState(null)
    ,[ani, setAni] =useState({
        randomNum:function(max,min=0){return Math.floor(Math.random()*(max-min))+min},
        durationBasic:7000,
        durationRandom:3000,
        delayBasic:1000,
        delayRandom:5000,
        opacityBasic:90,
        opacityRandom:10,
        linear:false,
    })
    ,storeA='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ@#&'
    ,storeB='永和九年岁在癸丑暮春之初会于会稽山阴之兰亭脩稧事也群贤毕至少长咸集此地有崇山峻领茂林脩竹又有清流激湍映带左右引以为流觞曲水列坐其次虽无丝竹管弦之盛一觞一咏亦足以畅叙幽情是日也天朗气清惠风和畅仰观宇宙之大俯察品类之盛所以游目骋怀足以极视听之娱信可乐也夫人之相与俯仰一世或取诸怀抱悟言一室之内或因寄所托放浪形骸之外虽趣舍万殊静躁不同当其欣于所遇暂得于己怏然自足不知老之将至及其所之既倦情随事迁感慨系之矣向之所欣俯仰之间以为陈迹犹不能不以之兴怀况脩短随化终期于尽古人云死生亦大矣岂不痛哉每揽昔人兴感之由若合一契未尝不临文嗟悼不能喻之于怀固知一死生为虚诞齐彭殇为妄作后之视今亦由今之视昔悲夫故列叙时人录其所述虽世殊事异所以兴怀其致一也后之揽者亦将有感于斯文'

    useEffect(()=>{
        function randomNum(max,min=0){
            return Math.floor(Math.random()*(max-min))+min
        };
        
        function rainEle(store1=storeA, store2=storeB , lengFunc=randomNum){
            let leng = lengFunc(180);
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
    <div className="mRain">
        {rain && rain.map((x,i)=> (
            <p key={i} className={ani.linear ? "linear" : ''} style={
             {
                animation:`fall ${(ani.randomNum(ani.durationRandom)+ani.durationBasic) + 'ms'} ${(ani.randomNum(ani.delayRandom)+ ani.delayBasic) + 'ms'} infinite`, opacity: `${(ani.randomNum(ani.opacityRandom) + ani.opacityBasic ) / 100 }`
              } 
        }>{x}</p>
       ))}
    </div>
  )
 }

