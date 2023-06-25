# Unibit Games Assignment



## Combination Finder

This JavaScript program finds combinations of numbers in an array that add up to a target value.

### Functions

- `findCombinations(arr, target)`: This function takes in an array of numbers and a target value. It returns an array of pairs of numbers from the input array that add up to the target value.

- `removeDuplicates(arr)`: This function takes in an array of arrays and removes any duplicate arrays. It returns an array with unique arrays.

- `mergeAndSort(arr)`: This function takes in an array of arrays, merges them into a single array, and sorts the resulting array in ascending order. It returns the sorted merged array.

- `findCombinationsForDoubleTarget(arr, target)`: This function takes in an array of numbers and a target value. It returns an array of combinations of numbers from the input array that add up to double the target value.

#### Example

The program includes an example with an input array `[1, 3, 2, 2, -4, -6, -2, 8]` and a target value `4`.

The first combination for `4` is `[ [ 1, 3 ], [ 2, 2 ], [ 2, -6 ], [ -4, 8 ] ]`. After removing duplicates and merging into a single array, we get 
`[
  -6, -4, 1, 2,
   2,  2, 3, 8
]`. 
The second combination for `8` is 
`[[
    -6, -4, 1, 2,
     2,  2, 3, 8
  ],
  [ -6, 1, 2, 3, 8 ],
  [ -6, 1, 2, 3, 8 ],
  [ -6, 1, 2, 3, 8 ],
  [ -6, 2, 2, 2, 8 ],
  [ -4, 1, 3, 8 ],
  [ -4, 2, 2, 8 ],
  [ -4, 2, 2, 8 ],
  [ -4, 2, 2, 8 ],
  [ 1, 2, 2, 3 ],
  [ 1, 2, 2, 3 ],
  [ 1, 2, 2, 3 ],
  [ 8 ]
]`.