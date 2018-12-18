import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tobe';
  fullname = 'Tobias Bernasconi';
  birthdate = '03.07.1998';
  country = 'Switzerland';
  lang = 'German, English, Finish, Italian';
  programming = "C#, Java, JavaScript, TypeScript, Angular";

  games = 'CS:GO, Tomb Raider';
  sports = 'Skiing, Eishockey';
  esportTeams = 'Fnatic, Team Liquid, SK Telecom';
  sportTeams = 'Winninpeg Jets';
}
