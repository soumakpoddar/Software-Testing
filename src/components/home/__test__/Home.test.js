import React from "react";
import ReactDOM from "react-dom";
import Home from ".././Home";
import { render } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";

it("renders without crashing", ()=>{
    const div = document.createElement("div");
    ReactDOM.render(<Home></Home> , div);
})

it("renders home correctly", ()=>{
    const {getByTestId} = render(<Home title="click me please"></Home>)
    expect(getByTestId('home')).toHaveTextContent("")
})