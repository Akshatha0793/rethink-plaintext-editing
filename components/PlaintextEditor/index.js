import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import dynamic from "next/dynamic";
import css from './style.module.css';
import path from "path";
import { Editor, EditorState, RichUtils} from 'draft-js';


function PlaintextEditor({ file, write }) {
 
  const [ text, setText ] = useState("");

  useEffect(() => {
		file.text().then((res) => {
			console.log(res);
			setText(res);
		});
  });

 
  console.log(text);

  
  
  return (

		<div className={css.editor}>
			<div className={css.title}>{path.basename(file.name)}</div>
<textarea className={css.content} value={text}></textarea>

		</div>
	);
}

PlaintextEditor.propTypes = {
  file: PropTypes.object,
  write: PropTypes.func
};

export default PlaintextEditor;
