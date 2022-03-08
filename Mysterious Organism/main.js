// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G']
  return dnaBases[Math.floor(Math.random() * 4)] 
}

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = []
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase())
  }
  return newStrand
}

const pAequorFactory = (specimenNum, dna) => {
  return {
    specimenNum,
    dna,
    mutate() {
      let newDna = returnRandBase();
      if (newDna != dna) {
        return dna = NewDna;
      } else {
        return dna = returnRandBase();
      }
    },
    compareDNA(pAequor) {
      let count = 0;
      for (let i = 0; i < 15; i++) {
        if (this.dna[i] === pAequor.dna[i]) {
          count++;
          console.log(pAequor.dna[i])
        }
      }
      return `specimen #1 and specimen #2 have ${Math.floor((count/15) * 100)}% DNA in common`;
    },
    willLikelySurvive() {
      const cOrG = this.dna.filter(element => element === 'C' || element === 'G');
      return cOrG.length / this.dna.length >= 0.6;
    },
    complementStrand() {
      let newDna = [];
      this.dna.forEach(el => {
        if (el === 'A') {
          newDna.push('T');
        } else if (el === 'T') {
          newDna.push('A');
        } else if (el === 'C') {
          newDna.push('G');
        } else {
          newDna.push('C');
        }
      })
      return newDna;
    }
  }
};

const arraySurv = [];
let i = 0;
while (arraySurv.length < 30) {
  let pAequor = pAequorFactory(i, mockUpStrand());
 if (pAequor.willLikelySurvive()) {
   arraySurv.push(pAequor);
 }
 i++;
}

const one = pAequorFactory(1, mockUpStrand());
const two = pAequorFactory(2, mockUpStrand());
console.log(one.dna)
// console.log(two.dna)
//console.log(one.compareDNA(two))
// console.log(arraySurv)
console.log(one.complementStrand())



