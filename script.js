let buah = [
    {
        nama: "Pepaya",
        namaLatin: "Carica Papaya",
        kingdom: "Plantae",
        img: "./asset/img/pepaya.jpg",
    },
    {
        nama: "Kelapa",
        namaLatin: "Cocos nucifera",
        kingdom: "Plantae",
        img: "./asset/img/kelapa.jpg",
    },

    {
        nama: "Durian",
        namaLatin: "Durio Zibethinus",
        kingdom: "Plantae",
        img: "./asset/img/durian.jpg",
    },

    {
        nama: "Ketimunan",
        namaLatin: "Timonius sericcus",
        kingdom: "Plantae",
        img: "./asset/img/ketimun.jpg",
    },

    {
        nama: "Mangga",
        namaLatin: "Magnifera indica",
        kingdom: "Plantae",
        img: "./asset/img/mangga.jpg",
    },

    {
        nama: "Gandaria",
        namaLatin: "Bouea mcrophylla",
        kingdom: "Plantae",
        img: "./asset/img/gandaria.jpeg",
    },

    {
        nama: "Sukun",
        namaLatin: "Artocarpus communis",
        kingdom: "Plantae",
        img: "./asset/img/sukun.jpg",
    },

    {
        nama: "Pisang",
        namaLatin: "Musa paradisiaca",
        kingdom: "Plantae",
        img: "./asset/img/pisang.jpeg",
    },

    {
        nama: "Apel",
        namaLatin: "Malus sylvestris",
        kingdom: "Plantae",
        img: "./asset/img/apel.jpg",
    },

    {
        nama: "Srikaya",
        namaLatin: "Annona squamosa",
        kingdom: "Plantae",
        img: "./asset/img/srikaya.jpg",
    },

    {
        nama: "Anggur",
        namaLatin: "Vitis vinivera",
        kingdom: "Plantae",
        img: "./asset/img/anggur.jpg",
    },

    {
        nama: "Duku",
        namaLatin: "lansium domesticum",
        kingdom: "plantae",
        img: "./asset/img/duku.jpg",
    },
];

const displayBuah = () => {
    buah.forEach((ambilData, data) => {
        let tampil = document.getElementById("content1");
        let cards = document.createElement("div");
        cards.setAttribute("class", "display-card");
        cards.innerHTML = `
        <img src="${ambilData.img}" class="header" alt="${ambilData.nama}" />
        <div class="card-body">
        <h4 class="card-title">${ambilData.nama}</h4>
          <div class="card-text">
            <span>
            Kingdom: ${ambilData.kingdom}
          </span><br/>
          <span>
            Nama Latin: ${ambilData.namaLatin}
          </span>
          </div>
    `;
        tampil.appendChild(cards);
    });
};
displayBuah();
