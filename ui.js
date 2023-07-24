//arayüz islemlerinin yapilacagi js

class UI {
    constructor(){
        this.profile =document.getElementById('profile');
        this.reposArea =document.getElementById('repos');
        this.alertArea =document.getElementById('alert');
        
    }
    //profil arayüznü ekrana basma
    showProfile(data){
        this.profile.innerHTML =`<div class="row border p-4 my-4">
            <div class="col-md-3">
                <img src=${data.avatar_url} alt="picture" class="img-fluid rounded shadow">
                <a href=${data.html_url} target="_blank" class="btn btn-primary my-4 w-100">Show Profile</a>
            </div>
            <div class="col-md-9">
                <span class="badge bg-primary fs-6 mt-1">Repositories :${data.public_repos} </span>
                <span class="badge bg-secondary fs-6 mt-1">Gist : ${data.public_gists}</span>
                <span class="badge bg-success fs-6 mt-1">Followers : ${data.followers}</span>
                <span class="badge bg-info fs-6 mt-1">Following : ${data.following}</span>
                <ul class="list-group mt-5">
                    <li class="list-group-item">About: ${data.bio}</li>
                    <li class="list-group-item">Company: ${data.company}</li>
                    <li class="list-group-item">Blog: ${data.blog}</li>
                    <li class="list-group-item">Location: ${data.location}</li>
                    <li class="list-group-item">Created : ${new Date(data.created_at).toLocaleDateString()}</li>
                </ul>
            </div>

        </div>`
    }

    //repolari ekrana basma fonk
//diziyi dönme
    showRepos(repos){
        //dizideki herbir repoyu temsil eden html olusturma
        let outlet= ''
 repos.forEach((repo)=>{
     outlet += `<div class="border row p-3 mb-4">
                <div class="col-md-6">
                    <a href=${repo.html_url}>${repo.name}</a>
                </div>
                <div class="col-md-6">
                    <span class="badge bg-primary">Star : ${repo.stargazers_count}</span>
                    <span class="badge bg-secondary">Watchers :${repo.watchers_count}</span>
                    <span class="badge bg-success">Fork's : ${repo.forks_count}</span>
                </div>
            </div> `;
 });
 this.reposArea.innerHTML = outlet;
      
    }

//uyari alert meseajlari
showAlert(message,classname){
    //div olusturma
const div = document.createElement ("div");
//sabit class belirleme
div.classList.add("alert");
//parametre olarak gelen alertin rengi tanimla
div.classList.add(classname);
    //uyari yazisi eklme
    div.innerText = message;

    //htmle gönderme
    this.alertArea.appendChild(div);

    //ona verdiginiz  fonksiyonu belli süre sonra calistirir

    setTimeout(() =>{
        div.remove()
    },3000);

}


}

export default UI