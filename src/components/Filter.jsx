
const Filter = ({filter, setFilter, setSort, task, setTask}) => {
    return (
        <div className="filter">
            <h2>Filtrar:</h2>
            <div className="filter-options">
                <div>
                    <p>Status:</p>
                    <select
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}>
                        <option value="All">Todas</option>
                        <option value="Completed">Completas</option>
                        <option value="Incomplete">Incompletas</option>
                    </select>
                </div>
                <div>
                    <p>Tarefa:</p>
                    <select 
                    value={task}
                    onChange={(e) => setTask(e.target.value)}>
                        <option value="All">Todas</option>
                        <option value="Work">Trabalho</option>
                        <option value="Personal">Pessoal</option>
                        <option value="Studies">Estudos</option>
                    </select>
                </div>
                <div>
                    <p>Ordem alfabetica:</p>
                    <button 
                    onClick={(e) => setSort("Asc")}
                    >Asc</button>
                    <button 
                    onClick={(e) => setSort("Desc")}
                    >Desc</button>
                </div>
            </div>

        </div>
    )
}

export default Filter