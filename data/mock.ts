import ListaTarefas from "../src/model/ListaTarefas";
import Tarefa from "../src/model/Tarefa";
import TipoFiltro from "../src/model/TipoFiltro";
const tarefasIniciais: Tarefa[] = [
]
export default new ListaTarefas(tarefasIniciais, TipoFiltro.NENHUM )