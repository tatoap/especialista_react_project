export default function HelloWorld() {
    const name = 'Renato'

    return <div>
        <h1>Hello, { name === 'Renato' ? 'Henrique' : name }!!</h1>
    </div>
}