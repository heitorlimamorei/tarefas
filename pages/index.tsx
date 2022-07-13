import Lista from "../components/lista/Lista";
import mock from "../data/mock";
import { useState } from "react";
import Cabecalho from "../components/template/Cabecalho";
import Conteudo from "../components/template/Conteudo";
import Formulario from "../components/form/Formulario";
import Tarefa from "../src/model/Tarefa";

export default function Home() {
  const [tarefas, setTarefas] = useState(mock)
  function novaTarefaCriada(novaTarefa:Tarefa){
    setTarefas(tarefas.adicionarTarefa(novaTarefa))
  }
  return (
    <div className={`flex flex-col  h-screen bg-gray-300
    `}>
      <Cabecalho>
        <Formulario novaTarefaCriada={novaTarefaCriada}/>
      </Cabecalho>
      <Conteudo>
      <Lista tarefas={tarefas} mudou={(novaLista)=> {
        setTarefas(novaLista)
      }}/>
      </Conteudo>
    </div>
  )
}
