
let a = 1
function lanjut() {
    a += 1
    let b = a
    const apologyText = document.getElementById("apologyText");
    const contain = document.getElementById("container")
    if (b == 2) {
        contain.innerHTML = `<div class="container-1">
        <div class="bg-content">
            <p id="apologyText" class="text-message">Lebaran berapa hari lagi nih?</p>
        </div>
        <div class="container-btn" id="containerBtn">
            <button onclick="lanjut()" class="btn maaf">Lanjut</button>
        </div>
    </div>`
    }
    if (b == 3) {
        contain.innerHTML = `<div class="container-1">
        <div class="bg-content">
            <p id="apologyText" class="text-message">Maaf Ya Kalo ada salah, Namanya juga Manusia😅</p>
        </div>
        <div class="container-btn" id="containerBtn">
            <button onclick="lanjut()" class="btn maaf">Lanjut</button>
        </div>
    </div>`
    }
    if (b == 4) {
        contain.innerHTML = `<div class="container-1">
        <div class="bg-content">
            <p id="apologyText" class="text-message">Di Maafin Gak Nih 🙄</p>
        </div>
        <div class="container-btn" id="containerBtn">
            <button onclick="lanjut()" class="btn maaf">Maafin</button>
            <button id="denyButton" class="btn tolak">GAK!!</button>
        </div>
    </div>`
        document.getElementById('denyButton').addEventListener('click', deny)
    }
    if (b == 5) {
        contain.innerHTML = `<div class="container-1">
        <div class="bg-content">
            <p id="apologyText" class="text-message">Makasih ya, Kirim pesan Yuk ✉</p>
        </div>
        <div class="container-btn" id="containerBtn">
            <button onclick="lanjut()" class="btn maaf">Kirim Pesan ✉</button>
        </div>
    </div>`
    }
    if (b == 6) {
        window.location.assign("https://wa.me/6281999622231")
    }
    console.log(a)
}

let i = 0
function deny() {
    i += 1
    let btn = document.getElementById('denyButton')
    let container = document.querySelector('body')
    console.log(container)
    const maxX = container.clientWidth / 2
    const maxY = container.clientHeight / 2

    console.log(maxX, maxY)

    const randomX = Math.random() * maxX
    const randomY = Math.random() * maxY

    btn.style.position = 'fixed'
    btn.style.left = randomX + 'px'
    btn.style.bottom = randomY + 'px'

    if (i == 10) {
        alert("Nek Due masalah PM!")
        window.location.assign("https://wa.me/6281999622231")
    }
}
