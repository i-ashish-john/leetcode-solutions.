#include <limits.h>

int reverse(int x) {
    long r = 0;
    while (x != 0) {
        r = r * 10 + x % 10;
        x = x / 10;
    }
    if (r > INT_MAX || r < INT_MIN) {
        return 0;
    }
    return (int)r;
}