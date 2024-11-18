import React, { useState} from 'react'
import './Dropdown.css'
	
function DropdownList() { 
 const [selectedValue, setSelectedValue] = useState('Option 1')
const handleChange = (event) => {
 setSelectedValue(event.target.value);
 }
return (
 <select value={selectedValue} onChange={handleChange}>
 <option value="Option 1">Option 1</option>
 <option value="Option 2">Option 2</option>
 <option value="Option 3">Option 3</option>
 </select>
 )
}
export default DropdownList