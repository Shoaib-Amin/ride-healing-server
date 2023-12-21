const { drivers } = require('../mockDB/drivers')
const {driversStatuses} = require('../src/constants')

const getAll = (req, res) => {
    res.json(drivers);
};

const getAvailable = (req, res) => {
    const availableDrivers = drivers.filter(d => d.status === driversStatuses.AVAILABLE)
    res.json(availableDrivers);
};


module.exports = {
    getAll,
    getAvailable
};