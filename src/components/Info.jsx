import { Component } from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
border: 1px solid #25fa25ad;
width: 410px;
margin-top: 10px;
`

export class Info extends Component {

    render() {
        const {todos} = this.props.infoData
        // const y = 0
        // const CompletedInfo = todos.map(i => {
        //     return i.completed ? y + 1 : y
        // })
        const completedItems = todos.filter(todo => todo.completed).length
        return (
            <StyledDiv>
                <p>Всього завдань: {todos.length}</p>
                <p>Виконано: {completedItems}</p>
            </StyledDiv>
        )
    }
}