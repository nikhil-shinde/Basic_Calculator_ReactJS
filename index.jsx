import React from 'react';
import ReactDOM from 'react-dom';
import {add,sub,mult,div} from './App';

ReactDOM.render(
  <>
    <ol>
    <li>Sum of two no is {add(30,3)}</li>
    <li>Sub of two no is {sub(30,3)}</li>
    <li>mult of two no is {mult(30,3)}</li>
    <li>Div of two no is {div(13,3)}</li>
    </ol>
    </>,
    document.getElementById('root')

);
