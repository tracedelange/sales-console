import React from 'react'

const ListItem = ({entry, id}) => {
    // console.log(entry)
    return (
        <tr>
            <td>{"asdf"}</td>
            <td>{entry.JJname}</td>
            <td>{entry.city}</td>
            <td>{entry.premiseType}</td>
        </tr>
    )
}

export default ListItem
