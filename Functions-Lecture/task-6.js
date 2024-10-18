/*
When squirrels get together for a party, they like to have
nuts.
A squirrel party is successful when the number of nuts is
between 40 and 60, inclusive. Unless it is the weekend
(indicated by True or False), in which case there is no
upper bound on the number of nuts.
Return True if the party with the given values is
successful, or False otherwise.

nutsParty(30, false) -> false
nutsParty(50, false) -> true
nutsParty(70, true) -> true
*/

const nutsParty = (nuts, weekend) => {
	if (nuts >= 40 && nuts <= 60 && weekend === false) {
		return true;
	} else if (weekend === true) {
		return false;
	} else {
		return "Error";
	}
};

console.log(nutsParty(40, false));
console.log(nutsParty(50, true));
console.log(nutsParty(70, true));
