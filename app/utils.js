/**
 * @param {function} controller
 * @param {function} mapRequestToParams
 * @returns {import("express").RequestHandler}
 */
 module.exports.controllerHandler =
 (controller, mapRequestToParams) => async (req, res, next) => {
   const params = mapRequestToParams ? mapRequestToParams(req, res, next) : [];
   try {
     const result = await Promise.resolve(controller(...params));
     if (!res.headersSent) {
       return res.json(result || { message: "OK" });
     }
   } catch (error) {
     return next(error);
   }
 };