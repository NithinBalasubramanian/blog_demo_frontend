import { useState } from "react";
import Editor from 'react-simple-wysiwyg';
import axios from '../../component/apiInstance/Instance_API';

export default function AddBlog() {

    const initialState = {
        title: "",
        auther: "",
        category: "",
        blogPreview: "",
        imgUrl: "",
        blogBrief: "",
        blogContent: "",
        reference: ""
    }
    const [blogData, setBlogData] = useState(initialState)

    const handleBlog = async (e) => {
        e.preventDefault();
        
        await axios.post('/saveBlog', blogData)
        .then( res => {
            console.log(res);
            setBlogData(initialState)
        })
        .catch( err => {
            console.log(err);
        })
    }

    const changeHandle = (e) => {
        setBlogData((prev) => { return { ...prev, [e.target.name] : e.target.value}})
    }


    return (
        <div className="contMain">
            <div className="blogForm">
                <h2>Add Blog</h2>
                <form onSubmit={handleBlog}>
                    <div className="formField">
                        <label className="formFieldLabel">Blog title</label>
                        <input type="text" name="title" value={blogData.title} className="formFieldInput" onChange={changeHandle} />
                    </div>
                    <div className="formField">
                        <label className="formFieldLabel">Auther</label>
                        <input type="text" name="auther" value={blogData.auther} className="formFieldInput" onChange={changeHandle} />
                    </div>

                    <div className="formField">
                        <label className="formFieldLabel">Category</label>
                        <select name="category" value={blogData.category} className="formFieldInput" onChange={changeHandle} >
                            <option value="News">News</option>
                            <option value="Tech">Tech</option>
                            <option value="Automobiles">Automobiles</option>
                            <option value="Finance">Finance</option>
                            <option value="Programming">Programming</option>
                        </select>
                    </div>

                    <div className="formField">
                        <label className="formFieldLabel">Blog preview</label>
                        <textarea type="text" name="blogPreview" value={blogData.blogPreview} className="formFieldInput" onChange={changeHandle} ></textarea>
                    </div>
                    <div className="formField">
                        <label className="formFieldLabel">Image Url</label>
                        <input type="text" name="imgUrl" value={blogData.imgUrl} className="formFieldInput" onChange={changeHandle} />
                    </div>
                    <div className="formField">
                        <label className="formFieldLabel">Blog brief</label>
                        <textarea type="text" name="blogBrief" value={blogData.blogBrief} className="formFieldInput" onChange={changeHandle} ></textarea>
                    </div>
                    <div className="formField">
                        <label className="formFieldLabel">Blog content</label>
                        <Editor name="blogContent" containerProps={{ style: { resize: 'vertical', backgroundColor: "#fff", minHeight: "30vh" } }} value={blogData.blogContent} onChange={changeHandle} />
                    </div>
                    <div className="formField">
                        <label className="formFieldLabel">Reference Url</label>
                        <input type="text" name="reference" value={blogData.reference} className="formFieldInput" onChange={changeHandle} />
                    </div>
                    <div className="formField">
                        <button className="submitButton" type="submit" >ADD BLOG</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
