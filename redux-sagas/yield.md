function\* count(){
yield 1
yield 2
return yield 3
}

const c = count()
c.next() -> {value:1,done:false}
so vai ser true quando vc chamar o c.next 3x e ela bater no return

vc pode jogar um while dentro ele pode rodar infinito em toda call

function* square(x){
while(true){
x = x * 2
yield x
}
}
const s = square(4)

s.next()
