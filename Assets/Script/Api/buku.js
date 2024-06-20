import { buku } from '../../Data/buku.json';

export default function handler(req, res){
    if(req.method === 'GET'){
        res.status(200).json(buku);
    }
    else{
        res.setHeader('Allow', ['GET']);
        res.status(405).end('Method ${req.method} tidak diizinkan');
    }
}