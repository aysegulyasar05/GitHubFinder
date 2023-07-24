class Github {
    //istek atmak icin grekli bilgiler
    constructor() {
        this.clientId = 'fbedad12856e55cd5e36';
        this.clientSecret = 'cfc252ff948f2e3705f6da9b759e202e4ffdaf7b';
        this.perPage = 15;
        this.sort = 'asc';
    }

    //apiden kullanici bilgisi alinir
    async getUser(username) {
        const profileRes = await fetch(`https://api.github.com/users/${username}?client_id=${this.clientId}&client_secret=${this.clientSecret}`);
        //repo bilgilerini alma
        const repoRes=await fetch(`https://api.github.com/users/${username}/repos?per_page=${this.perPage}&sort=${this.sort}&client_id=${this.clientId}&client_secret=${this.clientSecret}`);
        //gelen cevabi jsona a cevirme
        const profile = await profileRes.json();
        const repos = await repoRes.json();
        //fonksiyonun cagirildigi yere profil ve repo bilgisini gönderme
        return {
            profile,
            repos
        }
    };
}

export default Github 