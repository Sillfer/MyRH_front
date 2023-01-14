import { Component } from '@angular/core';

@Component({
  selector: 'app-agent',
  templateUrl: './agent.component.html',
  styleUrls: ['./agent.component.css']
})
export class AgentComponent {
  constructor() { }

  ngOnInit(): void{
    if (localStorage.getItem("admin") == null)
    {
      // if not, redirect to login page
      window.location.href = "/auth/admin";
    }
  }

}
