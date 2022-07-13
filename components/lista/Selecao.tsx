interface SelecaoProps {
    valor: boolean
}

export default function Selecao(props:SelecaoProps){
    const gradient = props.valor ? 'bg-gradient-to-br from-blue-400 to-purple-500' : ''
    return (
    <div className={`
    h-7 w-7 
    flex
    justify-center items-center
    rounded-full cursor-pointer border border-gray-400
    ${gradient}
    `}>
        {props.valor ? 'X' : ''}
    </div>)
}