<?php
if(isset($_POST['tambah'])){
    $judul = $_POST['judul'];
    $penulis = $_POST['penulis'];
    $deskripsi = $_POST['deskripsi'];
    $sinopsis = $_POST['sinopsis'];

    $target_dir = "../Assets/Images/Cover/";
    $target_file = basename($_FILES['cover']['name']);
    $path = $target_dir . $target_file;
    $fileType = pathinfo($path, PATHINFO_EXTENSION);

    $extension = array('jpg', 'png', 'jpeg', 'webp');
    if(in_array($fileType, $extension)){
        if(move_uploaded_file($_FILES['cover']['tmp_name'], $path)){
            $json_data = file_get_contents('../Assets/Data/buku.json');
            $buku = json_decode($json_data,true);

            $idBaru = (end($buku)['id'] ?? 0) + 1;

            $buku[] = [
                'id' => $idBaru,
                'Judul' => $judul,
                'Deskripsi' => $deskripsi,
                'Sinopsis' => $sinopsis,
                'Penulis' => $penulis,
                "Gambar" => '/Assets/Images/Cover/'.$target_file
            ];

            file_put_contents("../Assets/Data/buku.json", json_encode($buku, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES));

            header("Location: ../input.html");
            exit();
        }
        else{
            echo 'Gagal input gambar';
        }
    }
}