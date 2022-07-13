import ListaTarefas from "../../src/model/ListaTarefas";
import ListaItem from "./ListaItem";
import ListaRodape from './ListaRodape'

interface ListaProps {
  tarefas: ListaTarefas;
  mudou: (tarefas: ListaTarefas) => void;
}
export default function Lista(props: ListaProps) {
  const { tarefas } = props;
  function renderizarTarefas() {
    return tarefas.itens.map((tarefa) => {
      return (
        <ListaItem
          valor={tarefa.descricao}
          concluido={tarefa.concluida}
          alterarStatus={() => {
            const tarefaAlterada = tarefa.alterarStatus();
            const novaLista = tarefas.modificarTarefa(tarefaAlterada);
            props.mudou(novaLista);
          }}
          key={tarefa.id}
        />
      );
    });
  }
  return (
    <div
      className={`
        flex w-3/5 items-start
        relative
        `}
    >
      <ul
        className={`
        absolute 
        -top-14
        w-full list-none
        bg-white shadow-lg rounded-lg
        `}
      >
        {renderizarTarefas()}
        <ListaRodape tarefas={props.tarefas} mudou={props.mudou} />
      </ul>
    </div>
  );
}
