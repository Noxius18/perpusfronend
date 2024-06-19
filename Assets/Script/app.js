new Vue({
    el: '#app',
    data: {
        buku: []
    },
    created() {
        fetch('/Assets/Data/buku.json')
            .then(response => response.json())
            .then(data => this.buku = data)
            .catch(error => console.error('Error:', error));
    }
});