class Github {
    constructor() {
        this.client_id = '2dcb7ed214cdab59aa83';
        this.client_secret = '6952e333f2c81b0fe87f6e85ea3857fc68a6f2df';
        this.repos_count = 100;
        this.repos_sort = 'created: asc';
    }

    async getUser(user) {
        // const profileUrl = `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`;
        // const profileResponse = await fetch(profileUrl);
        // const profile = await profileResponse.json();

        // const repoUrl = `https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`;
        // const repoUrlResponse = await fetch(repoUrl);
        // const repo = await repoUrlResponse.json();

        // return {
        //     profile, repo
        // }

        let result = {};

        let inputs = [{
            url: `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`,
            role: "profile"
        }
            , {
            url: `https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`,
            role : "repos"
        }];


        for (const index in inputs) {
            let response = await fetch(inputs[index].url);
            let data = await response.json();
            result[inputs[index].role] = data;
        }
        return result;

    }
}

// let git = new Github;
// git.getUser('pradeeppadmarajaiah').then(data => console.log(data)).catch(err => console.log(err));