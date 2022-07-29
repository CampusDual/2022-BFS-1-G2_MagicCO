import {Injectable, Injector} from '@angular/core';
import {OntimizeEEService} from "ontimize-web-ngx";

@Injectable({
  providedIn: 'root'
})
export class RegisterService extends OntimizeEEService {

  baseUrl: string = "http://localhost:33333/users/user/";

  constructor(protected injector: Injector) {
    super(injector);
    const conf = this.getDefaultServiceConfiguration();
    conf['path'] = '/users';
    this.configureService(conf)
  }

  createUserAccount(user_:string, password:string){
    const data = {
      "USER_": user_,
      "PASSWORD": password,
    };
    const sqlTypes = {
      "USER_":12,
      "PASSWORD":12,
    };
    const header = { "content-type": "application/json" };

    const body =
      '{"data": {' + data +'}  ,"sqltypes": {' + sqlTypes+ '}} ';
      console.log(body);
      return this.httpClient.post(this.baseUrl, body, { headers: header });

    //return this.insert(data, 'user', sqlTypes).pipe();
  }

}
