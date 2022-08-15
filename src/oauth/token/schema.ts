import { IUsuario } from "../../generales";
import { IClient } from "../client";

export interface IToken {
  accessToken: string;
  accessTokenExpiresAt: string;
  refreshToken?: string;
  refreshTokenExpiresAt?: string;
  scope?: string | string[];
  client: IClient;
  user: IUsuario;
}
