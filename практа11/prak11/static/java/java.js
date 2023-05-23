var names = []
var week = ['ПОНЕДЕЛЬНИК', "ВТОРНИК", "СРЕДА", "ЧЕТВЕРГ", "ПЯТНИЦА", "СУББОТА"]
var item1 = [ "Операционные системы и среды", "Основы проектировки баз данных", "Разработка мобильных приложений", "Разработка программных модулей", "Элементы высшей математики", "Компьютерные сети", "Теория вероятности и статистики", "Системное программирование", "Основы алгоритмизации и программирования", "Поддержка и тестрование программных модулей", "Иностранный язык", "Физическая культура", "Информационные технологии", "Безопасность жизнедеятельности", "История", "ПРАКТИКА"]
var ou = ['o1', 'o2', 'o3', 'o4', 'o5', 'o6', 'o7', 'o8', 'o9', 'o10', 'o11', 'o12', 'o13', 'o14', 'o15']
var ia = ['n1', 'n2', 'n3', 'n4', 'n5', 'n6', 'n7', 'n8', 'n9', 'n10', 'n11', 'n12', 'n13', 'n14', 'n15']
var ch = 0
var anim = ['ws', 'sw']
var mesto = [ 'm1', 'm2', 'm3', 'm4', 'm5', 'm6']
var title = ['ФИО', "Возраст", "Группа", "Должность", "Учебное заведение"]
var user = ["",'17 лет', 'П50-7-21','Студент','Московский приборостроительный техникум']
var imageurl = 'https://avatars.mds.yandex.net/i?id=c92d12034e1018467c670d6771d15fddb54159b0-9235953-images-thumbs&n=13'
function g(){
    if (document.getElementById("s2").style.display != "flex"){
        document.getElementById("s2").style.display = "flex" 
        document.getElementById("s1").style.display = "none" 
    }
    else{
        document.getElementById("s2").style.display = "none" 
        document.getElementById("s1").style.display = "flex" 
    }
}

function baza(){
    var start = new Date()
    var finish = new Date(2025, 6,30)
    var rezult = (finish-start)/(1000*60*60*24)
    document.getElementById('group').textContent = "Группа: " + user[2]
    document.getElementById('date').textContent = "До конца обучения: " + parseInt(rezult - 30.0)
}

function jh(){  
    ch = rnd(week.length)
    baza()
    document.getElementById('weekDay').textContent = week[ch]
    for (var i = 0; i< mesto.length; i++){
        document.getElementById(mesto[i]).textContent = item1[rnd(item1.length)]
    }
    for (var i = 0; i< mesto.length; i++){
        if (document.getElementById(mesto[i]).textContent == 'ПРАКТИКА'){
            for (var j = 0; j< mesto.length; j++){
                document.getElementById(mesto[j]).textContent = 'ПРАКТИКА'
            }
            break
        }
    }
}
function v(id){
    document.getElementById(id).style.display = "block"
    document.getElementById(id).style.position = "absolute"

}
function o(id){
    document.getElementById(id).style.display = "none"
}
function hh(id){
    document.getElementById(id).style.display = "block"
}
function rnd(max){
    return  Math.floor(Math.random() * max)
}
function jc(){  
    baza()
    setTimeout(() =>ggwp(), 2100);
    var w = document.getElementById('oc').getElementsByTagName('div')
    for(var i = 0; i<  ia.length; i++){
        w[i].style.animation = anim[rnd(2)] + ' ' + (i+5)/10 + 's'
    }
}
function ggwp(){
    for (var f = 0; f < ia.length; f++){
        document.getElementById(ia[f]).textContent = item1[f]
    }
    let ocenka = ""
    for (var s = 0; s<ou.length; s++){
        ocenka = ""
        for (var k = 0; k < parseInt(15 - 0.5 + Math.random() * (25 - 10 + 1)); k++){
            ocenka += parseInt(4 - 0.5 + Math.random() * (5 - 4 + 1)) + "\t"
        }
        document.getElementById(ou[s]).textContent = ocenka
    }
    for(var i = 0; i<= ia.length-1; i++){
        let an = anim[rnd(1)] + i/10 + 0.1 + 's'
        w[i].style.animation = an
    }
    var q = document.getElementById('oc').getElementsByTagName('div').getElementsByTagName('label')
    for(var i = 0; i< q.length; i++){
        let an = anim[rnd(2)] + ' ' + (i+5)/10 + 's ease'
        q[i].style.animation = an
    }
}
function jy(){
    baza()
    for (var i = 0; i < 6; i++){
        var div = document.createElement("div")
        let idd = 'n' + i
        div.id = idd
        div.style.background = 'ulr(https://img.freepik.com/free-vector/gradient-black-background-with-wavy-lines_23-2149151738.jpg?w=740&t=st=1681393987~exp=1681394587~hmac=e0d0ecd2a631f52803019e72bcf6cb7729c892a72ccbf08412d66e0bb2b97c9a)'
        div.style.backgroundSize = 'cover'
        div.style.backgroundRepeat = 'no-repeat'
        div.style.padding = '-5%'
        div.style.border = 'white 1px solid'
        var hr = document.createElement('hr')
        hr.style.borderImage = 'linear-gradient(108deg, black 15%, purple 70%, black )'
        hr.style.borderImageSlice = '1'
        hr.style.width = '50%'
        div.innerHTML = week[i]
        div.style.display = 'flex'
        div.style.flexDirection = 'column'
        div.style.alignItems = 'center'
        div.style.justifyContent = 'start'
        div.style.marginTop = '2%'
        div.style.marginLeft = '1%'
        document.getElementById('rpuz').appendChild(div)
        document.getElementById(idd).appendChild(hr)
        var div = document.createElement('div')
        let u = 'p' + i
        div.id = u
        div.style.display = 'flex'
        div.style.flexDirection = 'column'
        if(ret() < 420){
            div.style.fontSize = '14px'
        }
        div.style.justifyContent = 'center'
        div.style.alignItems = 'center'
        document.getElementById(idd).appendChild(div)
        for (var j = 0; j < parseInt(3 - 0.5 + Math.random() * (5 - 3 + 1)); j++){
            var p = document.createElement('p')
            p.innerHTML = item1[parseInt(1 - 0.5 + Math.random() * (( item1.length - 1)  - 2 + 1))]
            p.style.padding = '2%'
            p.style.textAlign = 'center'
            p.style.padding = '0 10%'
            document.getElementById(u).appendChild(p)
        }
    }
}
function update(){
    document.getElementById('information').innerHTML = ' '
    document.getElementById('blockWithImage').innerHTML = ''
    setTimeout(() => document.getElementById('profile').style.display = 'none', 500)
    document.getElementById('profile').style.animation = 'fade 0.6s ease'
    setTimeout(() => document.getElementById('newProfile').style.display = 'flex', 600)
    var img = document.createElement('img')
    img.src = imageurl
    img.alt = "Изображение не найдено"
    img.style.width ='80%'
    document.getElementById('blockWithImage').appendChild(img)
    var input = document.createElement('input')
    input.value = 'Изменить фото'
    input.id = 'text_1'
    input.setAttribute('class', 'button')
    input.style.borderRadius = '20px'
    input.style.width = '100%'
    input.setAttribute('onclick', 'opa()')
    input.type = 'button'
    document.getElementById('blockWithImage').appendChild(input)
    var input = document.createElement('input')
    input.id = 'text1'
    input.placeholder = 'Введите URL'
    input.style.textAlign = 'center'
    input.type = 'text'
    input.style.width = '100%'
    input.style.borderRadius = '20px'
    input.style.display = 'none'
    document.getElementById('blockWithImage').appendChild(input)
    var input = document.createElement('input')
    input.value = 'Сохранить фото'
    input.style.width = '100%'
    input.style.display = 'none'
    input.setAttribute('class', 'button')
    input.style.borderRadius = '20px'
    input.id = 'text2'
    input.setAttribute('onclick', 'opa_2()')
    input.type = 'button'
    document.getElementById('blockWithImage').appendChild(input)
    for(var i = 0; i< 5; i++){
        let s = 'sa'+i
        var div = document.createElement('div')
        div.style.border = '1px solid red'
        div.style.marginTop = '0.5%'
        div.style.marginBottom = '2%'
        div.style.width = '80%'
        div.style.display = 'flex'
        div.style.justifyContent = 'space-between'
        div.style.padding = '1%'
        div.id = s
        div.style.borderRadius = '20px'
        document.getElementById('information').appendChild(div)
        var label = document.createElement('p')
        label.innerHTML = title[i]
        label.style.color = 'grey'
        document.getElementById('sa'+i).appendChild(label)
        var j = document.createElement('input')
        j.type = 'text'
        j.placeholder = 'новое значение'
        j.style.backgroundColor = '#a9a9a9'
        j.style.color = 'black'
        j.style.borderRadius = '30px'
        j.style.textAlign = 'center'
        document.getElementById('sa'+i).appendChild(j)
    }
    var input = document.createElement('input')
    input.value = 'Сохранить изменения'
    input.id = 'final'
    input.style.borderRadius = '20px'
    input.style.height = '10%'
    input.style.marginBottom = '5%'
    input.style.background = 'black'
    input.setAttribute('class', 'button')
    input.style.color = 'grey'
    input.setAttribute('onclick', 'rezult()')
    input.type = 'button'
    document.getElementById('information').appendChild(input)
    var w = document.getElementById('information').getElementsByTagName('div')
    for(var i = 0; i < w.length; i++){
        w[i].getElementsByTagName('input')[0].value = user[i]

    }
}
function jt(){ 
    document.getElementById('imagediv').innerHTML = ''
    baza()
    var img = document.createElement('img')
    img.src = imageurl
    document.getElementById('imagediv').appendChild(img)
    document.getElementById('txt').innerHTML = ''
    for(var i = 0; i< 5;i++){
        var p = document.createElement('p')
        p.innerHTML = user[i]
        document.getElementById('txt').appendChild(p)
    }
    var input = document.createElement('input')
    input.value = 'Изменить данные'
    input.type = 'button'
    input.style.background = 'black'
    input.style.color = 'grey'
    input.id = 'bt1'
    input.setAttribute('onclick', 'update()')
    document.getElementById('txt').appendChild(input)
}
function opa(){
    document.getElementById('text_1').style.display = 'none'
    document.getElementById('text1').style.display = 'block'
    document.getElementById('text2').style.display = 'block'
}
function opa_2(){
    if (document.getElementById('text1').value != ""){
        imageurl = document.getElementById('text1').value
    }
    document.getElementById('text1').style.display = 'none'
    document.getElementById('text2').style.display = 'none'
    var w = document.getElementById('information').getElementsByTagName('div')
    user = []
    for(var i = 0; i < w.length; i++){
        if(w[i].getElementsByTagName('input')[0].value != ''){
            user.push(w[i].getElementsByTagName('input')[0].value)
        }
    }
    document.getElementById('information').innerHTML = ' '
    update()
}
function rezult(){
    var w = document.getElementById('information').getElementsByTagName('div')
    for(var i = 0; i < 5; i++){
        document.getElementById('txt').style.display = 'block'
        user[i] = w[i].getElementsByTagName('input')[0].value
    }
    document.getElementById('newProfile').style.display = 'none'
    document.getElementById('profile').style.display = 'flex'
    document.getElementById('profile').style.animation = 'none'
    document.getElementById('txt').style.display = 'none'
    document.getElementById('txt').style.display = 'block'
    jt()
}
function bdlclick(){
    alert(document.documentElement.clientWidth)
}
function ret(){
    return document.documentElement.clientWidth
}