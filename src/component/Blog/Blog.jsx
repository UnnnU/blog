import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import md from '../../static/test.md';
import CodeBlock from '../utils/CodeBlock';
import Axios from 'axios';

const gfm = require('remark-gfm')

class App extends Component {


    render(){
        let input = `# lll`;
        return  (
            // <ReactMarkdown source={input} />
            <ReactMarkdown
                plugins={[gfm]}
                renderers={{
                    code: CodeBlock,
                }}
                >
                {md}
            </ReactMarkdown>
        )
    }

    componentDidMount() {
        Axios.get("http://121.248.50.31/static/c1.md")
            .then(res=>{
                console.log(res);
            });
    }

}

export default App;