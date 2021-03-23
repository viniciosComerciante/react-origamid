import React from 'react'
import Button from './Button'
import Input from './Input'

const Form = () => {
    return (
        <form action="">
            <label htmlFor="nome">Nome</label>
            <Input name="nome" type="text"></Input>
            <label htmlFor="email">Email</label>
            <Input name="email" type="email"></Input>
            <Button></Button>
        </form>
    )
}

export default Form
