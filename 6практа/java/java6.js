let user = null
let us = 1
let users = 0
let group = null
let password = null
let grupa = 0
let ch1 = 0
let ch2 = 0
var imgi = ['https://mpt.ru/upload/iblock/b87/%D0%90%D0%B1%D1%80%D0%B0%D0%BC%D0%BE%D0%B2%20%D0%A1%D0%B5%D1%80%D0%B3%D0%B5%D0%B9%20%D0%90%D0%BD%D1%82%D0%BE%D0%BD%D0%B8%D0%B4%D0%BE%D0%B2%D0%B8%D1%87.jpg', 'https://mpt.ru/upload/iblock/cde/%D0%91%D0%B5%D0%B7%20%D0%B8%D0%BC%D0%B5%D0%BD%D0%B8-1.jpg', 'https://mpt.ru/upload/iblock/eb2/%D0%A1%D1%83%D0%B4%D0%BE%D0%BF%D0%BB%D0%B0%D1%82%D0%BE%D0%B2.jpg', 'https://mpt.ru/upload/iblock/98d/andryukov-andrey-viktorovich.jpg', 'https://mpt.ru/upload/iblock/28a/%D0%9F%D1%80%D0%B5%D0%BF%D0%BE%D0%B4%D0%B0%D0%B2%D0%B0%D1%82%D0%B5%D0%BB%D1%8C%20%D0%93%D0%BE%D0%BB%D0%B5%D1%83%D1%81%D0%BE%D0%B2%D0%B0%20%D0%AD%D0%BC%D0%BC%D0%B0%20%D0%92%D0%BB%D0%B0%D0%B4%D0%B8%D0%BC%D0%B8%D1%80%D0%BE%D0%B2%D0%BD%D0%B0.jpg', 'https://www.rea.ru/ru/org/colleges/instrcol/SiteAssets/Pages/portfolio/bukanov-ilya-dmitrievich.jpg', 'https://mpt.ru/upload/iblock/228/IMG_3607.JPG', 'https://mpt.ru/upload/iblock/a90/%d0%95%d1%80%d0%bc%d0%b0%d0%ba%d0%be%d0%b2%20%d0%90.%d0%92..JPG']

var imgang = ['https://www.rea.ru/ru/org/colleges/instrcol/SiteAssets/Pages/seryak-daniil-vladimirovich/seryak-daniil-vladimirovich.jpg', 'https://www.rea.ru/ru/org/colleges/instrcol/PublishingImages/Pages/portfolio/molodtsova-anna-gennadevna.jpg', 'https://mpt.ru/upload/iblock/065/1bjNnZTLQD1nkSgnjVQYprtZWH-qS7dPtQ8oE9ivpTdJJHOid.jpg', "https://mpt.ru/upload/iblock/b08/%d0%9a%d0%bb%d1%8e%d1%87%d0%bd%d0%b8%d0%ba%20%d0%92%d0%bb%d0%b0%d0%b4%d0%bb%d0%b5%d0%bd%20%d0%98%d0%b2%d0%b0%d0%bd%d0%be%d0%b2%d0%b8%d1%87%20%d0%bf%d1%80%d0%b5%d0%bf%d0%be%d0%b4%d0%b0%d0%b2%d0%b0%d1%82%d0%b5%d0%bb%d1%8c.jpg", 'https://www.rea.ru/ru/org/colleges/instrcol/SiteAssets/Pages/skorogudaeva-sofiya-alekseevna/skorogudaeva-sofiya-alekseevna.jpg']

let rpp7 = 'Вторник\nИнглиш\nФиз-ра'
function v(){
    if(document.getElementById("setting").style.display == "block"){
        document.getElementById("setting").style.display = "none"
    }
    else{
        document.getElementById("setting").style.display = "block"
        document.getElementById("setting").style.backgroundSize = 'cover'
    }
}
function gg(){
    alert('Функция недоступна')
}

function helpa(){
    alert('Если вы ни разу не были зарегестрированы на нашем сайте, просьба пройти регистрацию для полного функционала и удобного пользования')
}
function save_data(){
    if (document.getElementById('nam').value != '' && document.getElementById('gru').value != '' && document.getElementById('pas').value != ''){
        users+=1
        if (document.getElementById('gru').value.toUpperCase() == 'П50-7-21' || document.getElementById('gru').value.toUpperCase() == 'П50-4-21'){
            group = document.getElementById('gru').value.toUpperCase()
            user = document.getElementById('nam').value
            password = document.getElementById('pas').value
            alert("Вы авторизованы как " + user)
            us+=1
            document.getElementById("alll").style.display = "none"
            document.getElementById("setting").style.display = "none"
        }
    }
    else{
        alert("Вы не заполнили все поля!")
    }
}
function cl(){
    document.getElementById("alll").style.display == "none"
}
function information(){
    document.getElementById('Text_page').style.display = 'block'
    document.getElementById('setting').style.display = 'none'
}
function tuda1(){
    ch1+=1
    if (ch1 == imgi.length){
        ch1=0
    }
    document.getElementById('suda1').src = imgi[ch1]
}
function tuda2(){
    ch2+=1 
    if (ch2 == imgang.length){
        ch2=0
    }
    document.getElementById('suda2').src = imgang[ch2] 
}
function n2(){
    document.getElementById('n1').style.display = 'none'
    document.getElementById('n2').style.display = 'block'
}
function st(){
    document.getElementById('n1').style.display = 'flex'
    document.getElementById('n2').style.display = 'none'
}
