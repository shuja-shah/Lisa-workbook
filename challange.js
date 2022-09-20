let n = 5, k = 3, arr = [4, 2, 6, 1, 10];


function workbook(n, k, arr) {
    // Write your code here
    let special = 0;
    let page = 1;
    for (let i = 0; i < arr.length; i++) {
        let problems = arr[i];
        let problem = 1;
        while (problem <= problems) {
            if (problem === page) {
                special++;
            }
            if (problem % k === 0 || problem === problems) {
                page++;
            }
            problem++;
        }
    }
    return special;
}
console.log(workbook(n, k, arr));
