import userServices from "../services/user-services.js";

const register = async (req, res, next) => {
  try {
    const result = await userServices.register(req.body);
    res.status(200).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const login = async (req, res, next) => {
  try {
    const result = await userServices.login(req.body);
    res.status(200).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const get = async (req, res, next) => {
  try {
    const username = req.user.username;
    const result = await userServices.get(username);
    res.status(200).json({
      messages: "Berhasil get user",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const update = async (req, res, next) => {
  try {
    const username = req.user.username;
    const request = req.body;
    request.username = username;
    
    const result = await userServices.update(request);
    res.status(200).json({
      messages: "Berhasil update user",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export default { register, login, get, update };
