
console.log(kolobok('лиса'))
function kolobok( name ){
    switch(name){
        case 'дедушка':
            return 'Я от дедушки ушел'
        case 'заяц':
            return "Я от зайца ушел"
        case "лиса":
            return "от Лисы не ушел"
        default: 
            return 'Не было такого'   
    }
}



const text1 = 'Дед мороз красный нос'
const text2 = 'Снегурочка где ты была?'
const name1 = "Дед"
const name2 = "Снегурка"
function newYear(name){
    switch(name) {
        case name1:
            return text1
        case name2:
            return text2
            default:
                return 'Новый год !'   
    }
}

console.log(newYear("лллл"))


