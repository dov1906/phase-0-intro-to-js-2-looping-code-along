function writeCards(stringnames, eventname) {

    let end = []
    for (let i=0; i<stringnames.length; i++ ){
        
        
        end.push(`Thank you, ${stringnames[i]}, for the wonderful ${eventname} gift!`)
    
    }
    return end

}

function countDown(number)  {
    while (number > -1){
        console.log(number)
        number--
    }

}

