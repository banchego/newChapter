import React from 'react'
import ReactDOM from 'react-dom';

const LoginBox = () => {
    return <span className = 'login'>Login Box</span>;
};


const App = () => {
    return (
        <div>
        <div>Header</div>
        <LoginBox />
        </div>
    );
}


ReactDOM.render(<App />, document.getElementById)