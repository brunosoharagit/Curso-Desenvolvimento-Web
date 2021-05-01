function fun1(){
    return 'Olá mundo'
}

const fun2 = function(){
    return 'Olá mundo'
}

console.log(fun1());
console.log(fun2());

const obj = {}
obj.falar = function() { return 'Opa!!' }

console.log(obj.falar());

function run(func){
    func()
}

run(function() { console.log('Executando função. . .') })

function soma(a, b){
    return function(c){
        console.log(a + b + c);
    }
}