module.exports.MotoNotFoundError = class MotoNotFoundError extends Error {
    status = 404;
    constructor(filter) {
      super("Moto Not Found");
      this.data = { filter };
    }
  };
  