import React, { useState , useEffect } from 'react';

// import { Editor } from 'react-draft-wysiwyg';
// import '../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

// import ReactQuill from 'react-quill'; 
// import 'react-quill/dist/quill.snow.css';


const EditorComponent = () =>  {


    let [ blog , setBlog ] = useState('')

    const handleChange = (value) => {
        setBlog(value)
      }
    

    return(
        <>
         {/* <Editor /> */}

         {/* <ReactQuill value={ blog }
                  onChange={handleChange} /> */}
        </>
    )

}

export default EditorComponent