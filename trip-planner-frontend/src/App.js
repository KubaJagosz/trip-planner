import React from 'react';
import './App.css';
import Greeting from "./components/greeting";

class App extends React.Component {
    state = {
        greeting:[]
    }

    componentDidMount() {
        fetch('http://localhost:8080/api/v1/greet?name=HelloFromReact')
            .then(res => res.json())
            .then((data) => {
                this.setState({ greeting: data })
            })
            .catch(console.log)
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <p>
                        Test Page - showing just contact list from test api
                    </p>
                </header>
                <Greeting greeting={this.state.greeting} />
            </div>
        );
    }
}

export default App;
