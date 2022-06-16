marked.setOptions({
      breaks: true,
       //Interpret carriage returns and render them as br (line break) elements. 
       gfm : true
})

//#region placeholder

var placeholder = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:
  
Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

**bold** text
Also _italic_.
And **_both!_**
You could also ~~cross words out~~.

There's also [links](https://github.com/lezojeda), and
> Block Quotes!

Lists:

- First indentation level
\t- Second indentation
     - Third
        - And fourth

Numbered lists:

1. And there are numbererd lists too.
1. Use just 1s if you want! 
1. But the list goes on...

![React Logo w/ Text](https://goo.gl/Umyytc)`

//#endregion

class App extends React.Component {
      constructor(props) {
            super(props);
            this.state = {
                  text: placeholder
            }
            this.handleChange = this.handleChange.bind(this)
      }

      handleChange(event) {
            this.setState({ text: event.target.value })
      }

      render() {
            return (
                  <div class="app-container">
                        <div class="container editor-container">
                              <div class = "title">Editor</div>
                              <div id = "editor"><textarea value={this.state.text} onChange={this.handleChange}></textarea></div>
                        </div>
                        <Previewer text={this.state.text}   />
                  </div >
            )
      }
}

class Previewer extends React.Component {
      constructor(props) {
            super(props);
      }



      render() {
            return (
                  <div class="container previewer-container">
                        <div class = "title">Preview</div>
                        <div id="preview"
                              dangerouslySetInnerHTML={{ __html: marked(this.props.text, { sanitize: true }) }}
                        />
                  </div>

            )
      }
}

ReactDOM.render(<App />, document.getElementById('root'))
