import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { ImageUploadRequest } from '../models/Requests/ImageUploadRequest';
import { UPLOADIMAGEAPI } from '../constants';
import { API_UPLOADTOBLOB } from '../constants';
import { Observable } from 'rxjs';
import { UploadToBlobResponse } from '../models/Responses/UploadToBlobResponse';

@Injectable({
    providedIn: 'root',
})
export class ImageUploadService {
    constructor(private http: HttpClient) {}

    uploadToBlob(image: File) {
        console.log(image);
        let formData = new FormData();

        formData.append('image', image, image.name);
        return this.http.post<UploadToBlobResponse>(API_UPLOADTOBLOB, formData);
    }

    callApi() {
        this.http.get('https://reqres.in/api/users?page=2').subscribe(data => {
            console.log(data);
        });
    }
}

//     uploadImage(imageRequest: ImageUploadRequest): Observable<any> {
//         const httpOptions = {
//             headers: new HttpHeaders({
//                 'Content-Type': 'application/json',
//             }),
//         };

//         let payload = {
//             token: 'PBmQY-kSfHmtXExKjiqnDQ',
//             data: {
//                 result: {
//                     image: File,
//                 },
//                 status: {
//                     message: 'success',
//                 },
//                 _repeat: 5,
//             },
//         };

//         const formData = new FormData();

//         formData.append('image', imageRequest.image.file);

//         console.log('form data');
//         console.log(formData);
//         return this.http.post<any>(UPLOADIMAGEAPI, payload, httpOptions);
//     }

//     callApi() {
//         this.http.get('https://reqres.in/api/users?page=2').subscribe(data => {
//             console.log(data);
//         });
//     }
// }
