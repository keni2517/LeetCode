//Given an integer n, return the number of trailing zeroes in n!.

{
    let n = 5;
    let fact = 1;
    let i = 1;
    console.log("Factorial number");
    while (i <= n) {
        fact = fact * i;
        i++;
    }
    console.log(fact);
}