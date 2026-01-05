import type { navListType } from "../type/Type"


const ListItem = ({key,item}:{key:number,item:navListType}) => {
    return (
        <li key={key}>{item.title}</li>
    )
}

export default ListItem
