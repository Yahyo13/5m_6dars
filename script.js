let a = [`olma`, `banan`, `gilos`, `kiwi` ]
alert(a)
let b = confirm(`Meva qoshish`)

if(b == true){
    a.push(`mandarin`)
    console.log(a);
    alert(a)
}else{
    console.log(`bye bye`);
    alert(`bye bye`)
}