import React, { useState } from "react"

export default function Form () {
    const [form, setForm] = useState({
        name: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
    })
    
    function handleSubmit (e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        console.log(form)
    }

    function handleInputChange (e: React.ChangeEvent<HTMLInputElement>) {
        setForm({...form, [e.target.name]: e.target.value})
    }

    return <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Nome" value={form.name}
            onChange={handleInputChange}>
        </input>
        <input type="text" name="lastName" placeholder="Sobrenome" value={form.lastName}
            onChange={handleInputChange}>
        </input>
        <input type="email" name="email" placeholder="Email" value={form.email}
            onChange={handleInputChange}>
        </input>
        <input type="password" name="password" placeholder="Senha" value={form.password}
            onChange={handleInputChange}>
        </input>
        <input type="password" name="confirmPassword" placeholder="Confirmar senha" value={form.confirmPassword}
            onChange={handleInputChange}>
        </input>

        <button type="submit">
            Enviar formulário
        </button>
    </form>
}