function cardDistribution(data) {
   const card =  data?.map(function (info, index) {
       return {
            cardNumber: `${info?.district?.substring(0,2).toUpperCase()}${info?.currentYear%100}${(info?.postNo/100).toFixed(0)}${info?.birthYear}${(index + 1).toString().padStart(6, '0')}`,
            gift: index&1 ? 'R' : 'W',
            priority: info?.priority
        }
    })
  return card?.sort((index1, index2) => index1.priority - index2.priority)
}

const card = cardDistribution(
    [
        {name:"Mr Rashed",birthYear:1999,currentYear:2022,district:"Dhaka",postNo:1200 ,priority : 2},
        {name:"Mr Raju",birthYear:1995,currentYear:2022,district:"Rajshahi",postNo:1211 ,priority : 1}
        
    ]
)
console.log(card);