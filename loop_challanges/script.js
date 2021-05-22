//1.Print odds 1-20
for(var i = 1; i < 20; i+=2){
    console.log(i);
}

//2.Decreasing Multiples of 3
for(var i = 100; i >= 0; i--){
    if(i % 3 == 0){
        console.log(i);
    }
}

//3.Print the sequence
for (var i = 4; i>=-3.5; i-=1.5 ){
    console.log(i);
}

//4.Sigma
sum = 0;
for (var i = 1; i <= 100; i++){
    console.log(i);
    sum += i;
}
console.log(sum);

//5.Factorial
mult=1
for (var i = 1; i<= 12; i++){
    console.log(i)
    mult *= i
}
console.log(mult)
