import { faker } from '@faker-js/faker';

export const DataGenerator = {
  generateUser() {
    return {
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      email: faker.internet.email(),
      password: faker.internet.password({ length: 12, memorable: true }),
      phoneNumber: faker.phone.number(),
      zipCode: faker.location.zipCode()
    };
  },

  generateProduct() {
    return {
      name: faker.commerce.productName(),
      price: parseFloat(faker.commerce.price()),
      description: faker.commerce.productDescription()
    };
  }
};
