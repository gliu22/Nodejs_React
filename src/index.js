import React from 'react';
import ReactDOM from 'react-dom';

const color = Math.random() > 0.5 ? 'green' : 'blue';
ReactDOM.render(
    <h2 style={{color: color}}>Hello Ken and React</h2>,
    document.getElementById('root')
)