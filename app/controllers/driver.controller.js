const {
    Types: { ObjectId },
  } = require("mongoose");
  const service = require("../services/driver");
  
  exports.getDrivers = async () => {
    const drivers = await service.getDrivers();
    return { drivers };
  };
  
  exports.addDriver = async ({...rest }) => {
    const driver = await service.createDriver(rest);
    return driver;
  };
  
  /**
   *
   * @param {string} driverId
   * @returns {Promise<Driver>}
   */
  exports.getDriverById = async (driverId) => {
    return service.getDriverById(ObjectId(driverId));
  };