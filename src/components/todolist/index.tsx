import React from "react";
import './index.scss';
import ListItem from "../listItem";
import Filters from "../filters";
import AddForm from "../addForm";

type Todo = {
    id: number,
    name: string,
    complite: boolean,
}

function TodoList() {
    const [filter, setFilter] = React.useState<string>('showAll');

    const [todos, setTodos] = React.useState<Todo[]>([]);

    function updateFilter(val: string) {
        setFilter(val)
    }

    function newTask(s: string) {
        const todo: Todo = { id: todos.length, name: s, complite: false };
        setTodos([...todos, todo]);

    }

    const items = todos.map(el => <ListItem key={el.id} item={el} filter={filter} />)

    return (
        <div className="todo-list">
            <Filters filter={filter} setFilter={updateFilter} />
            {items}
            <AddForm newTask={newTask} />
        </div>
    )
}

export default TodoList;