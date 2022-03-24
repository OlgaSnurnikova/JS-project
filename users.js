let usersContainer=document.getElementsByClassName('users-container')[0];
fetch('https://jsonplaceholder.typicode.com/users')
.then(value => value.json())
.then(users =>{
    for (const user of users) {
        let userContainer = document.createElement('div');
        userContainer.classList.add('user');
        userContainer.innerText = `ID ${user.id} - ${user.name}`;
        let userButton = document.createElement('button');
        userButton.innerText = 'User details';
        userButton.classList.add('user-button');
        userButton.onclick=function (){
            location.href=`./user-details.html?data=${JSON.stringify(user)}`
        }
        userContainer.append(userButton);
        usersContainer.append(userContainer);
    }
})