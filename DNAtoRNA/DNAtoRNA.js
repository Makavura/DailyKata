function DNAtoRNA(dna) {
    let _str = [];
    let _stu = [];
    let _p;
    let _l = dna.length
    let _final = '';
    let _0 = [];
    for (var _x = 0; _x < _l; _x++) {
      _0 = dna.split("");
      _p = _0[_x]
        if (_p == 'T') {
            _p = 'U';
            JSON.stringify(JSON.parse(_str.push(_p)));
        }
        else {
          _p = _0[_x]
            JSON.stringify(JSON.parse(_str.push(_p)));
        }
        let _final = _str.join("");
        console.log(_final);


    if(dna.length === _final.length){
    return _final;
    }
    
}

return _final;

}