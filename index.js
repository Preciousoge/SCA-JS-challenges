
  function sortString (str){
  	str = str + " "
  let newStr = str.split("")

  return newStr.sort().join("")
  }

  sortString("hello")