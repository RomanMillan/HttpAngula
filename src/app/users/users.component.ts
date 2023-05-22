import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html'
})
export class UsersComponent implements OnInit {

  users: any[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
  }

  getUsers(): void {
    this.apiService.getUsers().subscribe(
      response => {
        this.users = response.usuarios;
      },
      error => {
        console.log('Error al obtener los usuarios:', error);
      }
    );
  }

  createUser(): void {
    const newUser = {
      // Datos del nuevo usuario
    };

    this.apiService.createUser(newUser).subscribe(
      response => {
        console.log('Usuario creado:', response);
        // Actualiza la lista de usuarios después de crear uno nuevo
        this.getUsers();
      },
      error => {
        console.log('Error al crear el usuario:', error);
      }
    );
  }

  updateUser(userId: string): void {
    const updatedUser = {
      // Nuevos datos del usuario
    };

    this.apiService.updateUser(userId, updatedUser).subscribe(
      response => {
        console.log('Usuario actualizado:', response);
        // Actualiza la lista de usuarios después de actualizar uno
        this.getUsers();
      },
      error => {
        console.log('Error al actualizar el usuario:', error);
      }
    );
  }

  deleteUser(userId: string): void {
    this.apiService.deleteUser(userId).subscribe(
      response => {
        console.log('Usuario eliminado:', response);
        // Actualiza la lista de usuarios después de eliminar uno
        this.getUsers();
      },
      error => {
        console.log('Error al eliminar el usuario:', error);
      }
    );
  }

}
