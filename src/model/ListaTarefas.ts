import Tarefa from "./Tarefa"
import TipoFiltro from "./TipoFiltro"

class ListaTarefas {
    #todas: Tarefa[]
    #filtroUtilizado: TipoFiltro
    constructor(todas: Tarefa[], filtroUtilizado = TipoFiltro.NENHUM) {
        this.#todas = todas;
        this.#filtroUtilizado = filtroUtilizado ?? TipoFiltro.NENHUM
    }
    get itens(){
        return this.aplicarFiltroEm(this.#todas)
    }
    get quantidade(){
        return this.itens.length
    }
    get filtroUtilizado(){
        return this.#filtroUtilizado
    }
    adicionarTarefa(novaTarefa: Tarefa): ListaTarefas{
        let tarefas = [...this.#todas]
        tarefas.push(novaTarefa)
        return new ListaTarefas(tarefas, this.filtroUtilizado)
    }
    modificarTarefa(tarefaModificada: Tarefa): ListaTarefas {
        const todas = this.#todas.map(tarefa => {
            return tarefa.id === tarefaModificada.id ? tarefaModificada : tarefa
        })
        return new ListaTarefas(todas, this.filtroUtilizado)
    }
    filtrarAtivas(){
        if(!this.exibindoAtivas()){
            return new ListaTarefas(this.#todas, TipoFiltro.ATIVAS)
        } else {
            return this
        }
    }
    excluirConcluidas(){
        const tarefasAtivas = this.#todas.filter(tarefa=> tarefa.ativa)
        return new ListaTarefas(tarefasAtivas, TipoFiltro.NENHUM)
    }
    filtrarConcluidas(){
        if(!this.exibindoConcluidas()){
            return new ListaTarefas(this.#todas, TipoFiltro.CONCLUIDAS)
        } else {
            return this
        }
    }
    removerFiltro(){
        if(!this.exibindoTodas()){
            return new ListaTarefas(this.#todas, TipoFiltro.NENHUM)
        } else {
            return this
        }
    }
    exibindoTodas():boolean{
        return this.#filtroUtilizado === TipoFiltro.NENHUM
    }
    exibindoAtivas():boolean{
        return this.#filtroUtilizado === TipoFiltro.ATIVAS
    }
    exibindoConcluidas():boolean{
        return this.#filtroUtilizado === TipoFiltro.CONCLUIDAS
    }
    private aplicarFiltroEm(tarefas:Tarefa[]):Tarefa[]{
        if(this.exibindoAtivas()){
            return this.aplicandoFiltroAtivas(tarefas) 
        } else if(this.exibindoConcluidas()){
            return this.aplicandoFiltroConcluidas(tarefas)
        } else {
            return [...tarefas]
        }
    }

    private aplicandoFiltroAtivas(tarefas: Tarefa[]):Tarefa[]{
        return tarefas.filter(tarefa => tarefa.ativa)
    }
    private aplicandoFiltroConcluidas(tarefas: Tarefa[]):Tarefa[]{
        return tarefas.filter(tarefa => tarefa.concluida)
    }
}
export default ListaTarefas