var findPrimes = function(givenNumber) {
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
    primeCandidates.forEach(function(primeCandidate) {
      if (primeCandidate % primeFactor !== 0){
        remainingCandidates.push(primeCandidate);
      }
    });
    firstPrimes.push(primeFactor);
    primeCandidates = remainingCandidates;
    remainingCandidates = [];
    primeFactor = primeCandidates[0]
  };
  primes = firstPrimes.concat(primeCandidates);
  return primes;
};


$(document).ready(function() {
  $("form#prime").submit(function(event) {
    event.preventDefault();
    var number = parseInt($("input#givenNumber").val());
    var thePrimes = findPrimes(number);

    $(".answer").text(thePrimes);
  });
});
