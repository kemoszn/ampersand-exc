module.exports.BatteryNotFoundError = class BatteryNotFoundError extends Error {
    status = 404;
    constructor(filter) {
      super("Battery Not Found");
      this.data = { filter };
    }
  };
  