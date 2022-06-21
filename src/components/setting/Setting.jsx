import React, { useContext } from 'react'
import Store from '../../store/store'
import {FiPlus,FiMinus} from 'react-icons/fi'
import "./setting.scss"

export default function Setting() {
    const {storeA , storeB, setStoreA, setStoreB
        ,maxLettersSingleRain, setMaxLettersSingleRain
        ,lettersFromStroeA,setLettersFromStroeA
        ,howHeavy, setHowHeavy
        ,ani, dispatch
      } = useContext(Store)
  return (
    <div className='setting'>  
     
    

    <div className="left">
      <h2>Letters-HTML</h2>
      <p>Letter Store A</p>
      <textarea  value={storeA} onChange={e=>setStoreA(e.target.value)}></textarea>
      
      <p>Letter Store B</p>
      <textarea  value={storeB} onChange={e=>setStoreB(e.target.value)}></textarea>
      
      <p>max Letter Length </p>
      <input type="number" value={maxLettersSingleRain} onChange={e=>setMaxLettersSingleRain(e.target.value)} min="1" max="300"/>

      <p>Percentage from Letter Store B </p>
      <input type="number"  value={lettersFromStroeA} onChange={e=>setLettersFromStroeA(e.target.value)} min="1" max="100"/>

      <p>How Heavy is it Raining</p>
      <input type="number"  value={howHeavy} onChange={e=>setHowHeavy(e.target.value)} min="1" max="100"/>
    </div>

    <hr/>
    <div className="right">
      <h2>Animation-CSS</h2>
      <div className="duration flex">
        <div>
          <p>Duration basic</p>
           <FiPlus className='icon' onClick={e=>dispatch({type:"DBPLUS"})}/>   
          
           <input type="number"  value={ani.durationBasic} max="9999" min="0" onChange={e=>dispatch({
            type:"DBCHANGE",
            dBChange:e.target.value
          })}/> 
          <FiMinus className='icon' onClick={e=>dispatch({type:"DBMINUS"})} />
        </div>

        <div>
          <p>Duration random</p>
          <FiPlus className='icon' onClick={e=>dispatch({type:"DRPLUS"})}/>
          <input type="number" name="durationRandom" id="" max="9999" min="0" value={ani.durationRandom} onChange={e=>dispatch({
            type:"DRCHANGE",
            dRChange:e.target.value
          })}/>
          <FiMinus className='icon' onClick={e=>dispatch({type:"DRMINUS"})}/>
          </div>
      </div>


      <div className="delay flex">
        <div>
          <p>Delay basic</p>
           <FiPlus className='icon' onClick={e=>dispatch({type:"DEBPLUS"})}/>   
           <span>{ani.delayBasic}</span>
          <FiMinus className='icon' onClick={e=>dispatch({type:"DEBMINUS"})} />
        </div>

        <div>
          <p>Delay random</p>
          <FiPlus className='icon' onClick={e=>dispatch({type:"DERPLUS"})}/>
          <span>{ani.delayRandom}</span>
          <FiMinus className='icon' onClick={e=>dispatch({type:"DERMINUS"})}/>
          </div>
      </div>


      <div className="opacity flex">
        <div>
          <p>Opacity basic</p>
           <FiPlus className='icon' onClick={e=>dispatch({type:"OBPLUS"})}/>   
           <span>{ani.opacityBasic}</span>
          <FiMinus className='icon' onClick={e=>dispatch({type:"OBMINUS"})} />
        </div>

        <div>
          <p>Opacity random</p>
          <FiPlus className='icon' onClick={e=>dispatch({type:"ORPLUS"})}/>
          <span>{ani.opacityRandom}</span>
          <FiMinus className='icon' onClick={e=>dispatch({type:"ORMINUS"})}/>
          </div>
      </div>


      <div className="linea">

         <input type="checkbox" checked={ani.linear} id="linea"
         onChange={e=>dispatch({type:"LINEA"})}/>
         <label htmlFor="linea">lineargradient for text</label>
      
    </div>

    </div>            
  </div>
  )
}
