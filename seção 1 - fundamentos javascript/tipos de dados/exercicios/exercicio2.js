function ladosTriangulo(a, b, c){
    if ((a != b)&&(b != c)&&(a != c)){
        console.log('Escaleno')
    }
    else if ((a == b)&&(b == c)&&(a == c)){
        console.log('Equilátero')
    }
    else {
        console.log('Isósceles')
    }
}

ladosTriangulo(4, 4, 4)