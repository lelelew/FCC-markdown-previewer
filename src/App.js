import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/FormGroup";
import FormGroup from "react-bootstrap/FormGroup";
import FormLabel from "react-bootstrap/FormLabel";
import FormControl from "react-bootstrap/FormControl";

const marked = require("marked");

marked.setOptions({
  gfm: true,
  breaks: true
});

class App extends Component {
  state = {
    markdown: `
# Markdown Previewer
## Instructions
1. Type Markdown Input on Left Side
2. See Output on Right Side
[Read more about Markdown here](https://www.markdownguide.org/cheat-sheet/)
\`inline code\`
\`\`\`
code block
\`\`\`
> blockquote
![Markdown Icon](https://img.icons8.com/ios/50/000000/markdown.png)
**bold**

  `
  };

  updateMarkdown = function(markdown) {
    this.setState({ markdown });
  };

  render() {
    let { markdown } = this.state;
    console.log(markdown);

    return (
      <div className="App container">
        <Row>
          <Col>
            <Form>
              <FormGroup controlId="formControlsTextarea">
                <FormLabel>
                  {" "}
                  <h1>Markdown Input</h1>
                </FormLabel>
                <FormControl
                  id="editor"
                  as="textarea"
                  rows="15"
                  placeholder="# Enter Markdown"
                  value={markdown}
                  onChange={event => this.updateMarkdown(event.target.value)}
                />
              </FormGroup>
            </Form>
          </Col>
          <div>
            <Col>
              <h1> Markdown Output</h1>
              <div
                id="preview"
                dangerouslySetInnerHTML={{ __html: marked(markdown) }}
              />
            </Col>
          </div>
        </Row>
      </div>
    );
  }
}

export default App;
