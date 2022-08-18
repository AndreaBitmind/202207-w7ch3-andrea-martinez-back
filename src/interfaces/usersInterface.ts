export interface LoginData {
  id: string;
  userName: string;
  password: string;
}

export interface JwtPayload {
  id: string;
  userName: string;
}
export interface UserData {
  userName: string;
  urlImage?: string;
  password: string;
  id: string;
}

export interface UserRegister {
  userName: string;
  password: string;
  urlImg?: string;
}
