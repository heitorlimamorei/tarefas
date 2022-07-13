interface ListaBotaProps{
    onClick: (evento:any) => void;
    className?: string;
    selecionado?: boolean;
    children: any;
}
export default function ListaBotao(props:ListaBotaProps){
    const borda = props.selecionado ? 'boder-b-4 border-purple-400' : ''
    return <button onClick={props.onClick} className={`
    text-gray-500 font-semibold hover:text-black 
    focus:outline-none ${borda} ${props.className}
    `}>
        {props.children}
    </button>
}