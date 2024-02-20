type Dog = {
  breed: 'doberman' | 'chichuachua';
  longHair: boolean;
  name: string;
};

// cat tipas gali tureti daug savyiu
// kiekvienas key bus string,
// kiekvienas value bus string arba number
type Cat = {
  [key: string]: string | number;
};

const dog1: Dog = {
  name: 'Blupers',
  breed: 'chichuachua',
  longHair: true,
};

const cat1: Cat = {
  name: 'Blupers',
  breed: 'chichuachua',
  longHair: 2,
};
