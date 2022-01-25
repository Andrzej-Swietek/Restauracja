import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  constructor() { }
  saveSession:boolean = true;

  ngOnInit(): void {
  }

  onSessionSettingsChange():void{
    this.saveSession = !this.saveSession;
  }

  saveHandle():void{
    localStorage.setItem("session-persistence", `${this.saveSession}`);

  }


}
