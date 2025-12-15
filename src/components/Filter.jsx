// import { Component } from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
width: 410px;
border: 1px solid #25fa25ad;
margin-top: 10px;
`

export const Filter = ({filterInfo}) => {

    const filterData = () => {
        const inputData = document.querySelector('#inputFind')
        const inputDataValue = inputData.value

        filterInfo(inputDataValue)
    }
    return (
        <StyledDiv>
            <h2>Фільтр по імені:</h2>
            <input onInput={filterData} id="inputFind" placeholder="Шукайте тут" />
        </StyledDiv>
    )
}