$(document).ready(function(){
  $("form.form-one").submit(function(){
    event.preventDefault();
    let incrementNum = parseInt($('input#incrementNum').val());
    let maxNum = parseInt($('input#maxNum').val());
    let startingArray = [incrementNum, maxNum]
    let capturedArray = [];
for (let index = incrementNum; index <= maxNum; index += incrementNum) {
  capturedArray.push(array[index]);
  // Code that should run each time through the loop!
}



  });
});



  //const array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]