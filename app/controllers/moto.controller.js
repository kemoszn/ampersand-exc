const {
    Types: { ObjectId },
  } = require("mongoose");
  const service = require("../services/moto");
  
  exports.getMotos = async () => {
    const motos = await service.getMotos();
    return { motos };
  };
  
  exports.addMoto = async ({...rest }) => {
    const moto = await service.createMoto(rest);
    return moto;
  };
  
  /**
   *
   * @param {string} motoId
   * @returns {Promise<Moto>}
   */
  exports.getMotoById = async (motoId) => {
    return service.getMotoById(ObjectId(motoId));
  };