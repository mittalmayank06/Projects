// In components dir. , we put reusable components : ArticlesList

import {Link} from "react-router-dom"
// import articles from "./Article-content"
const ArticlesList = ({articles}) =>{
    return(
        <>
         {articles.map(article => (
            // when we use map()-> we need to give key to identify unique
            <Link key={article.name} className="article-list-item" to={`/articlesList/${article.name}`}>
                <h3>{article.title}</h3>
                <p>{article.content[0].substring(0,150)}</p>
            </Link>
                
            
        ))}
        </>
    )
}
export default ArticlesList;