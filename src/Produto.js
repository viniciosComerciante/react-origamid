import React from 'react'
import { useParams, useLocation } from 'react-router'

const Produto = () => {

    const params = useParams();
    const location = useLocation();
    const search = new URLSearchParams(location.search);

    


    return (
        <div>
            <h1>Produto</h1>
        </div>
    )
}

export default Produto
