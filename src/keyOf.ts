type Dog = {
  breed: 'doberman' | 'chichuachua' | 'poodel';
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

// sukurti nauja type is visu galimu breed reiksmiu
type DogBreads = Dog['breed'];

// ir dobermana duoda su autocomplytu
const breed1: DogBreads = 'doberman';

type Address = {
  street: string;
  houseNr: number;
  town: string;
  postCode?: string;
};

// =========================
// kopijavimas pernaudojimas visiskai arsalyginai

// sukurti nauja type kuris tures visus key kaip ir Address
type AddressSimilar = {
  [propretyName in keyof Address]: string;
};

// sukurti pilna kopija Adreso
type AddressCopy = {
  [propretyName in keyof Address]: Address[propretyName];
};

const addr1: Address = {
  street: 'Vytauto',
  houseNr: 15,
  town: 'Kaunas',
};

// ======= OMIT
// sukurti tipa address be postCode

type AdressNoPost = Omit<Address, 'postCode' | 'houseNr'>;

// ======== PARTIAL
// sukurti ir padaryti visus ar kazkuriuos kad butu optional

type AddressOptional = Partial<Address>;

// tipas kur viskas butu privaloma
type AddressAllRequired = Required<Address>;
