module.exports.DriverNotFoundError = class DriverNotFoundError extends Error {
    status = 404;
    constructor(filter) {
      super("Driver Not Found");
      this.data = { filter };
    }
  };
  