const findSum = function(array) {
    let sum = 0;

    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }

    return sum;
  };
  
const findFrequency = function(array) {
    const freqObj = {
        most: "",
        least: ""
    }; 

    let countAll = {};
    for (i of array) {
        if (countAll[i.toLowerCase()]) {
            countAll[i.toLowerCase()] += 1;
        } else {
            countAll[i.toLowerCase()] = 1;
        }
    }

    let countMost = 0;
    let countLeast = Number.MAX_VALUE;

    for (let key in countAll) {
        if (countAll[key] > countMost) {
            countMost = countAll[key];
            freqObj.most = key;
        } 
    }

    for (let key in countAll) {
        if (countAll[key] < countMost && countAll[key] < countLeast) {
            countLeast = countAll[key];
            freqObj.least = key;
        }
    }

    return freqObj;

  };
  
const isPalindrome = function(str) {
    return str.toUpperCase().split("").reverse().join("") === str.toUpperCase();
  };
  
const largestPair = function(array) {
    let product = 1;

    for (let i = 0; i < array.length - 1; i++) {
        if (array[i] * array[i + 1] > product) {
            product = array[i] * array[i + 1];
        }
    }

    return product;
  };
  
const removeParenth = function(str) {
    return str.replace(/\(\w+\)/g, "");
  };
  
const scoreScrabble = function(str) {
    const arr = str.toLowerCase().split("");
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        switch(arr[i]) {
            case "a":
            case "e":
            case "i":
            case "o":
            case "u":
            case "l":
            case "n":
            case "r":
            case "s":
            case "t":
                sum += 1;
                break;    
            case "d":
            case "g":
                sum += 2;
                break;
            case "b":
            case "c":
            case "m":
            case "p":
                sum += 3;
                break;
            case "f":
            case "h":
            case "v":
            case "w":
            case "y":
                sum += 4;
                break;
            case "k": 
                sum += 5;
                break;
            case "j":
            case "x":
                sum += 8;
                break;
            case "q":
            case "z":
                sum += 10;
                break;
        }
    }
    return sum;
  };
