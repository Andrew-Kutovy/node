import * as jwt from "jsonwebtoken";

import { configs } from "../configs/config";
import { ApiError } from "../errors/api.error";
import { ITokenPayload, ITokensPair } from "../types/token.types";

class TokenService {
  public generateTokenPair(payload: ITokenPayload): ITokensPair {
    const accessToken = jwt.sign(payload, configs.JWT_ACCESS_SECRET, {
      expiresIn: "10s",
    });
    const refreshToken = jwt.sign(payload, configs.JWT_REFRESH_SECRET, {
      expiresIn: "30s",
    });

    return {
      accessToken,
      refreshToken,
    };
  }

  public checkToken(token: string, type: "access" | "refresh"): ITokenPayload {
    let secret: string;
    switch (type) {
      case "access":
        secret = configs.JWT_ACCESS_SECRET;
        break;
      case "refresh":
        secret = configs.JWT_REFRESH_SECRET;
        break;
      default:
        throw new ApiError("Invalid token type", 500);
    }
    return jwt.verify(token, secret) as ITokenPayload;
  }
}

export const tokenService = new TokenService();
