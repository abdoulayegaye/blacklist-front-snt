import {Component, OnInit} from '@angular/core';
import {AgentService} from "../../services/back-office/agent.service";

@Component({
  selector: 'app-dashboard-super-admin',
  templateUrl: './dashboard-super-admin.component.html',
  styleUrls: ['./dashboard-super-admin.component.css']
})
export class DashboardSuperAdminComponent implements OnInit{
  constructor(private agentService: AgentService) {}
  ngOnInit(): void {
  }

}
