import { IFileData } from "./common.types"

export interface IUserRequest {
  givenName: string;
  familyName: string;
  email: string;
  username: string;
  dob: string;
  tosAccepted: boolean;
  password?: string;
  phoneNumber?: string;
  profilePhoto: IFileData;
}