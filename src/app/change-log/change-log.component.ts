import { Component, OnInit } from '@angular/core';
import { ChangeLogService } from '../services/ChangeLog.service';
import { ChangeLog } from '../models/ChangeLog.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  selector: 'app-change-log',
  imports: [FormsModule, CommonModule, NgxPaginationModule],
  standalone: true,
  templateUrl: './change-log.component.html',
  styleUrls: ['./change-log.component.css']
})
export class ChangeLogComponent implements OnInit {
  changeLogs: ChangeLog[] = []; // Lista de registros de cambios
  page: number = 1; // Página actual
  pageSize: number = 10; // Tamaño de página
  totalLogs: number = 0; // Total de registros
  totalPages: number = 0; // Total de páginas

  constructor(private changeLogService: ChangeLogService) { }

  ngOnInit(): void {
    this.getChangeLogs(); // Obtener registros al inicializar el componente
  }

  // Obtener todos los registros de cambios con paginación
  getChangeLogs(): void {
    this.changeLogService.getChangeLogs(this.page, this.pageSize).subscribe(
      (data) => {
        console.log('Historial de cambios obtenido:', data);
        this.changeLogs = data.logs; // Asignar registros obtenidos
        this.totalLogs = data.totalLogs; // Total de registros
        this.totalPages = data.totalPages; // Total de páginas
      },
      (error) => {
        console.error('Error al obtener historial de cambios:', error);
      }
    );
  }

  // Cambiar a la página anterior
  previousPage(): void {
    if (this.page > 1) {
      this.page--;
      this.getChangeLogs();
    }
  }

  // Cambiar a la página siguiente
  nextPage(): void {
    if (this.page < this.totalPages) {
      this.page++;
      this.getChangeLogs();
    }
  }
}