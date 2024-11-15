import React from 'react'
import './App.css'


const Title = ({style}
	)=> {

return (
	<div>
		<h1 className="title" style={style}> Biochemistry Researcher
		</h1>
		<h2 className="email-me" style={style}> Email Me
		</h2>
	</div>
	)
}

export default Title