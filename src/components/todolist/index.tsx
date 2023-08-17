import React from "react";
import './index.scss';
import ListItem from "../listItem";
import Filters from "../filters";
// import { Filter } from "../../types";

type Todo = {
    id: number,
    name: string,
    complite: boolean,
}


function TodoList() {
    const [filter, setFilter] = React.useState<string>('showAll');

    const todos: Todo[] = [
        { id: 1, name: 'one', complite: false },
        { id: 2, name: 'two', complite: false },
        { id: 3, name: 'three', complite: false },
        { id: 4, name: 'four', complite: false }
    ]

    function updateFilter(val:string){
        console.log(val);
        setFilter(val)
    }

    const items = todos.map(el => <ListItem key={el.id} item={el} filter={filter} />)

    return (
        <div className="todo-list">
            <Filters filter={filter} setFilter={updateFilter} />
            {items}
        </div>
    )
}

export default TodoList;