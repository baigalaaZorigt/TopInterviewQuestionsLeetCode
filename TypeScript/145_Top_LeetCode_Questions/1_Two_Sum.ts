// time complexity --> O(n2) 
// space complexity --> O(1) 
function twoSum(nums: number[], target: number): number[] { 
  // var value = 0;
  // for (let i = 0; i < nums.length; i++) {
  //     for (let j = i+1; j < nums.length; j++){
  //         value = nums[i] + nums[j]
  //         if (value == target) {
  //             return [i, j]
  //         }
  //     }
  //   console.log ("None target value");
  // }

// time complexity --> O(n) 
// space complexity --> O(n) 
  var result_dic = {};
  var dic_key = 0;
  for (let i = 0; i < nums.length; i++) {
      
      dic_key = target - nums[i]
      
      if (dic_key in result_dic){
          return [i, result_dic[dic_key]] 
      }
      result_dic[nums[i]] = i
  }
  console.log ("None target value");
};
// test case
// [2,7,11,15]
// 9
// [3,2,4]
// 6
// [3,3]
// 6

// Runtime: 122 ms, faster than 48.89% of TypeScript online submissions for Two Sum.
// Memory Usage: 45.6 MB, less than 26.30% of TypeScript online submissions for Two Sum.
