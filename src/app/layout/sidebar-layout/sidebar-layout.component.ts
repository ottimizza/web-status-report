import { Component, OnInit, Input, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { User } from '@shared/models/User';
import { MatDialog } from '@angular/material/dialog';
// import { OverlayContainer } from '@angular/cdk/overlay';

// import { ThemeService } from '@app/service/theme.service';

export interface SidebarItem {
  icon: string;
  label: string;
  url: string;
}

@Component({
  selector: 'app-sidebar-layout',
  templateUrl: './sidebar-layout.component.html',
  styleUrls: ['./sidebar-layout.component.scss']
})
export class SidebarLayoutComponent implements OnInit {
  public items: SidebarItem[];
  public currentUser: User;

  constructor(@Inject(DOCUMENT) public document: Document, public dialog: MatDialog) {}

  public hide(e) {
    this.document.getElementsByTagName('body')[0].classList.remove('show-sidebar');
  }

  ngOnInit() {
    this.currentUser = User.fromLocalStorage();
    this.items = [
      { icon: 'fad fa-briefcase', label: 'Integrações', url: '/integracoes' },
      { icon: 'fad fa-tasks', label: 'Em Projeto', url: '/projetos' }
      // { icon: 'fad fa-box', label: 'Aplicativos', url: '/dashboard/products' },
      // { icon: 'fad fa-users', label: 'Usuários', url: '/dashboard/users' },
      // { icon: 'fad fa-industry-alt', label: 'Empresas', url: '/dashboard/organizations' }
    ];
  }
}
