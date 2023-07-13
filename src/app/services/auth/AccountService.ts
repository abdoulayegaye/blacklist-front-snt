import {Injectable} from "@angular/core";
import {InterNalResponse, Login, ResponseApi, User} from "../../models/Models";
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {StorageService} from "../storage/StorageService";

@Injectable()
export class AccountService {
  constructor(private http: HttpClient, private storage:StorageService) { }

  private _isAuthKey = '_Is_Auth';
  private _tokenKey: string = '_Token_Api_';
  private _userKey: string = '_User_App';

  isAuthEd(){
    return this.token && this.isAuth;
  }

  get token(){
    return this.storage.value<string>(this._tokenKey,false);
  }

  set token(token:string){
    this.storage.put(this._tokenKey, token);
  }

  get isAuth(){
    return this.storage.value<boolean>(this._isAuthKey, false);
  }

  set isAuth(authed:boolean){
    this.storage.put(this._isAuthKey,authed ? "1":"0");
  }

  get user(){
    return this.storage.value<User>(this._userKey,true);
  }

  set user(user: User | undefined){
    this.storage.put(this._userKey,JSON.stringify(user));
  }

  async login(login: Login):Promise<InterNalResponse<any>>{
    try {
      let res = await this.http.post<ResponseApi<User>>(environment.auth.login, login, {}).toPromise();
      this.storage.clear();
      this.isAuth = true;
      this.token= res?.token?.token || "";
      this.user = res?.data;
      console.log(res)
      return {
        success:true,
        msg:"Connexion réussie avec succès",
        data: {}
      };
    } catch (e) {
      // @ts-ignore
      console.log(e?.error?.message)
      // @ts-ignore
      return {success:false, msg:e?.error?.message || "Une erreur est survenue ! ", data: {}};
    }
  }

  logOut(){
    this.storage.clear();
  }

  get dashboardUrl(){
    return this.user?.profil?.role?.toLowerCase();
  }
}
