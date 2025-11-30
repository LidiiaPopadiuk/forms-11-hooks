import { Component } from "react";
import styled from "styled-components";

const StyledForm = styled.form`
padding: 5px;
width: 400px;
border: 1px solid #25fa25ad;
margin-top: 10px;
display: flex;
justify-content: space-between;
`

export class TodoEditor extends Component {

    state = {
        textValue: '',
    }

    createTodo = () => {
        const thisInput = document.querySelector('#input')
        const thisInputValue = thisInput.value

          if (thisInputValue === '') {
            alert('Введіть завдання...');
            return; 
        }

        this.setState({
            textValue: thisInputValue
        })
        this.props.addTodo(thisInputValue)
        thisInput.value = ""
    }

    render() {
        return (
            <StyledForm>
                <input id="input" type="text" placeholder="Нове завдання..." />
                <button type="button" id="btn" onClick={this.createTodo}>Create</button>
            </StyledForm>
        )
    }
}