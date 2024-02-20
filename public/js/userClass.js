class User {
    constructor(name, lastName, isDriver) {
        this.name = name;
        this.lastName = lastName;
        this.isDriver = isDriver;
        User.count++;
        this.id = User.count;
    }
}
User.count = 0;
export default User;
const user1 = {
    id: 1,
    name: 'James',
    lastName: 'Bond',
    isDriver: true,
};
console.log('user1 ===', user1);
const user2 = new User('James', 'Bond', true);
user2.name = 'Serbentautas';
console.log('user2 ===', user2);
const user3 = new User('James', 'Bond', true);
console.log('user3 ===', user3);
