import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './components/navbar/navbar';
import { FooterBox } from "./components/footer-box/footer-box";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, FooterBox],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'the-movie-zone';
}
