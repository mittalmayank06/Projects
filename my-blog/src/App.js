import {BrowserRouter,Routes,Route} from "react-router-dom";
import './App.css';
import About from "./Pages/About";
import Article from "./Pages/Article"
import ArticlesListPage from "./Pages/ArticlesListPage"
import Home from "./Pages/Home"
import NotFound from "./Pages/NotFound"
import NavBar from "./homeComp/NavBar"


// firebase-projectName ->my-react-blog-5aea7


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <NavBar />
     <h1>My Awesome Blog</h1>
     <div id="page-body">
      Welcome to my Blog!
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/articlesList" element={<ArticlesListPage />} />  
      <Route path="/articlesList/:articleId" element={<Article />} />
     
      <Route path="*" element={<NotFound />}/>
      </Routes>
      
     </div>
    </div></BrowserRouter>
    
  );
}

export default App;


// to connect frontend with backend --
// const response = await axios.get('http:localhost:3000/api/articlesList/learn-react');
// const data = response.data;
