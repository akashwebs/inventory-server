const {
  createSignUpService,
  findUserByEmail,
} = require("../service/user.service");
const { generateToken } = require("../utils/token");

exports.singUp = async (req, res, next) => {
  try {
    const user = await createSignUpService(req.body);
    // ---ekhane amra caile arekta profile o crete korte pari , email verifciation another
    res.status(200).json({
      status: "success",
      message: "successfully signup",
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      error: err.message,
    });
  }
};
/* 
*1. check if email and password are given
2. Load user With email,
3. if not user send res
4.compare password with bycrypt
5.password not coreract send res
6.check if uer is active
7.if not active send res
8.generate token 
9.send user and token
 */
exports.logIn = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(401).json({
        status: "fail",
        message: "Please provide your credential",
      });
    }

    const user = await findUserByEmail(email);
    if (!user) {
      return res.status(401).json({
        status: "fail",
        message: "No user Found. Please Create an account",
      });
    }

    const isPasswordValid = user.comparePassword(password, user.password);
    if (!isPasswordValid) {
      return res.status(403).json({
        status: "fail",
        message: "Email or password are not correct",
      });
    }

    if (user.status != "active") {
      return res.status(401).json({
        status: "fail",
        message: "Your Account is not active yet",
      });
    }
    // ------------------------------generate token

    const { password: pwd, ...others } = user.toObject();

    const token = generateToken(user);
    res.status(200).json({
      status: "success",
      message: "successfully logged in",
      data: { token, user: others },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      error: err.message,
    });
  }
};
