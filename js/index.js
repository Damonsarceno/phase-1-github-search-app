addEventListener("DOMContentLoaded", () => {
  
    const searchUser = document.querySelector('#github-form');
   


    searchUser.addEventListener("submit", (e) => {
     e.preventDefault();
     let usernameInputValue = document.querySelector('#github-form').value
     getUsers(usernameInputValue);
     
     });
    });

function getUsers(usernameInputValue) {
    
   
     
    fetch(`https://api.github.com/search/users?q=${usernameInputValue}`)
    .then(res => res.json())
    .then(data => {
      createUserCardInfo(data.items)
   
  
    })
}


function createUserCardInfo(items) {
    const userList = document.getElementById('user-list')
    items.map(item => {
       
       const userName = document.createElement('h2');
       userName.setAttribute("class", "user-name");
       userName.textContent = item.login;
       

       const avatar = document.createElement('img');
       avatar.src = item.avatar_url;

       const link = document.createElement('a');
       link.href = item.html_url;
       link.textContent = 'View Profile';

       const userContainer = document.createElement('li');
       userContainer.appendChild(userName);
       userContainer.appendChild(avatar);
       userContainer.appendChild(link);

       userList.appendChild(userContainer)

     });

     const usernameList = document.querySelector(".user-name");
     
     usernameList.addEventListener("click", getRepos);
 }


 

function getRepos() {  

   
    fetch(`https://api.github.com/users/${this.innerText}/repos`, {
        headers: {
            'Accept': "application/vnd.github.v3+json",
        }
    })
    .then(res => res.json())
    .then(data => {
      
    
 
function getRepoOnPage() {
   const reposList = document.querySelector('#repos-list');

    data.forEach(repo => {
        
        const userRepo = document.createElement('li');
        
        const repoName = document.createElement('h2');
        repoName.textContent = repo.name;

        const repoLink = document.createElement('a');
        repoLink.href = repo.repos_url;
        repoLink.textContent = 'View Repo';

        
        userRepo.appendChild(repoName);
        userRepo.appendChild(repoLink);
        
       reposList.appendChild(userRepo);
    });

};
    
   getRepoOnPage()
});
};  
 
