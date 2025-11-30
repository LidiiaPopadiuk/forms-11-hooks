import { Component } from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
width: 410px;
border: 1px solid #25fa25ad;
margin-top: 10px;
`

export class Filter extends Component {

    filterData = () => {
        const inputData = document.querySelector('#inputFind')
        const inputDataValue = inputData.value

        this.props.filterInfo(inputDataValue)
    }
    render() {
        return (
            <StyledDiv>
                <h2>Фільтр по імені:</h2>
                <input onInput={this.filterData} id="inputFind" placeholder="Шукайте тут" />
            </StyledDiv>
        )
    }
}