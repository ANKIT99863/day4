Ans1)1)odd number in array
    let arr=[1,2,3,4,5,6,7]
    function  oddno(a){
    for(var i=0;i<arr.length;i++){
    if(arr[i]%2==1){
     comsole.log(arr[i]);
}
}
}
oddno();

2)convert all strings to title caps 

   let str =  "neo";
    let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let lower="abcdefghijklmnopqrstuvwxyz"
  function convert(str[i]){
  for(var i=0;i<str.length;i++){
     if(str[i]==lower[i]){
     str[i] = upper[i];
}
}
}
convert();

3)   sum of all numbers in array

    let arr=[1,2,3,4,5,6,7]
let sum =0;
    function add(sum){
        for(var i=0;i<arr.length;i++){
         sum =sum+arr[i];
          } 
         console.log(sum);
}
}
add();

4)prime numbers in an array

 let arr =[4,6,9,3,2,1,11];
   let count =0;
    function primenumber(arr[i]){
     for(var i=0;i<arr.length;i++){
      for(var j=1;j=100;j++){
        if(arr[i]%j==0){
          count++;
}
}
}
       if(count==2){
       console.log(arr[i],"is a prime number");
}
  primenumber();

5)  return all palindromes of arr
    let arr=["naman","eye","faiz","madam","Max"];
    let str = "";
    function palindrome(arr[i]){
    for(var i=0;i<arr.length;i++){
    for(var j=arr[i].length-1;j>=0;j--){
       str = str + arr[j];
}
}
if(str==arr){
    console.log(arr[i]);
}
}
  palindrome();


Arrow functions
1)odd number in an array
   var arrowodd=(arr)=>{
       for(var i=0;i<arr.length;i++){
        if(arr[i]%2==1){
         console.log(arr[i]);
}
}
}
arrowodd([2,3,4,5,6,1,0,9]);

2)convert all strings to title caps 

   
    let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let lower="abcdefghijklmnopqrstuvwxyz"
  var convert=(str[i])=>{
  for(var i=0;i<str.length;i++){
     if(str[i]==lower[i]){
     str[i] = upper[i];
}
}
}
convert("neo");

3)   sum of all numbers in array

    
let sum =0;
    var add=(sum)=>{
        for(var i=0;i<arr.length;i++){
         sum =sum+arr[i];
          } 
         console.log(sum);
}
}
add([1,2,3,4,5,6,7]);

4)prime numbers in an array

 
   let count =0;
    var primenumber=(arr[i])=>{
     for(var i=0;i<arr.length;i++){
      for(var j=1;j=100;j++){
        if(arr[i]%j==0){
          count++;
}
}
}
       if(count==2){
       console.log(arr[i],"is a prime number");
}
  primenumber([4,6,9,3,2,1,11]);

5)  return all palindromes of arr
    let str = "";
    var  palindrome=(arr[i])=>{
    for(var i=0;i<arr.length;i++){
    for(var j=arr[i].length-1;j>=0;j--){
       str = str + arr[j];
}
}
if(str==arr){
    console.log(arr[i]);
}
}
  palindrome(["naman","eye","faiz","madam","Max"]);
        