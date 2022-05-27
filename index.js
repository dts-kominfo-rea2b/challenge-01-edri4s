// TODO: Buatlah data dari kedua user di sini
// Tentukan tipe data dan struktur data yang menurut kalian tepat
// Kalian bisa membuat variabel lain untuk dimasukkan ke dalam atribut user agar lebih mudah dibaca

//Set warna agar tidak sama
const colorUser1=new Set(["Yellow", "Pink", "White", "Purple"]);
const colorUser1_array = Array.from(colorUser1);

const colorUser2=new Set(["Blue", "Black", "Grey"]);
const colorUser2_array = Array.from(colorUser2);

//Set restaurant agar tidak sama
const restoUser1=new Set(["Bento", "Sushi", "Pancake", "Eggy", "Tempura", "Bento", "Eggy", "Padang", "Tteok", "Sushi", "Sushi"]);
const restoUser1_array = Array.from(restoUser1);

const restoUser2=new Set(["Tempura", "Bento", "Sushi", "Pancake", "Padang", "Katsu", "Geprek", "Pancake", "Eggy"]);
const restoUser2_array = Array.from(restoUser2);


const firstUser = {
    name: "Monica",
    gender: "Female",
    age: 17,
    email: "monica@dingdong.com",
    favoriteColor: colorUser1_array,
    isHavePet: true,
    education: [
        { name: "SD 01", city: "Jakarta", graduate: 2016 },
        { name: "SMP 02", city: "Jakarta", graduate: 2019 },
        { name: "SMA 03", city: "Tangerang" },
    ],
    favoriteRestaurant: restoUser1_array
};

const secondUser = {
    name: "Wendy",
    gender: "Male",
    age: 23,
    email: "wendy@dingdong.com",
    favoriteColor: colorUser2_array,
    isHavePet: false,
    education: [
        { name: "SD 02", city: "Jakarta", graduate: 2010 },
        { name: "SMP 03", city: "Bogo", graduate: 2013 },
        { name: "SMA 01", city: "Surabaya", graduate: 2016 },
        { name: "Universitas Maju", city: "Tangerang" },
    ],
    favoriteRestaurant: restoUser2_array
};

// TODO: Masukkan hasil akhir dari kedua user di sini
const users = [firstUser, secondUser];

// ! JANGAN MODIFIKASI LINE DI BAWAH
function main() {
    console.log(users.length || users.size);
    console.log(users);
}

main();

module.exports = {
    users
};