import {HttpClient} from '@angular/common/http';
import {DrawerRangeRequest} from '../entities/drawer.request';
import {DrawerRangeResponse} from '../entities/drawer.response';
import {Injectable} from '@angular/core';

@Injectable()
export class DrawerRangeService {
  constructor(private http: HttpClient) {
  }

  getAllDrawers() {
    return this.http.get<DrawerRangeResponse[]>('drawers');
  }

  findDrawerById(id: number) {
    return this.http.get<DrawerRangeResponse>(`drawers/${id}`);
  }

  createDrawer(drawerData: DrawerRangeRequest) {
    return this.http.post<DrawerRangeResponse>(`drawers`, drawerData);
  }

  updateDrawer(id: number, drawerData: DrawerRangeRequest) {
    return this.http.put<DrawerRangeResponse>(`drawers/${id}`, drawerData);
  }

  deleteDrawerById(id: number) {
    return this.http.delete(`drawers/${id}`);
  }
}
