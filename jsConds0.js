
let flip = 10;


let ones = 0;
let twos = 0;
let threes = 0;
let fours = 0;
let fives = 0;
let sixes = 0;
 
// Rolls two dice, from 1-6
function rollDice() {
  for (let i = 0; i < flip; i++) {
   let r = Math.floor(Math.random() * 6) + 1;
 

console.log(r);

/*
Det er ligemeget, om vi har default som erstatning for case: 3 eller case: 6, da vi kun har seks forskellige muligheder/cases. 
Hvis man fx havde 8 øjne på en terning, og den samme switch, ville 7 og 8 øjne også have i default casen. 
*/

    switch(r)
    {
        case 1: 
        ones++;
        break;
    
        case 2: 
        twos++;
        break;
    
        default:  
        threes++;
        break;
    
        case 4: 
        fours++;
        break;
    
        case 5: 
        fives++;
        break;
    
        case 6:
        sixes++;
        break;
        
    }

  }
  
}
rollDice();

document.write(`<p>`);
  document.write(`1's: ${ones}<br/>`);
  document.write(`2's: ${twos}<br/>`);
  document.write(`3's: ${threes}<br/>`);
  document.write(`4's: ${fours}<br/>`);
  document.write(`5's: ${fives}<br/>`);
  document.write(`6's: ${sixes}<br/>`);
  document.write(`total: ${ones+twos+threes+fours+fives+sixes}</p>`);


/*
if (r === 1)
        ones++;
    else if (r === 2)
        twos++;
    else if (r === 3)
        threes++;
    else if (r === 4)
        fours++;
    else if (r === 5)
        fives++;
    else
        sixes++;
        */