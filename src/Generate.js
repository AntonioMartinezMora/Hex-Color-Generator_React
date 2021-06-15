const generateHex = ()  =>{
    let n = (Math.random() * 0xccccc * 1000000).toString(16)
    return '#' + n.slice(0, 6)
}

export default generateHex;