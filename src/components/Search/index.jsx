import React from "react";
import {useContext} from "react";
import second from './Search.module.scss'
import {SearchContext} from "../../App";





const Search = () => {
  const {valueInput,setValueInput } = useContext(SearchContext)


  const onChangeInput = (event) => {
    setValueInput(event.target.value)
  }
  return(
      <div className={second.root}>
        <svg className={second.icon} enableBackground="new 0 0 32 32" id="Editable-line" version="1.1" viewBox="0 0 32 32"  xmlns="http://www.w3.org/2000/svg"><circle cx="14" cy="14" fill="none" id="XMLID_42_" r="9" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2"/><line fill="none" id="XMLID_44_" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2" x1="27" x2="20.366" y1="27" y2="20.366"/></svg>
        <input value={valueInput}
               onChange={onChangeInput}
               className={second.input}
               placeholder="Search..."/>
      </div>
  )
}
export default Search