var faker = require('faker');

var database = { componentes: []};

for (var i = 1; i<= 10; i++) {
  database.componentes.push({
    id: i,
    nombre: faker.commerce.productName(),
    descripcion: faker.lorem.sentences(),
    fechaFabricacion: faker.date.between('2020-01-01T00:00:00.000Z', '2022-01-01T00:00:00.000Z'),
    numeroParte: faker.datatype.number(),
    comentarios: faker.lorem.sentences()
  });
}

console.log(JSON.stringify(database));
