import ListaTarefas from "../../src/model/ListaTarefas"
import ListaBotao from "./ListaBotao";

interface RodapeProps {
    tarefas: ListaTarefas;
    mudou: (tarefa:ListaTarefas) => void;
}
export default function ListaRodape(props:RodapeProps){
    const { tarefas, mudou} = props
    function renderizarQtdItens(){
        return (
            <>
            <span className={`text-gray-300 hidden lg:inline`}>
                {tarefas.quantidade}
                {tarefas.quantidade === 0 
                ? ' Nenhuma tarefa encontrada' 
                  : tarefas.quantidade === 1
                    ? ' Tarefa encontrada' 
                    : ' Tarefas encontradas'
                }
            </span>
            <span className={`flex-1 hidden lg:inline`}></span>           
            </>
        )
    }
    function renderizarFiltros(){
        return (
            <>
            <ListaBotao 
            selecionado={tarefas.exibindoTodas()}
            onClick={() => mudou(tarefas.removerFiltro())}
            className={`hidden md:inline`}
            >
                Todas
            </ListaBotao>
            <ListaBotao 
            selecionado={tarefas.exibindoAtivas()}
            onClick={() => mudou(tarefas.filtrarAtivas())}
            className={`mx-4`}
            >
                Ativas
            </ListaBotao> 
            <ListaBotao 
            selecionado={tarefas.exibindoConcluidas()}
            onClick={() => mudou(tarefas.filtrarConcluidas())}
            
            >
                Concluidas
            </ListaBotao> 
            </>
        )
    }
    function renderizarExcluirItens(){
        return (
            <>
            <span className={`flex-grow`}></span>
            <ListaBotao 
            onClick={() => mudou(tarefas.excluirConcluidas())}
            >
                Excluir <span className={`hidden md:inline`}>concluidas</span>
            </ListaBotao>
            </>
        )
    }
    return (
        <li className={`flex p-5`}>
            {renderizarQtdItens()}

            {renderizarFiltros()}

            {renderizarExcluirItens()}
        </li>
    )
}