import {HttpClient} from '@angular/common/http';
import {DrawerRangeRequest} from '../entities/drawer.range.request';
import {DrawerRangeResponse} from '../entities/drawer.range.response';
import {Injectable} from '@angular/core';

@Injectable()
export class DrawerRangeService {
  constructor(private http: HttpClient) {
  }

  getAllDrawers() {
    return this.http.get<DrawerRangeResponse[]>('drawerranges');
  }

  findDrawerById(id: number) {
    return this.http.get<DrawerRangeResponse>(`drawerranges/${id}`);
  }

  createDrawer(drawerData: DrawerRangeRequest) {
    return this.http.post<DrawerRangeResponse>(`drawerranges`, drawerData);
  }

  updateDrawer(id: number, drawerData: DrawerRangeRequest) {
    return this.http.put<DrawerRangeResponse>(`drawerranges/${id}`, drawerData);
  }

  deleteDrawerById(id: number) {
    return this.http.delete(`drawerranges/${id}`);
  }
}
