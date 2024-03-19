import { environment } from './../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class DashboardService
{
    apiurl = `${environment.apiUrl}api/`;
    /**
     * Constructor
     */
    constructor(private _httpClient: HttpClient)
    {
    }

    GetQrCode() {
        return this._httpClient.get(this.apiurl + 'GetQrCode');
    }



}
