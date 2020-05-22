import {HttpClient} from '@angular/common/http';
import {DrawerRequest} from '../entities/drawer.request';
import {DrawerResponse} from '../entities/drawer.response';
import {Injectable} from '@angular/core';

@Injectable()
export class DrawerService {
  constructor(private http: HttpClient) {
  }

  getAllDrawers() {
    return this.http.get<DrawerResponse[]>('drawers');
  }

  findDrawerById(id: number) {
    return this.http.get<DrawerResponse>(`drawers/${id}`);
  }

  createDrawer(drawerData: DrawerRequest) {
    return this.http.post<DrawerResponse>(`drawers`, drawerData);
  }

  updateDrawer(id: number, drawerData: DrawerRequest) {
    return this.http.put<DrawerResponse>(`drawers/${id}`, drawerData);
  }

  deleteDrawerById(id: number) {
    return this.http.delete(`drawers/${id}`);
  }
}
