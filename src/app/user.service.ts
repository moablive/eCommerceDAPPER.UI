import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';
import { UserModel } from './user/userModel';
import { environment } from '../environment/environment'; 

@Injectable({
  providedIn: 'root'
})

export class UserService {

  apiUrl:string;

  constructor(private http: HttpClient) {
		this.apiUrl = environment.apiUrl;
	}

  carregar(id:number){
    return this.http.get<UserModel>(this.apiUrl + 'Usuarios/'+id);
  }
  
  atualizar(user: UserModel){
		return this.http.put(this.apiUrl +"Usuarios",user);
	}
}
