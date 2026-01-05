import type { navListType } from "../type/Type"


const ListItem = ({key,item}:{key:null,item:navListType}) => {
    return (
        <li key={key}>{item.title}</li>
    )
}

export default ListItem
