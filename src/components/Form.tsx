import { useState } from "react"

export default function Form () {
    const [name, setName] = useState('Henrique')

    return <div>
        <input type="text" placeholder="Nome" value={name}
            onChange={e => setName(e.target.value)}>
            
        </input>
        <div>
            { name }
        </div>
    </div>
}