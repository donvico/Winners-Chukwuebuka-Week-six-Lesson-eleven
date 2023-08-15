// function compare (a,b){
//     for(let i = 0; i< a.length; i++){
//         let isPresent = false
//         for(let j =0; j< b.length; j++){
//             isPresent = true
//             if(a.charAt(a[i] === b.charAt(b[j]))){
//                 break
//             }
//            if (isPresent === false){
//             break
//            }
//         }
//     }
// }
// console.log(compare('tunde', 'ednut'))
// function myName (fullname){
//     let nameArr = fullname.Split('')
// }
// myName()
function isAnagram (word1){
 let conv1 = word1.split('').reverse().join('')
//  let conv2 = word2.split('').reverse().join()
 if(word1 === conv1){
    return true
 }
 else{
    return false
 }
}
console.log(isAnagram('racecar'))