import employeeServices from "../services/employee-services.js";

const create = async (req, res, next) => {
  try {
    const user = req.user;
    const request = req.body;
    const result = await employeeServices.create(user, request);
    res.status(200).json({
      message: "Success create employee",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export default {
  create,
};
