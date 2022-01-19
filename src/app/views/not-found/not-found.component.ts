import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit {

  constructor(private http: HttpClient) { }

  meme: string = "";
  ngOnInit(): void {
    this.http.get("https://api.imgflip.com/get_memes")
      .subscribe( data=> {
        this.meme = data[0]
      })
  }

}
