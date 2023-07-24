//diger js dosyalarindan gelenler
import Github from './github.js';
import UI from './ui.js';

//github klasinin örnegini olusturma
const github = new Github()
const ui = new UI()


//htmlden gelenler
const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-btn");
const themeBtn =document.getElementById("theme-btn");
const body = document.querySelector('body');



//olay izleyicileri
themeBtn.addEventListener("click", changeTheme);
searchButton.addEventListener('click', getInput);
searchInput.addEventListener('keypress', (e) => {
    if (e.code === 'Enter') {
        getInput();
    }
})


//methodlar
function getInput() {
    //arama kutucugu bos degilse bunlari yapsin!
    if (searchInput.value !== '') {
        //hem kullanici bilgiis hem repolar icin api istegi at
        github.getUser(searchInput.value).then((data) => {
            //eger kullanici bulunamadiysa;
            if (data.profile.message === 'Not Found') {
                ui.showAlert('User not found!',"alert-danger")
            } else {
                ui.showAlert('User successfly found','alert-success')
                //kullanici bilgilerine göre api den gelen cevaba gore sekillenen kullanici detay alanininekrana bas

                ui.showProfile(data.profile);
                //repolari ekrana bas
                ui.showRepos(data.repos);

            }

        });
        return;
    }
    //arama terimi bos ise:
   ui.showAlert('Please fill out form area!', 'alert-info');
}


function changeTheme() {
//arka Plani degistirma 
body.classList.toggle('bg-dark');
body.classList.toggle('text-bg-dark');
//butonujn yazisini degistirme
if(body.classList.contains("bg-dark")){
    themeBtn.innerText ='Light Mode'
}else{
    themeBtn.innerText='Dark Mode'
}
}