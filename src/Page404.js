import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Page404 = () => {
    return ( 
        <div className="not-found">
            <h2>Sorry</h2>
            <p>That page can not be found</p>
            <img src="https://www.google.com/imgres?imgurl=https%3A%2F%2Finternetdevels.com%2Fsites%2Fdefault%2Ffiles%2Fpublic%2Fblog_preview%2F404_page_cover.jpg&tbnid=CQALqcAxAsTBXM&vet=12ahUKEwjynLmVjqyGAxUpAvsDHXd7APAQMygMegUIARCCAQ..i&imgrefurl=https%3A%2F%2Finternetdevels.com%2Fblog%2Fcreative-404-error-pages&docid=0qIHTmb2HlSsTM&w=864&h=578&q=404%20page&ved=2ahUKEwjynLmVjqyGAxUpAvsDHXd7APAQMygMegUIARCCAQ" alt="" srcset="" />
            <Link to="/">Back to the homepage.... </Link>
        </div>
     );
}
 
export default Page404;