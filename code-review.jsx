import ReactDOM from 'react-dom';

const LoginBox = () => {
    return <span className = 'login'>Login Box</span>
};


const App = () => {
    return (
        <div>Header</div>
        <LoginBox/>
    );
}


ReactDOM.render(<App/>)