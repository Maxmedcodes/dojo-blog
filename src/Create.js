import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Create = () => {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("")
    const [author, setAuthor] = useState("")
    const [submitPending, setSubmitPending] = useState(false)
    const history = useHistory() 

    const handleSubmit= (event) =>{
        event.preventDefault()
        const blog = {title, body, author};
        
        setSubmitPending(true)
        
        fetch('http://localhost:8000/blogs',{
            method:'POST',
            headers:{"Content-Type": "application/json"},
            body: JSON.stringify(blog)
        }).then(()=>{
            console.log("New blog added")
            setSubmitPending(false)
            history.push("/")
        }

        )
    }
    return (  
        <div className="create">
            <h2>Add New Blog</h2>
            <form onSubmit={handleSubmit}>
                <label >Blog title:</label>
                <input 
                
                type="text"
                required
                value={title}
                onChange={(event) => setTitle(event.target.value)}
                
                />
                <label >Blog body:</label>
                <textarea 
                
                required
                onChange={(event)=>setBody(event.target.value)}
                >
                    
                </textarea>
                <label>Blog author:</label>
                <select 
                value={author}
                onChange={(event)=>setAuthor(event.target.value)}>
                    <option value="mario">mario</option>
                    <option value="yoshi">yoshi</option>
                </select>
                
                { !submitPending && <button>Add Blog</button>}
                { submitPending && <button disabled>Adding Blog....</button>}
                
            </form>
        </div>
    );
}
 
export default Create;