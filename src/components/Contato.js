import React from 'react'
import styles from './Contato.module.css';
import foto from '../img/contato.jpg'
import Head from './Head';

const Contato = () => {
    return (

        <section className={styles.contato + " animeLeft"}>
            <Head title="Ranek | Contato " description="Entre em contato"></Head>
            <img src={foto} alt="maquina de escrever"/>
            <div>
                <h1>Entre em contato.</h1>
                <ul className={styles.dados}>
                    <li>vinicompif@gmail.com</li>
                    <li>+55 33 998012671</li>
                    <li>Rua padre francisco de carvalho</li>
                </ul>
            </div>
            
        </section>
    )
}


export default Contato
