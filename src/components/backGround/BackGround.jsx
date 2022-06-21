import { useContext } from 'react'
import Store from '../../store/store'
import './backGround.css'



export default function BackGround() {
   const {rain,ani,setSideMenus} = useContext(Store)
   
  const showSideMenus = e => setSideMenus(pre=>!pre)
  return (
    <>
    <div className='backGround'>
       {rain && rain.map((x,i)=> (
        <p key={i} className={ani.linear && "linear"} style={
          ani.rain ? {
            animation:`fall ${(ani.randomNum(ani.durationRandom)+ani.durationBasic) + 'ms'} ${(ani.randomNum(ani.delayRandom)+ ani.delayBasic) + 'ms'} infinite`, opacity: `${(ani.randomNum(ani.opacityRandom) + ani.opacityBasic ) / 100 }`
          } : {top:0}
        }>{x}</p>
       ))}
    </div>

    <div className='pingFeng'  onClick={showSideMenus}>
      
    </div>
    </>

  )
}
