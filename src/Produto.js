import React from 'react'
import { useParams, useLocation, Outlet } from 'react-router'
import { NavLink } from 'react-router-dom';

const Produto = () => {

    const params = useParams();
    const location = useLocation();
    const search = new URLSearchParams(location.search);

    


    return (
        <div>
            <h1>Produto: {params.id}</h1>

            <nav>
                <NavLink to="">Descriacao</NavLink>
                <NavLink to="avaliacao">Avaliacao</NavLink>
                <NavLink to="customizado">Customizado</NavLink>
            </nav>

            <Outlet></Outlet>
            
            
        </div>
    )
}

export default Produto
