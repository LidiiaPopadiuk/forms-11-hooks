// import { Component } from "react";
import { nanoid } from "nanoid";

export const TodoList = ({initialData, onTarget, initialFilter, deleteData}) => {

    const deleteDataHear = (id) => {
        // const infoToDelete = e.target.parentElement
        deleteData(id)

        // const deleteInfoAtAll = deleteInfo.filter(item => {
        //     return 
        // }) 
    }
    const infoFromApp = ({ todos }) => {
        const data = todos

        return data.map(dt => {
            return (
                <li id={dt.id}>
                    <input type="checkbox" checked={dt.completed} onChange={() => { onTarget(dt.id) }} />
                    <span style={{ textDecoration: dt.completed ? 'line-through' : 'none' }} key={dt.id} >{dt.text}</span>
                    <button onClick={() => { deleteDataHear(dt.id) }}>Delete</button>
                </li>
            )
        })
    }

    const filterValue = initialFilter.toUpperCase()
    const filterContacts = initialData.filter((todo) => {
        return todo.text.toUpperCase().includes(filterValue)
    })
    return (
        <ul>
            {filterContacts.length === 0 ? (
                <p>Нічого не знайдено...</p>
            ) : (
                filterContacts.map(contact => {
                    return <li id={contact.id}>
                        <input id={nanoid()} type="checkbox" checked={contact.completed} onChange={() => { onTarget(contact.id) }} />
                        <span style={{ textDecoration: contact.completed ? 'line-through' : 'none' }} key={contact.id} >{contact.text}</span>
                        <button onClick={() => { deleteData(contact.id) }}>Delete</button>
                    </li>
                })
            )}

        </ul>
    )
}