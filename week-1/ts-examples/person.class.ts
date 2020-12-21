/*
; ==============================
; Title: person.class.ts
; Author: Professor Krasso
; Date: 19 December 2020
; Modified By: Brooklyn Hairston
; Description: Person class to implement the Person interface
; ==============================
*/


//import the person interface
import { IPerson } from "./person.interface";

//implement the IPerson interface
class Person implements IPerson {
    firstName: string;
    lastName: string;

/**
 * @param firstName 
 * @param lastName 
 */
    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

//new person object
let myName = new Person("Brooklyn", "Hairston");

//output 
console.log('My name is' + ' ' + myName.firstName + ' ' + myName.lastName + '.');