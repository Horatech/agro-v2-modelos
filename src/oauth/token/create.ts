import { IUsuario } from "../../generales";
import { ICreateClient } from "../client";

export interface ICreateToken {
  accessToken: string;
  accessTokenExpiresAt?: string;
  refreshToken?: string;
  refreshTokenExpiresAt?: string;
  scope?: string | string[];
  client: ICreateClient;
  user: IUsuario;
}
