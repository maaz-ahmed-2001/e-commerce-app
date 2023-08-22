import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * Every user will have cart (Quantity of all Products in Cart is set to 1 by default), wishList by default
 * */

export const users = [
  {
    _id: uuid(),
    firstName: "Maaz",
    lastName: "Ahmed",
    email: "maaz57512@gmail.com",
    password: "maaz123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    address: [
      {
        _id: uuid(),
        name: "Brett lee",
        street: "5, Blvd street",
        city: "New York",
        state: "Georgia",
        zipcode: "480009",
        country: "US",
        mobile: "9898002121",
      },
      {
        _id: uuid(),
        name: "John Doe",
        street: "st 6, Blvd road",
        city: "Washington",
        state: "Texas",
        zipcode: "370082",
        country: "US",
        mobile: "9394052424",
      },
    ],
  },
  {
    _id: uuid(),
    firstName: "Shayan",
    lastName: "Irfan",
    email: "shayan@gmail.com",
    password: "shayan123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    address: [
      {
        _id: uuid(),
        name: "Brett lee",
        street: "5, Blvd street",
        city: "New York",
        state: "Georgia",
        zipcode: "480009",
        country: "US",
        mobile: "9898002121",
      },
      {
        _id: uuid(),
        name: "Adam mock",
        street: "st 6, Blvd road",
        city: "Washington",
        state: "Texas",
        zipcode: "370082",
        country: "US",
        mobile: "9394052424",
      },
    ],
  },
];
