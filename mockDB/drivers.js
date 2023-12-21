const {driversStatuses} = require('../src/constants')

const drivers = [
    { id: 1, name: 'John Doe', status: driversStatuses.AVAILABLE },
    { id: 2, name: 'Jane Smith', status: driversStatuses.BUSY},
    { id: 3, name: 'Joshwa', status: driversStatuses.AVAILABLE },
    { id: 4, name: 'Shoaib Amin', status: driversStatuses.UNAVAILABLE },
  ];

  module.exports = {
    drivers
  }