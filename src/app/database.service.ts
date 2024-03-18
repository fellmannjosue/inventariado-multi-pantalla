import { Injectable } from '@angular/core';
import * as mysql from 'mysql';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  private connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'inventariado_multi_pantalla'
  });

  constructor() {
    this.connection.connect();
  }

  // Método para insertar una nueva computadora
  insertComputadora(computadora: any) {
    const query = 'INSERT INTO computadoras SET ?';
    return new Promise((resolve, reject) => {
      this.connection.query(query, computadora, (err: any, result: unknown) => {
        if (err) reject(err);
        resolve(result);
      });
    });
  }

  // Método para obtener todas las computadoras
  getComputadoras() {
    const query = 'SELECT * FROM computadoras';
    return new Promise((resolve, reject) => {
      this.connection.query(query, (err, results) => {
        if (err) reject(err);
        resolve(results);
      });
    });
  }

  // Otros métodos para televisores y accesorios...
}