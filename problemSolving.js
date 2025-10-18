//problem solving pattern frequency counter

//given two arrays, write a function to determine if the second array contains the squares of the elements in the first array
//the frequency of values must be the same

function same(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }
    for (let i = 0; i < arr1.length; i++) {
        let correctIndex = arr2.indexOf(arr1[i] ** 2)
        console.log("correctIndex:  ", correctIndex);

        if (correctIndex === -1) {
            return false;
        }
        // console.log(arr2);
        arr2.splice(correctIndex, 1)
    }
    return true;
}

same([1, 2, 3, 2], [4, 4, 1, 9])
//[4,9]

//output: true
//time complexity: O(n^2)
//space complexity: O(1)

//refactored solution


function same(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }
    let frequencyCounter1 = {}
    let frequencyCounter2 = {}
    for (let val of arr1) {
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
    }
    for (let val of arr2) {
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
    }
    console.log(frequencyCounter1);
    console.log(frequencyCounter2);
    for (let key in frequencyCounter1) {
        if (!(key ** 2 in frequencyCounter2)) {
            return false
        }
        if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
            return false
        }
    }
    return true
}

same([1, 2, 3, 2, 5], [9, 1, 4, 4, 11])

//output: false
//time complexity: O(n)
//space complexity: O(n)


//anagram problem



function validAnagram(first, second) {
    if (first.length !== second.length) {
        return false;
    }

    const lookup = {};

    for (let i = 0; i < first.length; i++) {
        let letter = first[i];
        // if letter exists, increment, otherwise set to 1
        lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
    }
    console.log(lookup)

    for (let i = 0; i < second.length; i++) {
        let letter = second[i];
        // can't find letter or letter is zero then it's not an anagram
        if (!lookup[letter]) {
            return false;
        } else {
            lookup[letter] -= 1;
        }
    }

    return true;
}

// {a: 0, n: 0, g: 0, r: 0, m: 0,s:1}
validAnagram('anagrams', 'nagaramm')
//output: false
//time complexity: O(n)
//space complexity: O(1)

//sum zero problem

function sumZero(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === 0) {
                return [arr[i], arr[j]];
            }
        }
    }
}


sumZero([-4, -3, -2, -1, 0, 1, 2, 5])
//output: [-2,2]
//time complexity: O(n^2)
//space complexity: O(1)

//refactored sum zero problem

function sumZero(arr) {
    let left = 0;
    let right = arr.length - 1;
    while (left < right) {
        let sum = arr[left] + arr[right];
        if (sum === 0) {
            return [arr[left], arr[right]];
        } else if (sum > 0) {
            right--;
        } else {
            left++;
        }
    }
}
sumZero([-4, -3, -2, -1, 0, 1, 2, 5])

//output: [-2,2]
//time complexity: O(n)
//space complexity: O(1)

//count unique values
function countUniqueValues(arr) {
    if (arr.length === 0) return 0;
    var i = 0;
    for (var j = 1; j < arr.length; j++) {
        if (arr[i] !== arr[j]) {
            i++;
            arr[i] = arr[j]
        }
    }
    return i + 1;
}
countUniqueValues([1, 2, 2, 5, 7, 7, 99])
//output: 5
//time complexity: O(n)
//space complexity: O(1)