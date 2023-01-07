import { type } from "@testing-library/user-event/dist/type";
import React from "react";
import styled from "styled-components";

const SCinput = styled.input`
font-size=: 30px;
margin: 20px 0;
background-color: grey;
color: white;
`


export default function Tarih (props) {
    const {changer} = props;

    return (
        <input type="date" onChange = {(event) => changer(event.target.value)}></input>
    )
}