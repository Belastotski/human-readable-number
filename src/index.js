module.exports =
    function toReadable (number) {
    let ones=['','one ','two ','three ','four ','five ','six ','seven ','eight ','nine '];
    let tens=['','','twenty ','thirty ','forty ','fifty ','sixty ','seventy ','eighty ','ninety '];
    let teens=['ten ','eleven ','twelve ','thirteen ','fourteen ','fifteen ','sixteen ','seventeen ','eighteen ','nineteen '];

    return number.toString().split('').reduce((str,val,i,arr) => {
        switch ((arr.length - i) % 3) {
            case 0 : return str += arr.length !== 1 && +val === 0? '': ones[+val] + 'hundred '
            case 1 : return str += arr.length !== 1 && +arr[i-1] === 1? ''
                :arr.length === 1 && +val === 0? 'zero ': ones[+val]
            case 2 : return str += +val === 1 ? teens[+arr[i+1]]: tens[val]
        }
    },'').slice(0,-1)

}
