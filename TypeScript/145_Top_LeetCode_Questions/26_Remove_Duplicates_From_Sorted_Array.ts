
// O(n) time complexity
// O(1) space complexity
function removeDuplicates(nums: number[]): number {
    
    if (nums.length == 0){
        return 0
    }
    
    var k = 0;
    
    for (let i = 1; i < nums.length; i++){
       if (nums[i] != nums[k]) {
           k++;
           nums[k] = nums[i]
       }
    }
    return k+1
};


// test case
// [1,1,2]
// [0,0,1,1,1,2,2,3,3,4]
// [0,0,1,1,1,2,2,3,3,4,6,6,7,7,8,8,9,9,10,10]

// Runtime: 111 ms, faster than 58.77% of TypeScript online submissions for Remove Duplicates from Sorted Array.
// Memory Usage: 45.8 MB, less than 22.72% of TypeScript online submissions for Remove Duplicates from Sorted Array.