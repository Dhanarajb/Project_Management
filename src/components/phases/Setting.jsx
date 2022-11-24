import React from 'react'
import { GrInProgress } from 'react-icons/gr';
import { MdOutlineDone } from 'react-icons/md';
import { FcTodoList } from 'react-icons/fc';
import { BsDisplay } from 'react-icons/bs';
import { VscSplitVertical } from 'react-icons/vsc';
import { CiDark } from 'react-icons/ci';
import { FcManager } from 'react-icons/fc';
const Setting = () => {
  return (
    <div className='main-set'>
        <h4>View Settings</h4>
        <div className="select">
        <label >Kanban Column</label>
        <select className='main-se' >
            <option value="stage">stage</option>
            <option value="inprocess"><GrInProgress/>Inprocess</option>
            <option value="completed"><MdOutlineDone />Completed</option>
            <option value="to-do"><FcTodoList/>Todo</option>
        </select>
        <label >Assignee Column</label>
        <select className='main-se'>
            <option value="select"><FcManager />select</option>
            <option value="project-manager">Project Manager</option>
            <option value="lead">Team Lead</option>
            <option value="sr">Sr.Devs</option>
            <option value="jr">Jr.Devs</option>
        </select>

        </div>
        <div className='disp'>
            <h4><BsDisplay />Display Settings</h4>
            <li><VscSplitVertical/>Split View</li>
            <li><CiDark/>Dark Mode</li>
        </div>
    </div>
  )
}
export default Setting