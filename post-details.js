let postURL = new URL(location.href);
let postData = JSON.parse(postURL.searchParams.get('postData'));

let postDetails = document.getElementsByClassName('post-details')[0];
let postId = document.createElement('div');
postId.innerText =`ID-${postData.id}; user - ${postData.userId}`;
let postTitle = document.createElement('div');
postTitle.innerText =`title: ${postData.title}`;
let postBody = document.createElement('div');
postBody.innerText = postData.body;

postDetails.append(postId);
postDetails.append(postTitle);
postDetails.append(postBody);

let postComments = document.getElementsByClassName('post-comments')[0];
fetch(`https://jsonplaceholder.typicode.com/posts/${postData.id}/comments`)
    .then(response => response.json())
    .then(comments =>{
        for (const comment of comments) {
            let commentItem = document.createElement('li');
            commentItem.innerText = comment.body;
            postComments.appendChild(commentItem);
        }
    })
