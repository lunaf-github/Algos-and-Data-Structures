/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    // Perform binary search on the smallest array
    if (nums1.length > nums2.length) return findMedianSortedArrays(nums2, nums1);

    const a = nums1;
    const b = nums2;
    const totalLength = a.length + b.length; 
    const halfLength = Math.floor((totalLength + 1) / 2);

    let l = 0;
    let r = nums1.length;

    while (l <= r) {
        const aMid = l + Math.floor((r - l)/2);
        const bMid = halfLength - aMid;
        // console.log(halfLength, 'halfLength: 2')
        // console.log(aMid, "aMid: 0")
        // console.log(bMid, "bMid: 2")

        const aLeft = (aMid === 0)? -Infinity : a[aMid - 1];
        const aRight = (aMid === a.length)? Infinity : a[aMid];
        const bLeft = (bMid === 0)? -Infinity : b[bMid - 1];
        const bRight = (bMid === b.length)? Infinity : b[bMid];

        if (aLeft <= bRight && bLeft <= aRight) {
            if (totalLength % 2 === 0) {
                const sum = Math.max(aLeft, bLeft) + Math.min(aRight, bRight);
                return sum / 2; 
            } else {
                return Math.max(aLeft, bLeft);
            }
        }

        if (aLeft > bRight) {
            r = aMid - 1;
        } else {
            l = aMid + 1;
        }
    }

    return 0.0;

}


//  Add 1 to Amid because the array is 0 based, adding one will give us the number of elements from the beginning to m
//  Subtract 1 from halfLength because we are also 0 based, 
// now that we have caculated the number of elements from the 
// left side of m  (including m), we need to take account for
// number of elements and not the index. 

//         const Bmid = (halfLength - 1) - (Amid + 1)
//     }              = halfLength - 1 - Amid -1
//                    = halfLength - 2 - Amid; 

// };

// half = 3
// Amid = 3 - (1 + 1) = 1 <--- if we don't subract 1, we will get the number of elements instead of the index

// 1 3 5

// 2 4
//   m
// |__|
//  2 elements