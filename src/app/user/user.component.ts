import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { UserModel } from './userModel'; // Certifique-se de que o nome corresponda ao nome real do modelo
import { ContatoModel } from './contatoModel';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user: UserModel = new UserModel();
  contato: ContatoModel = new ContatoModel();

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.get(1);
  }

  get(id: number) {
    this.userService.carregar(id).subscribe(
      (data: UserModel) => {
        this.user = data;
      },
      (error) => {
        console.error('Erro ao carregar usuário:', error);
      }
    );
  }

  updat(user: UserModel) {

  }
}