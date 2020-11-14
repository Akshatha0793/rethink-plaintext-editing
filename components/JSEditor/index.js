import React, { useEffect, useState }  from 'react';
import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import PropTypes from 'prop-types';
import css from '../PlaintextEditor/style.module.css';
import path from "path";


function JSEditor({ file, write }) {
  const [ data, setText ] = useState("");

  useEffect(() => {
    file.text().then((res) => {
        setText(res);
    });
}, []);


console.log(data);
  return (
    <div className={css.editor}>
    <div className={css.title}>{path.basename(file.name)}</div>
    
    <Editor
      value={data}
      onValueChange={data => setText(data)}
      highlight={data => highlight(data, languages.js)}
      padding={10}
      style={{
        fontFamily: '"Fira code", "Fira Mono", monospace',
        fontSize: 12,
      }}
    />

</div>

   
  );
}

JSEditor.propTypes = {
  file: PropTypes.object,
  write: PropTypes.func
};

export default JSEditor;