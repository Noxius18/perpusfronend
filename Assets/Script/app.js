new Vue({
    el: '#app',
    data: {
        buku: []
    },
    created() {
        this.ambilBuku();
    },
    methods: {
        ambilBuku() {
            fetch('/api/buku')
                .then(response => response.json())
                .then(data => this.buku = data)
                .catch(error => console.error('Error:', error));
        },
        tambahBuku(bukuBaru) {
            fetch('/api/tambah', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(bukuBaru)
            })
            .then(response => response.json())
            .then(data => {
                if (data.message) {
                    this.buku.push(bukuBaru);
                }
            })
            .catch(error => console.error('Error:', error));
        }
    }
});
