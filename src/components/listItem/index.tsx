import React from "react";
import './index.scss';

type listItemProp = {
    item: {
        name: string,
        id: number,
        complite: boolean
    }
    filter: string
}


function ListItem({ item, filter }: listItemProp) {
    const [complite, setComplite] = React.useState(item.complite)
    if ((filter === 'showAll') || (filter === 'showComplite' && complite) || (filter === 'showActive' && !complite)) {
        return (
            <div className="list-item" onClick={() => setComplite(!complite)}>{`${item.name} ${complite}`}</div>
        )
    }else {
        return <></>
    }
}

export default ListItem;