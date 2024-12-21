//------Type Annotations: Variables-----
// let id: number = 5;
// let company: string = "Alpha Solution";
// let isPublished: boolean = true;

// let ids: number[] = [1, 2, 3, 4, 5];
// let x: any = "pedro";
// let xArr: any[] = ["pedro", 0, true];

//---Type Annotations: Function-----
// const concatenateValues = (a: string, b: string): string => {
//     return a + b;
// }

// console.log(concatenateValues("Hello ", "World!"));
// console.log(concatenateValues("5", "10"));
// console.log(concatenateValues("5", "15"));


//------Interface & Types----
// interface IUser {
//     id: number;
//     name: string;
//     age?: number;
//     greet(message: string): void;
// }

// const User: IUser = {
//     id: 1,
//     name: "Akrima",
//     greet(message){
//         console.log(message);
//     }
// };

// User.greet("Hello Akrima");

// if (!User.age) {
//     console.log("No Age Defined!");
// }
// else {
//     console.log(User.age);
// }




//----Union & Intersaction (Complex and many type)-------
// type IDFieldType = string | number;

// const printID = (id: IDFieldType) => {
//     console.log("ID: " + id);
// }

// printID(123456);

// interface BusinessPartner {
//     name: String;
//     creditScore: number;
// }

// interface UserIdentity {
//     id: number;
//     email: string;
// }

// type employee = BusinessPartner & UserIdentity;

// const signContract = (employee: employee): void => {
//     console.log("Contract By: " + employee.name + " has email: " + employee.email);
// }

// signContract({name: "Akrima", creditScore: 800, id: 1, email: "akrima@alphaSol.com"});



//------Enums-----
// enum LoginError{
//     Unauthorized = "unauthorized",
//     NoUser = "nouser",
//     WrongCredentials = "wrongcredentials",
//     Internal = "internal",
// }

// const printErrorMsg = (error: LoginError): void => {
//     if (error == LoginError.Unauthorized) {
//         console.log("User not authorized");
//     }
//     else if (error == LoginError.NoUser) {
//         console.log("No user is found with that username");
//     }
//     else if (error == LoginError.WrongCredentials) {
//         console.log("Wrong Username or password");
//     }
//     else{
//         console.log("internal Error");
//     }
// }

// printErrorMsg(LoginError.Unauthorized);


//------Generics--------
// class StorageContainer<T> {
//     private contents: T[];

//     constructor() {
//         this.contents = [];
//     }

//     addItem(item: T): void {
//         this.contents.push(item);
//     }

//     getItem(idx: number): T | undefined {
//         return this.contents[idx];
//     }

//     get length(): number {
//         return this.contents.length;
//     }

//     getContents(): T[] {
//         return [...this.contents];
//     }
    
// }

// const userNames = new StorageContainer<string>();
// userNames.addItem("Akrima");
// userNames.addItem("Daniyal");

// console.log(userNames.getItem(0));
// console.log(userNames.getItem(1));
// console.log(userNames.getItem(2));
// console.log("length: " + userNames.length);


// const friendsCount = new StorageContainer<number>();
// friendsCount.addItem(500);
// friendsCount.addItem(1);
// friendsCount.addItem(4);

// console.log(friendsCount.getItem(0));
// console.log(friendsCount.getItem(1));
// console.log(friendsCount.getItem(2));
// const arr: number[] = friendsCount.getContents();

// console.log(`length of ${arr}: ${friendsCount.length}`);


//------Read Only--------
interface EmployeeReadOnly {
    readonly employeeId: number;
    readonly startDate: Date;
}

interface EmployeeUpdateable {
    name: string;
    department: string;
}

type Employee = EmployeeReadOnly & EmployeeUpdateable

const employee: Employee  = {
    employeeId: 123,
    startDate: new Date(),
    name: "Akrima",
    department: "Development",
}

employee.name = "Daniyal";
console.log(employee);