const regex = /\B(?=(\d{3})+(?!\d))/g;
function addCommas(money,reg){
  //coding the use of regex here...
  return money.replace(reg,x=>x+",")  //like this
}