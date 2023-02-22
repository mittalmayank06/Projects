import express from 'express';
import cors from "cors"

let articlesInfo = [{
    name: 'learn-react',
    upvotes: 15,
    comments: ["postedBy","Mayank Mittal" ,"text","react awesome"],
}, {
    name: 'learn-node',
    upvotes: 0,
    comments: ["postedBy","Mayank Mittal" ,"text","node awesome"],
}, { 
    name: 'mongodb',
    upvotes: 0,
    comments: ["postedBy","Mayank Mittal" ,"text","mongodb awesome"],
}]


const app = express();
app.use(express.json());
app.use(cors())
app.get('/home',(req,res) => {
    res.send("Hello get statement");

});

app.get('/api/articlesList/:name', (req, res) => {
    const { name } = req.params;
    // const { postedBy, text } = req.body;

    const article = articlesInfo.find(a => a.name === name);

    if (article) {
        res.send(article);
        
    } else {
        res.send('That article doesn\'t exist!');
    }
});

app.get('/api/articlesList/:name/comments', (req, res) => {
    const { name } = req.params;
    // const { postedBy, text } = req.body;
    const{comment} = req.body;

    const article = articlesInfo.find(a => a.name === name);

    if (article) {
        res.json(article);
        
    } else {
        res.send('That article doesn\'t exist!');
    }
});



app.listen(8000, () =>{
    console.log("Server is running @ 8000")
})

