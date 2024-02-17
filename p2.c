//Implement pow(x, n), which calculates x raised to the power n (i.e., xn).
#include <stdio.h>

int main() {
    int base = 2;
    int n = 8;
    
    int result = 1.0;
    for (int i = 0; i < n; ++i) {
        result *= base;
    }
    
    printf("%d raised to the power %d is: %d\n", base, n, result);

    return 0;
}