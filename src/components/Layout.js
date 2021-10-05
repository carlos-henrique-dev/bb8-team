import * as React from "react"



// markup
const Layout = ({children}) => {
	return ( 
		<main>
			<title> Home Page </title> 
			<main>
			{children}
			</main>
		</main>
	)
}

export default Layout
