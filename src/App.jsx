import { useState } from "react";
import "./App.css"
import Todo from "./components/Todo";
import TodoForm from "./components/TodoForm";
import Box from "./components/Box";
import StartTime from "./components/Time";


function App() {
    const [todos, setTodos] = useState([
        {
            id: 1,
            text: "Criar funcionalidade x no sistema",
            category: "Trabalho",
            isCompleted: false,
        },
        {
            id: 2,
            text: "Ir para a academia",
            category: "Pessoal",
            isCompleted: false,
        },
        {
            id: 3,
            text: "Estudos React",
            category: "Estudos",
            isCompleted: false,
        },

    ]);

    const [search, setSearch] = useState("");

    const [filter, setFilter] = useState("All");
    const [sort, setSort] = useState("Asc");
    const [task, setTask] = useState("All");
    const [caixa, setCaixa] = useState(true);


    const box = () => {
        const newCaixa = ((caixa) => caixa === true ? caixa = false : caixa = true)
        setCaixa(newCaixa);
    }

    const addTodo = (text, category) => {

        const newTodos = [
            ...todos,
            {
                id: Math.floor(Math.random() * 1000),
                text,
                category,
                isCompleted: false,
            },
        ]
        setTodos(newTodos);
    }

    const removeTodo = (id) => {
        const newTodos = [...todos]
        const filteredTodos = newTodos.filter(todo =>
            todo.id !== id ? todo : null
        );
        setTodos(filteredTodos);
    }

    const completeTodo = (id) => {
        const newTodos = [...todos]
        newTodos.map((todo) => todo.id === id ? todo.isCompleted = !todo.isCompleted : todo);
        setTodos(newTodos);
    }

    return (
        <div><StartTime/>
        <div className="app">
            <h1>Lista de Tarefas</h1>
            <button
                style={{marginBottom: caixa ? "0px" : "20px"}}           
                onClick={() => box()}>Caixa de Pesquisa</button>
            <div className="box" style={{display: caixa ? "block" : "none"}}>
                <Box
                    search={search}
                    setSearch={setSearch}
                    filter={filter}
                    setFilter={setFilter}
                    sort={sort}
                    setSort={setSort}
                    task={task}
                    setTask={setTask}
                />
            </div>
            <div className="todo-list">
                <h2>Tarefas</h2>
                {todos
                    .sort((a, b) =>
                        sort === "Asc"
                            ? a.text.localeCompare(b.text)
                            : b.text.localeCompare(a.text)
                    )
                    .filter((todo) =>
                        filter === "All"
                            ? true
                            : filter === "Completed"
                                ? todo.isCompleted
                                : !todo.isCompleted
                    )
                    .filter((todo) =>
                        task === "All"
                            ? true
                            : task === "Work"
                                ? todo.category === "Trabalho"
                                : task === "Personal"
                                    ? todo.category === "Pessoal"
                                    : todo.category === "Estudos"
                    )
                    .filter((todo) =>
                        todo.text.toLowerCase().includes(search.toLowerCase())
                    )
                    .map((todo) => (
                        <Todo
                            key={todo.id}
                            todo={todo}
                            removeTodo={removeTodo}
                            completeTodo={completeTodo}
                        />
                    ))}
            </div>
            <div>
                <TodoForm addTodo={addTodo}></TodoForm>
            </div>
        </div>
        </div>
    )
}

export default App;