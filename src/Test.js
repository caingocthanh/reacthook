import React,{Component, useEffect, useState} from 'react';

function Test(){
        const [st, setST]=useState(0);

        useEffect(()=>{
            return (alert(st));
        });

        return (
            <di>
                <p>This is a Test {st}</p>
                <button onClick={()=>setST(st+1)}>Click</button>
            </di>
        );
    }

class xxx extends Component{
    render(){
        return (
            <button></button>
        );
    }
}

class Btn extends Component{
    return(
        <button></button>
    );
}

export default Test;