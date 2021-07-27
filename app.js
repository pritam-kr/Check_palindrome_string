 const btnCheck = document.querySelector('button');
 const str = document.querySelector('input');

 btnCheck.addEventListener('click', (e) =>{
     e.preventDefault();

     const inputWord = str.value.toLocaleLowerCase();
     const string = inputWord.split('');
     // reverse array 
     const reArray = string.reverse()
     // join reverse array 
     const joinArray = reArray.join('')
     
     if(inputWord == joinArray){
        document.querySelector('.output-text').innerHTML = `<p> ${inputWord} = ${joinArray} </p>`
     }else{
        document.querySelector('.output-text').innerHTML = `<p style="font-size: 1rem;">It is not a palindrome.</p>`
     }
 })