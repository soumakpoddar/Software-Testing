import React from "react";
import ReactDOM from "react-dom";
import DiseaseAnalysis from "./../DiseaseAnalysis";
import { render } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";

it("renders without crashing", ()=>{
    const div = document.createElement("div");
    ReactDOM.render(<DiseaseAnalysis></DiseaseAnalysis> , div);
})

it("renders disease correctly", ()=>{
    const {getByTestId} = render(<DiseaseAnalysis label="click me please"></DiseaseAnalysis>)
    expect(getByTestId('button')).toHaveTextContent("click me please")
})