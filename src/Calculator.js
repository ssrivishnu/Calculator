import React, {FunctionComponent, useState} from 'react';
import './Calculator.css';
import {Container} from "react-bootstrap";
import {InputBox} from "./Components/InputBox";
import {Button} from "./Components/Button";
import {OutputBox} from "./Components/OutputBox";

function Calculator(): FunctionComponent {
    const [inputOne, setInputOne] = useState('');
    const [inputTwo, setInputTwo] = useState('');
    const [output, setOutput] = useState('');

    function add() {
        if (validInput())
            setOutput(parseInt(inputOne) + parseInt(inputTwo));
    }

    function subtract() {
        if (validInput())
            setOutput(parseInt(inputTwo) - parseInt(inputOne));
    }

    function multiply() {
        if (validInput())
            setOutput(parseInt(inputOne) * parseInt(inputTwo));
    }

    function divide() {
        if (validInput())
            setOutput(parseInt(inputOne) / parseInt(inputTwo));
    }

    function clear() {
        setOutput('');
        document.getElementById('input_1').value = '';
        document.getElementById('input_2').value = '';
        setInputOne('');
        setInputTwo('');
    }

    function validInput() {
        if (inputOne === '' && inputTwo === '') {
            setOutput('Enter Input...');
            return false;
        }
        return true;
    }

    return (
        <Container>
            <div>
                <div className={"inputBoxes"}>
                    <InputBox
                        id={'input_1'}
                        placeHolder={'Input One'}
                        updateValue={event => {
                            setInputOne(event.target.value);
                        }}/>
                    <InputBox
                        id={'input_2'}
                        placeHolder={'Input Two'}
                        updateValue={event => {
                            setInputTwo(event.target.value);
                        }}/>
                </div>
                <div className={"functional-buttons"}>
                    <Button
                        label={"+"}
                        id={'plus'}
                        onClickFun={add}/>
                    <Button
                        label={"-"}
                        id={'minus'}
                        onClickFun={subtract}/>
                    <Button
                        label={"x"}
                        id={'multiply'}
                        onClickFun={multiply}/>
                    <Button
                        label={"/"}
                        id={'divide'}
                        onClickFun={divide}/>
                </div>
                <div className={"result"}>
                    <Button
                        label={"Clear"}
                        id={'clear'}
                        onClickFun={clear}/>
                    <OutputBox
                        id={'output'}
                        placeHolder={'Output'}
                        output={output}/>
                </div>
            </div>
        </Container>
    );
}

export default Calculator;
