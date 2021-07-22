import './Dropdown.css';
import React from 'react';
import { HiOutlineChevronDown } from "react-icons/hi";

// const fonts = ['Arial', 'Helvetica', 'Times', 'Palatino', 'Times New Roman', 'Arial Black', 'Gadget', 'Comic Sans MS', 'cursive', 'Impact', 'Charcoal', 'Tahoma', 'Geneva', 'Verdana'];
function Dropdown() {

 
  
    return (
        <div className="Dropdown DropdownSM">
            DNI <HiOutlineChevronDown className=" {HiOutlineChevronDown} " color={"#EF3340"} size={20} />
        </div>
    )
}

export default Dropdown;

