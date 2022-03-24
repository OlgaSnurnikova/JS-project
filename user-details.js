let currentURL = new URL(location.href);
let userDetails = JSON.parse(currentURL.searchParams.get('data'));
let {id, name, phone, username, website, address:{city, street, zipcode}, company:{name: companyName, bs, catchPhrase}} = userDetails;
let userCard = document.createElement('div');
userCard.classList.add('user-card');
userCard.innerText=`ID - ${id}, ${name}, phone: ${phone}, username: ${username}, web: ${website}`;
let addressCard = document.createElement('div');
addressCard.classList.add('address-card');
addressCard.innerText=`Address: ${city}, ${zipcode}, ${street}`;
let companyCard = document.createElement('div');
companyCard.classList.add('company-card');
companyCard.innerText=`Company: ${companyName}, catch phrase: ${catchPhrase}, bs: ${bs}`;
let wrapper = document.createElement('div');
wrapper.classList.add('wrapper');

let postsButton = document.createElement('button');
postsButton.innerText = 'post of current user';
postsButton.classList.add('posts-btn');
let postsWrapper = document.createElement('div');
postsWrapper.classList.add('posts-wrapper');

postsButton.onclick = function (){
    this.disabled=true;
    fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
        .then(value => value.json())
        .then(posts =>{
            for (const post of posts) {
                let postItem = document.createElement('div');
                postItem.innerText = post.title;
                postItem.classList.add('post-title');
                postsWrapper.appendChild(postItem);
                let postButton = document.createElement('button');
                postButton.innerText ='post-details';
                postItem.appendChild(postButton);
                postButton.onclick = function (){
                    location.href = `./post-details.html?postData=${JSON.stringify(post)}`
                }
            }
        })
}

wrapper.append(userCard);
wrapper.append(addressCard);
wrapper.append(companyCard);
document.body.append(wrapper);
document.body.append(postsButton);
document.body.append(postsWrapper);




