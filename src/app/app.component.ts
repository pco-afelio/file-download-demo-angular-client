import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FileSaverService } from 'ngx-filesaver';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  private downloadUrl = 'http://localhost:8080/download';

  constructor(private httpClient: HttpClient, private fileSaverService: FileSaverService) {}

  download(filename: string) {
    this.httpClient.get(this.downloadUrl, {observe: 'response', responseType: 'blob'})
      .subscribe(res => {
        this.fileSaverService.save(res.body, filename);
      });
  }
}
