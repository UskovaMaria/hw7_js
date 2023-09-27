    const str = 'aaaaa bb aaa bb aa ccc dd mm nn aa cccc';
    const  blackList = ['aa', 'ccc']
    
    console.log(str);
    console.log(filterBadWord(str, blackList));
    // ****a bb **a bb ** *** dd mm nn ** ***c
    console.log(filterBadWord2(str, blackList));
    console.log(filterBadWord3(str, blackList));

    function filterBadWord(str, arr) {

        let newStr = str.replace(/aa/g, '**');

        return newStr;
    }

    function filterBadWord2(str) {

        let newStr1 = str.replace(/ccc/g, '***');

        return newStr1;
    }

    function filterBadWord3(strr) {
        
        let newStr2 = str.replace(/[ac]/g, '*');

        return newStr2;
    }