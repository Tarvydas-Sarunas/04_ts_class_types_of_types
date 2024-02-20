interface UserObjIf {
  name: string;
  lastName: string;
  isDriver: boolean;
}

export default class User implements UserObjIf {
  private id: number;
  private static count = 0;
  constructor(
    public name: string,
    public lastName: string,
    public isDriver: boolean
  ) {
    User.count++;
    this.id = User.count;
  }
}

const user1 = {
  id: 1,
  name: 'James',
  lastName: 'Bond',
  isDriver: true,
};
console.log('user1 ===', user1);
const user2 = new User('James', 'Bond', true);

// kaip su klasemis sukurto objekto galiu pakeisti kazkurio key: value
user2.name = 'Serbentautas';
console.log('user2 ===', user2);

const user3: UserObjIf = new User('James', 'Bond', true);
console.log('user3 ===', user3);
