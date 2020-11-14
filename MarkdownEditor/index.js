import React, { useEffect, useState }  from 'react';
import PropTypes from 'prop-types';
import path from "path";
import css from './style.css';
import Editor from "rich-markdown-editor";
import MarkdownIt from "markdown-it";

function MarkdownEditor({ file, write }) {
  const [ text, setText ] = useState("");

  const parser = new MarkdownIt();
  console.log(file, write);


  useEffect(() => {
		file.text().then((res) => {
			setText(res);
		});
	}, []);

  const handleEditorChange = ({ html, text }) => {
		setText(text);
  };
  
  
  
  console.log(text);
  return (
   
    <div className={css.editor}> 

			<div className={css.title}>{path.basename(file.name)}</div>
      <Editor
      value={text}
				className ={css.content}
				renderHTML={(text) => parser.render(text)}
				onChange={handleEditorChange}
      />
    
    </div>
    
  );
}

MarkdownEditor.propTypes = {
  file: PropTypes.object,
  write: PropTypes.func
};

export default MarkdownEditor;