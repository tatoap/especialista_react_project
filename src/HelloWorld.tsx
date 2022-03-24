export default function HelloWorld() {
    const name = 'Renato'
    const title = <h1>Hello, {name}!</h1>

    if (name === 'Renato') {
        return <div>
            <h1 style={{ background: 'red' }}>{ name }</h1>
        </div>
    }

    return <div>
        <h1>Hello, { name === 'Renato' ? 'Henrique' : name }!!</h1>
    </div>
}