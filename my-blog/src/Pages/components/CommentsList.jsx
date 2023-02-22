const CommentsList =( { comments}) => {
   // console.log(comments)
    return(
    <>
    <h1>Comments:</h1>
   {comments && comments.map((ele,index)=><p key={index}>{ele}</p>)}
    </>
    )
}
export default CommentsList;