const {
    Types: { ObjectId },
  } = require("mongoose");
  const service = require("../services/battery");
  
  exports.getBatteries = async () => {
    const batteries = await service.getBatteries();
    return { batteries };
  };
  
  exports.addBattery = async ({...rest }) => {
    const battery = await service.createBattery(rest);
    return battery;
  };
  
  /**
   *
   * @param {string} batteryId
   * @returns {Promise<Battery>}
   */
  exports.getBatteryById = async (batteryId) => {
    return service.getBatteryById(ObjectId(batteryId));
  };