import fs from 'fs';
import path from 'path';

export default function handler(req, res){
    if(req.method === 'POST'){
        const { Judul, Deskripsi, Sinopsis, Penulis, Gambar } = req.body;

        const bukuBaru = { Judul, Deskripsi, Sinopsis, Penulis, Gambar };

        const filePath = path.join(process.cwd(), 'Data', 'buku.json');
        const fileData = fs.readFileSync(filePath, 'utf-8');
        const buku = JSON.parse(fileData);

        buku.push(bukuBaru);

        fs.writeFileSync(filePath, JSON.stringify(buku, null, 2));

        res.status(200).json({ message: 'Buku berhasil ditambahkan!'});
    }
    else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end('Method ${req.method} tidak dizinkan');
    }
}