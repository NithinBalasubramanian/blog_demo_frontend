import React , { useState , useEffect ,useRef } from 'react'
import { useRouter } from 'next/router';

// import { CKEditor } from '@ckeditor/ckeditor5-react';
// import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
// import ImageInsert from '@ckeditor/ckeditor5-image/src/imageinsert'

const BlogMore = () => {


    const router = useRouter();

    let [ blog , setBlog ] = useState('')

    const editorRef = useRef()

    const { CKEditor, ClassicEditor } = editorRef.current || {}
    const [editorLoaded, setEditorLoaded] = useState(false)

     useEffect(() => {
        editorRef.current = {
        // CKEditor: require('@ckeditor/ckeditor5-react'), // depricated in v3
            CKEditor: require('@ckeditor/ckeditor5-react').CKEditor,
            ClassicEditor: require('@ckeditor/ckeditor5-build-classic'),
        }
        setEditorLoaded(true)
    }, [])

    // ClassicEditor
    // .create( document.querySelector( '#editor' ), {
    //     plugins: [ ImageInsert ],
    //     toolbar: [ 'insertImage' ]
    // } )

    return(
        <>
            <div className = "midBlog">
                <div className="pageContainer">
                    { editorLoaded ? 
                        <CKEditor
                                editor={ ClassicEditor }
                                data= { blog }
                                // onReady={ editor => {
                                //     // You can store the "editor" and use when it is needed.
                                //     console.log( 'Editor is ready to use!', editor );
                                // } }
                                onChange={ ( event, editor ) => {
                                    const data = editor.getData();
                                    setBlog(data);
                                } }
                                // onBlur={ ( event, editor ) => {
                                //     console.log( 'Blur.', editor );
                                // } }
                                // onFocus={ ( event, editor ) => {
                                //     console.log( 'Focus.', editor );
                                // } }
                                // config={ {
                                //     plugins: [ ImageInsert ],
                                //     toolbar: [ 'insertImage' ]
                                // } }
                            />
                        : 
                        <>
                            <div className= "preLoader">
                                <div className="wrap">
                                    <div className="loading">
                                        <div className="bounceball"></div>
                                        <div className="text">Fetching</div>
                                    </div>
                                </div>
                            </div>
                        </>
                    }
                </div>
            </div>
        </>
    )

}

export default BlogMore