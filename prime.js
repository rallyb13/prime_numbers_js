findPrimes: function(givenNumber) {
  var lastCheck = Math.ceil(Math.sqrt(givenNumber)),
      primeFactor = 2,
      primeCandidates = [],
      remainingCandidates = [],
      firstPrimes = [],
      primes = [],
      i;

  for (i = 2; i <= givenNumber; i ++) {
    primeCandidates.push(i);
  }

  while (primeFactor < lastCheck) {
    primeCandidates.each(candidate) {
      if (candidate % primeFactor !== 0){
        remainingCandidates.push(candidate);
      }
    };
    firstPrimes.push(primeFactor);
    primeCandidates = remainingCandidates;
    remainingCandidates = [];
    primeFactor = primeCandidates[0]
  };
  primes = firstPrimes.concat(primeCandidates);
  return primes;
};
