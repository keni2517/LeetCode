//Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.

let i;
  let temp = [];
  for (i = 0; i <= N; i++) {
            temp[i] = 0;
        }

        for (i = 0; i < N; i++) {
            temp[arr[i] - 1] = 1;
        }

        let ans = 0;
        for (i = 0; i <= N; i++) {
            if (temp[i] == 0)
                ans = i + 1;
        }
        console.log(ans);

        let arr = [ 1, 3, 7, 5, 6, 2 ];
        let n = arr.length;

        // Function call
       findMissing(arr,n);
