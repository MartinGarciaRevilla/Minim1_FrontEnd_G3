import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ChangeLog } from '../models/ChangeLog.model'; // Importación del modelo ChangeLog

@Injectable({ providedIn: 'root' })
export class ChangeLogService {
  private apiUrl = 'http://localhost:9000/api/change-logs'; // URL base del backend

  constructor(private http: HttpClient) {}

  // Obtener todos los registros de cambios con paginación
  getChangeLogs(page: number, pageSize: number): Observable<{ logs: ChangeLog[]; totalLogs: number; totalPages: number; currentPage: number }> {
    return this.http.get<{ logs: ChangeLog[]; totalLogs: number; totalPages: number; currentPage: number }>(
      `${this.apiUrl}?page=${page}&pageSize=${pageSize}`
    );
  }

  // Obtener un registro de cambios por su ID
  getChangeLogById(id: string): Observable<ChangeLog> {
    return this.http.get<ChangeLog>(`${this.apiUrl}/${id}`);
  }

  // Crear un nuevo registro de cambios
  createChangeLog(data: Partial<ChangeLog>): Observable<ChangeLog> {
    return this.http.post<ChangeLog>(this.apiUrl, data);
  }

  // Actualizar un registro de cambios existente
  updateChangeLog(id: string, data: Partial<ChangeLog>): Observable<ChangeLog> {
    return this.http.put<ChangeLog>(`${this.apiUrl}/${id}`, data);
  }

  // Eliminar un registro de cambios por su ID
  deleteChangeLog(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}