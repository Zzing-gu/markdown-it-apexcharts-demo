import React, { Component } from 'react';

import MarkdownIt from 'markdown-it'
import MarkdownItApexCharts , {ApexRender} from 'markdown-it-apexcharts'

class App extends Component {

  state = {result : 'now loading'}

  componentDidMount() {
    this.md = MarkdownIt();
    this.md.use(MarkdownItApexCharts);

    var input = document.getElementById("input");
    var preview = document.getElementById("preview");
    var output = document.getElementById("output");
    var renderBtn = document.getElementById("render");

    renderBtn.onclick =  () =>{
      preview.innerHTML = input.value;
     
      var result = this.md.render(input.value)
      console.log(result)
      //output.innerHTML = result
      this.setState({result:result})
      // you need this! By default, mermaid.init will be called when the document is ready, finding all elements with class="mermaid". If you are adding content after mermaid is loaded, or otherwise need finer-grained control of this behavior, you can call init
      ApexRender();
    }

   
  }

  render() {
    return (
      <div>
        <textarea name="" id="input" cols="100" rows="30">
       
        </textarea>
      
      <div>
        Your code (for debugging): <pre id="preview"></pre>
      </div>
      <div>
        <button type="button" id="render">Render</button>
      </div>
      <div>Graph:
  <div dangerouslySetInnerHTML={{__html:this.state.result}} id="output"></div>
      </div>
      </div>
    );
  }
}

export default App;
