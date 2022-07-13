import { useState } from "react"
import Tarefa from "../../src/model/Tarefa"

interface FormularioProps {
    novaTarefaCriada: (tarefa: Tarefa) => void
}
export default function Formulario(props:FormularioProps){
    const [descricao, setDescricao] = useState("")
    function criarNovaTarefa(){
        if(descricao?.trim().length > 0){
            const gerarId = () => Math.random()
            const novaTarefa = Tarefa.criarAtiva(gerarId(), descricao)
            props.novaTarefaCriada(novaTarefa)
            setDescricao('')
        }
    }
    return(
        <div className={`flex flex-1 justify-center`}>
            <input type="text" 
            placeholder="Crie sua próxima tarefa"
            value={descricao} 
            onChange={e => setDescricao(e.target.value)}
            onKeyDown={e => e.key === 'Enter' ? criarNovaTarefa() : false}
            className={`
            border-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-600
            w-1/2 py-2 px-3 rounded-lg border-2
            `}
            />
            <button onClick={criarNovaTarefa} className={`
            ml-3 px-5 py-4 rounded-lg
            bg-purple-600 
            text-white text-xl 
            focus:outline-none
            `}>
                +
            </button>
        </div>
    )
}