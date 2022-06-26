// Problem Solving
//Problem 1. লুডু খেলায় আমরা কিভাবে ১ থেকে ৬ রেন্ডম্লি প্রিন্ট করতে পারি?

function randomNumber(min ,max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}
console.log(randomNumber(1, 6))
//Solved

//Problem 2. কিভাবে আমরা আমাদের শ্রেনী কক্ষের সবার নাম Alphabeticaly সাজাতে পারি?

const studentsName = ["Akash", "Manik", "Sakib", "Bobita", "Atikur", "Ritu", "Hasan", "Kawser"];
studentsName.sort();
console.log(studentsName)
//Solved

//Problem 3. কিভাবে আমরা আমাদের শ্রেনী কক্ষের সকলের রোল নম্বর ক্রমে সাজাতে পারি?

const studentsRoll = [23, 1, 5, 20, 15, 25, 24, 11, 13, 12, 16, 17, 19, 18, 2, 4, 3, 8, 10, 9, 7, 6,22, 21]
studentsRoll.sort((x, y) => {
  return x -y;
})
console.log(studentsRoll)
//Solved

// Problem 4. কোন সাল Leap Year কিনা তা কিভাবে বের করতে পারি?

const isLearYear = (year) => {
  if((year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0)){
    return `${year} is a Leap Year.`;
  }else{
    return `${year} is not a Leap Year.`;
  }
}
console.log(isLearYear(1972));
//Solved

// Problem 5. কোন Sentence এ কতগুলো Vowel তা কিভাবে দেখতে পারি?

const vowels = ["A", "a", "E", "e", "I", "i", "O", "o", "U", "u"];

const countVowel = (sentence) => {
  let count = 0;
  const letter = Array.from(sentence);
  letter.forEach((value) => {
    if(vowels.includes(value)){
      count++;
    }
  })
  return count;
}
console.log(countVowel("I love javascript"));
//Solved

// Problem 6.  কোন Array থেকে কিভাবে Duplicate বা Unique Number গুলো বের করে আনতে পারি?

const numbers = [3, 5, 2, 4, 6, 3, 6, 5, 4, 10, 2]

const duplicateNum = numbers.filter((value, index, array) => {
  return array.indexOf(value) === index;
})
console.log(duplicateNum);
//Solved

