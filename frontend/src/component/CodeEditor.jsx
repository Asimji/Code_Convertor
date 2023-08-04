import React from 'react';
import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/theme-monokai';
import 'ace-builds/src-noconflict/mode-java';
import 'ace-builds/src-noconflict/mode-python';
import 'ace-builds/src-noconflict/mode-c_cpp';

const CodeEditor = ({ code, language }) => {
  let mode;
  switch (language) {
    case 'java':
      mode = 'java';
      break;
    case 'python':
      mode = 'python';
      break;
    case 'cpp':
      mode = 'c_cpp';
      break;
    default:
      mode = 'text';
  }

  return (
    <AceEditor
      mode={mode}
      theme="monokai"
      name={`${language}-code-editor`}
      value={code}
      readOnly={true}
      editorProps={{ $blockScrolling: true }}
      width="100%"
      height="400px"
    />
  );
};

export default CodeEditor;
