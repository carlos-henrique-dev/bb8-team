import * as React from "react"
import Layout from "../components/Layout"
import { Link } from "gatsby"

// markup
const IndexPage = () => {
  return (
    <Layout>
		<h1>
			hello
		</h1>
		<Link to="/login">Login</Link>
		<Link to="/register">registro</Link>

	</Layout>
  )
}

export default IndexPage
