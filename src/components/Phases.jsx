import React from 'react'
import Initiation from '../components/phases/Initiation'
import { AiFillProject } from 'react-icons/ai';
import { SlArrowDown } from 'react-icons/sl';
import { SlArrowUp } from 'react-icons/sl';
import { BsFillFileEarmarkArrowUpFill } from 'react-icons/bs';
import { SlSizeFullscreen } from 'react-icons/sl';
import { BsPerson } from 'react-icons/bs';
import { FcSearch } from 'react-icons/fc';
import { FcSettings } from 'react-icons/fc';
import { CiFilter } from 'react-icons/ci';
import { BiSort } from 'react-icons/bi';
import { useState } from 'react';
import Setting from './phases/Setting';

const Phases = () => {
  const [user,setUser]=useState(false)
  const [userr,setUserr]=useState(false)
  const handlePhase=()=>{
    setUser(!user)
  }
  const handleSet=()=>{
    setUserr(!userr)
  }
  const Item=()=>{
    alert("waiting...")
  }
  const Search=()=>{
    alert("Searching...")
  }
  const Filter=()=>{
    alert("filtering...")
  }
  const Sort=()=>{
    alert("Sorting...")
  }
  return (
    <div className='phase-main'>
      <span className='span' onClick={handlePhase}><AiFillProject />Projects by phases / 5___{user ? <SlArrowDown /> : <SlArrowUp /> } </span>
      <div className="list-head">
      <li onClick={Item} className='new'>New Item <BsFillFileEarmarkArrowUpFill /></li>
      <li onClick={Search}><FcSearch/>Search</li>
      <li><BsPerson />Person</li>
      <li onClick={Filter}><CiFilter />Filter</li>
      <li onClick={Sort}><BiSort />Sort</li>
      <li><SlSizeFullscreen /> Screen</li>
      <li onClick={handleSet} className='set'><FcSettings  />Setting</li>
      </div>
      {user ? <div className='phase'>
        <div>
          <label >Initiation</label>
          <Initiation />
       </div>
       <div>
          <label >Planning</label>
          <Initiation />
       </div>
       <div>
          <label >Launch/Execution</label>
          <Initiation />
       </div>
       <div>
          <label >Monitoring/Control</label>
          <Initiation />
       </div>
       <div>
          <label >Closure</label>
          <Initiation />
       </div>
        {/* <div><Planning /> </div>
        <div><Launch /> </div>
        <div> <Control /> </div>
        <div> <Closure /></div> */}
      </div> : " "}
      
     {
        userr ? <Setting /> : ""
     }
    </div>
  )
}

export default Phases
