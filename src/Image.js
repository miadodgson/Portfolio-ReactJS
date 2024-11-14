import React from 'react';
import img from './IMG_6636.jpg'
import './Image.css'

function Image() {

	
console. log(Image);

return (
<div className="image">
	<table className="left-sidebar-tables">
        <tbody>
          <tr>
            <td colSpan="2" className="image">
		<img src={img} alt="image" height={250}/>
	</td>
	</tr>
	</tbody>
	</table>
	</div>
	)
}

	
export default Image