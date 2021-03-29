import React from 'react'
import { NavLink } from 'react-router-dom'
import Head from './Head'

const Home = () => {
    return (
        <div>
            <Head title="Home"></Head>
            <h1>Home</h1>
            <p>Essa é a home</p>
            <NavLink to="produto/notebook">Notebook</NavLink>
            <br></br>
            <NavLink to="produto/smartphone">Smartphone</NavLink>
            <br></br>
        </div>
    )
}

export default Home
