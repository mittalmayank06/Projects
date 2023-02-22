
//sometimes, cors error happens in backend check it..
import {useState,useEffect} from 'react'
import { useParams } from 'react-router-dom';
import NotFound from './NotFound';
import articles from './Article-content';
import axios from 'axios'
import CommentsList from './components/CommentsList'



const Article = () => {
    const [articleInfo, setArticleInfo] = useState([])

    const { articleId } = useParams();

    
  
    useEffect(() => {
        const loadArticleInfo = async () => {
           
            const response = await axios.get(`http://localhost:8000/api/articlesList/${articleId}`)
           // console.log(response.data)
            const newArticleInfo = response.data;
           // console.log(newArticleInfo)
            //console.log(newArticleInfo.comments);
            setArticleInfo(newArticleInfo);
           //console.log("SUMIT",articleInfo)
            // console.log(articleInfo.comments.postedBy);
            // console.log(articleInfo.comments.text);
           // console.log("SU<JUUUHHHUU",articleInfo.comments);
        };

        loadArticleInfo();
    }, []);

    const article = articles.find(article => article.name === articleId);
    //console.log(articleInfo);
     console.log("Sumit",article)
    if (!article) {
        return <NotFound />
    }

    return (
        <>
         
        <h1>{article.title}</h1>
        {/* { user ?
        <button onClick={addUpVote}>Upvote</button>: <button>Login to upvote</button> } */}
        <p>Upvotes: {articleInfo.upvotes} upvote(s)</p> :        
        {/* <p>Comments: {articleInfo.comments}</p> */}
        {article.content.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
        ))}
        
        
        <CommentsList comments={articleInfo.comments} /> 
        
        </>
    );
}

export default Article;