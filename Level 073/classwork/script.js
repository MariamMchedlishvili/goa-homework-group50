//შექმენით ფუნქცია რომელსაც არგუმენტად გადაეცემა სია შემდეგ კი დაბეჭდეთ ამ სიის ჯამი


function sumList(numList) {
    let sum = 0
    for(let i = 0; i < numList.length; i++) {
        sum += numList[i]
    }
    console.log(sum)
}

sumList([1,2,3])



function createArray(number) {
    const newArray = [];
    for (let counter = 1; counter <= number; counter++) {
        newArray.push(counter);
    }
    return newArray;
}
