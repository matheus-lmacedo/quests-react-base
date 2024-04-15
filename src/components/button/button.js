function showLabel(label) {
alert(`A label deste botão é "${label}"`)
}

const Button = ({label}) => {
 return <button onClick={()=> showLabel(label)}>Mostrar label</button>
}

export default Button