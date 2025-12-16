import { useState, useEffect } from "react";
import styled from "styled-components";

const StyledForm = styled.form`
padding: 5px;
width: 400px;
border: 1px solid #25fa25ad;
margin-top: 10px;
display: flex;
justify-content: space-between;
`

export const TodoEditor = ({addTodo}) => {

    const [textValue, setTextValue] = useState('')
    // state = {
    //     textValue: '',
    // }

    const createTodo = () => {
        const thisInput = document.querySelector('#input')
        const thisInputValue = thisInput.value

          if (thisInputValue === '') {
            alert('Введіть завдання...');
            return; 
        }

        setTextValue(thisInputValue)
        // this.setState({
        //     textValue: thisInputValue
        // })
        addTodo(thisInputValue)
        thisInput.value = ""
    }

 
        return (
            <StyledForm>
                <input id="input" type="text" placeholder="Нове завдання..." />
                <button type="button" id="btn" onClick={createTodo}>Create</button>
            </StyledForm>
        )
}