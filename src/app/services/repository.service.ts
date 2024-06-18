// import { HttpClient, HttpParams } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { Constants } from '../helper';
// import { catchError } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class ArchiveService {

//   public url: string;

//   constructor(private http: HttpClient) {
//     this.url = Constants.API_URL + 'document/';
//   }

//   getAllArchives() {
//     return this.http.get<any>(this.url)
//       .pipe(
//         catchError(Constants.handleError)
//       );
//   }


//   addArchive(Type: number, Name: string | null, Path: string, CreatedBy: number, DocumentFile: File) {
//     if (Type == 1) {
//       return this.http.post(this.url, { Type, Name, Path, CreatedBy })
//         .pipe(
//           catchError(Constants.handleError)
//         );
//     }

//     else if (Type == 2) {
//       const formData = new FormData();
//       formData.append('DocumentFile', DocumentFile, DocumentFile.name);
//       formData.append('Type', Type.toString());
//       if (Name != null)
//         formData.append('Name', Name);
      
//       formData.append('Path', Path);
//       formData.append('CreatedBy', CreatedBy.toString());

//       return this.http.post<any>(this.url, formData)
//         .pipe(
//           catchError(Constants.handleError)
//         );
//     }

//     return;
//   }

//   editArchive(id: number, Name: string) {
//     return this.http.put(this.url + id, { Name })
//       .pipe(
//         catchError(Constants.handleError)
//       );
//   }

//   deleteArchive(id: number) {
//     return this.http.delete<any>(this.url + id)
//       .pipe(
//         catchError(Constants.handleError)
//       );
//   }

// }

  
               
 