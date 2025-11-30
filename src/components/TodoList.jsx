import { Component } from "react";
import { nanoid } from "nanoid";

export class TodoList extends Component {

    deleteData = (id) => {
        // const infoToDelete = e.target.parentElement
        this.props.deleteData(id)

        // const deleteInfoAtAll = deleteInfo.filter(item => {
        //     return 
        // }) 
    }
    infoFromApp = () => {
        const data = this.props.initialData.todos

        return data.map(dt => {
            return (
                <li id={dt.id}>
                    <input type="checkbox" checked={dt.completed} onChange={() => { this.props.onTarget(dt.id) }} />
                    <span style={{ textDecoration: dt.completed ? 'line-through' : 'none' }} key={dt.id} >{dt.text}</span>
                    <button onClick={() => { this.deleteData(dt.id) }}>Delete</button>
                </li>
            )
        })
    }

    render() {
        const { todos, filter } = this.props.initialData
        const filterValue = filter.toUpperCase()
        const filterContacts = todos.filter((todo) => {
            return todo.text.toUpperCase().includes(filterValue)
        })
        return (
            <ul>
                {filterContacts.length === 0 ? (
                    <p>Нічого не знайдено...</p>
                ) : (
                    filterContacts.map(contact => {
                        return <li id={contact.id}>
                            <input id={nanoid()} type="checkbox" checked={contact.completed} onChange={() => { this.props.onTarget(contact.id) }} />
                            <span style={{ textDecoration: contact.completed ? 'line-through' : 'none' }} key={contact.id} >{contact.text}</span>
                            <button onClick={() => { this.deleteData(contact.id) }}>Delete</button>
                        </li>
                    })
                )}

            </ul>
        )
    }
}