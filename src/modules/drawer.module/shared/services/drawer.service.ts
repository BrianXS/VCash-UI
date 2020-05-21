import {HttpClient} from '@angular/common/http';
import {DrawerRequest} from '../entities/drawer.request';
import {DrawerResponse} from '../entities/drawer.response';
import {Injectable} from '@angular/core';

@Injectable()
export class DrawerService {
  constructor(private http: HttpClient) {
  }

  getAllDrawers() {
    return this.http.get<DrawerResponse[]>('drawer');
  }

  findDrawerById(id: number) {
    return this.http.get<DrawerResponse>(`drawer/${id}`);
  }

  createDrawer(drawerData: DrawerRequest) {
    return this.http.post<DrawerResponse>(`drawer`, drawerData);
  }

  updateDrawer(id: number, drawerData: DrawerRequest) {
    return this.http.put<DrawerResponse>(`drawer/${id}`, drawerData);
  }

  deleteDrawerById(id: number) {
    return this.http.delete(`drawer/${id}`);
  }
}
