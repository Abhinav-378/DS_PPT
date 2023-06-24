#include <stdio.h>

void merge(int* nums1, int m, int* nums2, int n) {
    int i = m - 1; 
    int j = n - 1; 
    int k = m + n - 1; 

    // Merging in descending order
    while (i >= 0 && j >= 0) {
        if (nums1[i] >= nums2[j]) {
            nums1[k] = nums1[i];
            i--;
        } else {
            nums1[k] = nums2[j];
            j--;
        }
        k--;
    }

    // Copy remaining elements from nums2 if any
    while (j >= 0) {
        nums1[k] = nums2[j];
        j--;
        k--;
    }
}

int main() {
    int nums1[6] = {1, 3, 5, 0, 0, 0};
    int nums2[3] = {2, 4, 6};
    int m = 3;
    int n = 3;

    merge(nums1, m, nums2, n);

    printf("Merged Array: ");
    for (int i = 0; i < m + n; i++) {
        printf("%d ", nums1[i]);
    }

    return 0;
}
