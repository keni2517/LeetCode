//Given an integer n, return the number of trailing zeroes in n!.

{
    let n = prompt("enter n:");
    let fact = 1;
    let i;
    console.log("Factorial number");
    for (i = 1; i <= n; i++) {
        fact = fact * i;
    }
    console.log(fact);
}