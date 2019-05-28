/**Cách viết trước đây */
/*
import React from 'react';

class App extends React.Component{
    constructor(props){
        super(props);
        this.state={
            count:0
        };
    }

    render(){
        //cách viết trong ES6
        const {count}=this.state;
        //cách viết trong ES5
        const count=this.state.count;
        return (
            <div>
                <h1>You clicked {count} times</h1>
                <button
                onClick={()=>this.setState({count:count+1})}
                >
                    Click Tao
                </button>
            </div>
        );
    }
}*/
/**Cách viết trước đây */

/**Cách viết sử dụng Hook */
import React, {useState} from 'react';

function Example(){
    const [count, setCount]=useState(0);
    return (
        <div>
            <p>You clicked {count} times</p>
            <button 
            onClick={()=>setCount(count+1)}
            >
                Click Tao
            </button>
        </div>
    );
}

export default Example;

