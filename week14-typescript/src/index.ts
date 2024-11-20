const canVote = (voters: Voter[]) => {
  let eligibleVoters = [];
  for (let i = 0; i < voters.length; i++) {
    if (voters[i].age > 18) {
      eligibleVoters.push(voters[i].name);
    }
  }
  return eligibleVoters;
};

interface Voter {
  name: string;
  age: number;
}

let voters: Voter[] = [
  {
    name: "chuck",
    age: 17,
  },
  {
    name: "thomas",
    age: 23,
  },
  {
    name: "charlie",
    age: 20,
  },
  {
    name: "winston",
    age: 22,
  },
  {
    name: "shalby",
    age: 16,
  },
];

const eligibleToVote = canVote(voters);
console.log(eligibleToVote);
