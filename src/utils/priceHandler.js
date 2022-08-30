export const priceHandler = (price) => {
    let priceArr = price?.split('')
    console.log(priceArr)
    for(let i = 0;i< price.length ; i++){
        if(priceArr.include(',')){
            console.log('lllll')
        }
    }
    priceArr?.map((letter,index,loop)=>{
        console.log(letter)
        console.log(index)
        console.log(loop)
    })
    return price
}