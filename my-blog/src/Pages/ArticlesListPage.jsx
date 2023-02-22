import {Link} from "react-router-dom"
import articles from "./Article-content"
import ArticlesList from "./components/ArticlesList"
const ArticlesListPage =() =>{
    return(
        <>
        {/* //error: Parsing error due to unexpected token (,)=>means 2 parents sol:<></> */}
        <h1>Articles : </h1>
        <ArticlesList articles={articles} />
        </>
    );
}

export default ArticlesListPage;