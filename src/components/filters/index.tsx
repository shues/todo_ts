import React, { Dispatch, SetStateAction } from "react";
// import { Filter } from "../../types";


interface filtersProps {
    filter:string,
    setFilter: (s:string)=>void
}

function Filters({filter, setFilter}:filtersProps){
    const values:string[] = ['showAll','showComplite', 'showActive'];
    const options:JSX.Element[] = values.map((item,i)=><option key={i}>{item}</option>)
    return(<div className="filters">
        <select defaultValue={filter} onChange={(e)=>{setFilter(e.target.value)}}>
            {options}
        </select>
    </div>)
}

export default Filters