import { Link } from "react-router-dom/cjs/react-router-dom.min";

const BlogList = ({blogs,title }) =>{
    

     
    return ( 
        <div className="blog-list">
            <h2>{title}</h2>
           {blogs.map((singleblog) =>(
                <div className="blog-preview" key={singleblog.id}>
                    <Link to={`/blogs/${singleblog.id}`}>
                    <h2>{singleblog.title}</h2>
                    <p>Written by {singleblog.author}</p>
                    </Link>
                </div>
            ))} 
        </div>
     );
}
 
export default BlogList;