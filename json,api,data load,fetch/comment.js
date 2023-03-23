function commentload(){
    fetch("https://jsonplaceholder.typicode.com/comments")
    .then(res=>res.json())
    .then(data=>displaycomment(data))
}
function displaycomment(comments){
    const commentsus=document.getElementById('commentBox');
    for(const comment of comments){
    const commentDiv=document.createElement('div');
    console.log(comment);
    commentDiv.innerHTML=`
    <h3>user:${comment.name}</h3>
    <h5>email:${comment.email}</h5>
    `;
    commentsus.appendChild(commentDiv);
    }
}
commentload();