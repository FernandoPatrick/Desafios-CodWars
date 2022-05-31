function ROT135(input) {
  let arr = input.split("")
  let key = 13
  
  return arr.map((num)=>{
    num = num.charCodeAt()
    if(num >= 65 && num <= 90){
      return String.fromCharCode(((num - 65 + key) % 26) + 65)
    }else if(num >= 97 && num <= 122){
      return String.fromCharCode(((num - 97 + key) % 26) + 97)
    }else if(num >= 48 && num <= 57){
      console.log(num)
      return String.fromCharCode(((num - 48 + 5) % 10) + 48)
    }else {
      return String.fromCharCode(num)
    }
    
  }).join("")
}