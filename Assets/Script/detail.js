new Vue({
    el: '#app',
    data: {
        buku: null
    },
    created() {
        const urlParams = new URLSearchParams(window.location.search);
        const id = urlParams.get('id');

        fetch('/Assets/Data/buku.json')
            .then(response => response.json())
            .then(data => {
                this.buku = data.find(item => item.id == id);
            })
            .catch(error => console.error('Error:', error));
    }
});
