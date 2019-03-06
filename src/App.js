import React from 'react';
import ReactDOM from 'react-dom';
import LogicWeight from './components/LogicWeight';

import "../src/styles.scss"

class App extends React.Component{
    render(){
        return(
            <div>
                <LogicWeight/>
            </div>
        )
    }
}



ReactDOM.render(<App />, document.getElementById('app'))