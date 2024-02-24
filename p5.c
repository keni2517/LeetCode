#include <stdbool.h>

bool isUgly(int n) {
    if (n <= 0) {
        return false;
    }

    
    while (n % 2 == 0) {
        n /= 2;
    }

    while (n % 3 == 0) {
        n /= 3;
    }

    while (n % 5 == 0) {
        n /= 5;
    }


    return n == 1;
}

int main() {
    int num = 30;  

    if (isUgly(num)) {
        printf("%d is an ugly number.\n", num);
    } else {
        printf("%d is not an ugly number.\n", num);
    }

    return 0;
}