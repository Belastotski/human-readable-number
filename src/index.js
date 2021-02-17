module.exports =
    function toReadable (number) {
    let ones=['','one ','two ','three ','four ','five ','six ','seven ','eight ','nine '];
    let tens=['','','twenty ','thirty ','forty ','fifty ','sixty ','seventy ','eighty ','ninety '];
    let teens=['ten ','eleven ','twelve ','thirteen ','fourteen ','fifteen ','sixteen ','seventeen ','eighteen ','nineteen '];
    // let big = ['thousand ', 'million ', ' billion ', ' trillion ', ' quadrillion ', ' quintillion ']

    return number.toString().split('').reduce((str,val,i,arr) => {
        if (arr.length == 1 && +val == 0) return 'zero '
        if ((arr.length - i) % 3 == 2 )
             str += +val == 1 ? teens[+arr[i+1]]: tens[val]
        if ((arr.length - i) % 3 == 1 )
             str += arr.length != 1 && +arr[i-1] == 1? '' : ones[+val]
        if ((arr.length - i) % 3 == 0)
            str += arr.length != 1 && +val == 0? '': ones[+val] + 'hundred '
        return str
    },str = '').slice(0,-1)

}
