import { createContext, useEffect, useReducer, useState } from "react";
import { langTingXu, letterEng } from "./letters";


const Store = createContext();

export default Store;


// animations init
const init = {
    randomNum:function(max,min=0){return Math.floor(Math.random()*(max-min))+min},
    durationBasic:7000,
    durationRandom:3000,
    delayBasic:1000,
    delayRandom:5000,
    opacityBasic:90,
    opacityRandom:10,
    linear:true,
    rain: true,
    value:500
};
/* const reducerFunc=(prevAni,action)=>{} */
 const reducerFunc=(prevAni,action)=>{
    switch(action.type){
        case "DBCHANGE":
            return ({...prevAni,durationBasic: action.dBChange}); 
        case "DBPLUS":
            return {...prevAni,durationBasic: +prevAni.durationBasic+prevAni.value};
        case "DBMINUS":
            return {...prevAni,durationBasic: +prevAni.durationBasic-prevAni.value};

        case "DRCHANGE":
            return ({...prevAni,durationRandom: action.dRChange});
        case "DRPLUS":
            return {...prevAni,durationRandom: +prevAni.durationRandom+prevAni.value};
        case "DRMINUS":
            return {...prevAni,durationRandom: +prevAni.durationRandom-prevAni.value}; 


        case "DEBPLUS":
            return {...prevAni,delayBasic: +prevAni.delayBasic+prevAni.value};
        case "DEBMINUS":
            return {...prevAni,delayBasic: +prevAni.delayBasic-prevAni.value}; 

        case "DERPLUS":
            return {...prevAni,delayRandom: +prevAni.delayRandom+prevAni.value};
        case "DERMINUS":
            return {...prevAni,delayRandom: +prevAni.delayRandom-prevAni.value}; 


        case "OBPLUS":
            return prevAni.opacityBasic + prevAni.opacityRandom < 100 ?
             {...prevAni,opacityBasic: +prevAni.opacityBasic+prevAni.value/100} : prevAni
        case "OBMINUS":
            return prevAni.opacityBasic + prevAni.opacityRandom > 0 ? {...prevAni,opacityBasic: +prevAni.opacityBasic-prevAni.value/100} : prevAni

        case "ORPLUS":
            return prevAni.opacityBasic + prevAni.opacityRandom < 100 ?
            {...prevAni,opacityRandom: +prevAni.opacityRandom+prevAni.value/100} : prevAni
        case "ORMINUS":
            return prevAni.opacityBasic + prevAni.opacityRandom > 0 ? {...prevAni,opacityRandom: +prevAni.opacityRandom-prevAni.value/100} : prevAni 


        case "LINEA":
            return {...prevAni,linear: !prevAni.linear}

        case "PAGE":
            if (action.currentPage==='contact' || action.currentPage==='about'){
                return {...prevAni, rain:false}
            } else return {...prevAni, rain:true}

        default:
            return prevAni
    }
}; 

export function StoreProvider({children}){
    // reducer
    const [ani, dispatch] = useReducer(reducerFunc, init)
    // show the side menu
    const [sideMenus, setSideMenus] = useState(false)
    // rain letters
    , [rain, setRain] = useState(null)
    // letters store
    , [storeA, setStoreA] = useState(letterEng)
    , [storeB, setStoreB] = useState(langTingXu)
    , [maxLettersSingleRain, setMaxLettersSingleRain] = useState('80')
    , [lettersFromStroeA,setLettersFromStroeA] = useState('10')
    , [howHeavy, setHowHeavy] = useState(100)
    , [currentPage, setCurrentPage] = useState('')
    , [submit, setSubmit]= useState(null)

    useEffect(()=>dispatch({
        type:"PAGE",
        currentPage:currentPage
    }),[currentPage])

    useEffect(()=>{
       
       // random number form 0-69
       function randomNum(max,min=0){
           return Math.floor(Math.random()*(max-min))+min
       }
       
       function rainEle(store1=storeA, store2=storeB , lengFunc=randomNum){
           let leng = lengFunc(maxLettersSingleRain);
           let res='';
       
           while(leng>-1){
               const whichStore = lengFunc(100);
               if(whichStore<lettersFromStroeA && store2.length>0) res+=store2[randomNum(store2.length)]
               else if(store1.length>0) res+=store1[randomNum(store1.length)]
               leng--
           }
       
           return res;
       }
       // console.log(rainEle())
       function heavyRain(water=rainEle,num=howHeavy){
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
    },[storeA,storeB,lettersFromStroeA,maxLettersSingleRain,howHeavy])
    
    return ( <Store.Provider value={{
        rain,sideMenus,setSideMenus
        ,storeA, setStoreA
        ,storeB, setStoreB
        ,maxLettersSingleRain, setMaxLettersSingleRain
        ,lettersFromStroeA,setLettersFromStroeA
        ,howHeavy, setHowHeavy
        ,ani, dispatch
        ,currentPage, setCurrentPage
        ,submit, setSubmit
    }}>{children}</Store.Provider> )
}




