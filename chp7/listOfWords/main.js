/*
List of words

Write a program that asks the user for a word until the user types "stop". The program then shows each of these words, except "stop".
*/
let inputWords=[]
do{
    inputWords.push(prompt('Enter a word on each prompt, when complete enter \"stop\"'))
}
while(inputWords[inputWords.length-1].toLocaleLowerCase() !== 'stop')
inputWords.pop()
console.log(inputWords)