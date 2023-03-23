function loadPost(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res=>res.json())
    .then(data=>displayPosts(data)) 
}
function displayPosts(posts){
    const postsContainer=document.getElementById('post-container');
    for(const post of posts){
        const postDiv=document.createElement('div');
        console.log(post);
        postDiv.innerHTML=`
        <h4>user:${post.userId}</h4>
        <h5>title:${post.title}</h5>
        <p>body:${post.body}</p>`;
        postsContainer.appendChild(postDiv);

    }
}
loadPost();