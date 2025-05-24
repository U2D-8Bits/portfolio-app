import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenuModule } from 'primeng/menu';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header-ui',
  standalone: true,
  imports: [MenuModule, ButtonModule, CommonModule],
  templateUrl: './header-ui.component.html',
  styleUrls: ['./header-ui.component.css']
})
export class HeaderUiComponent {
  @ViewChild('mobileMenu') mobileMenuRef!: ElementRef;
  @ViewChild('menuButton') menuButtonRef!: ElementRef;
  isMobileMenuOpen = false;

  items: MenuItem[] = [
    {
      label: 'Inicio',
      icon: 'pi pi-home',
      command: () => this.scrollToSection('home')
    },
    {
      label: 'Experiencia',
      icon: 'pi pi-briefcase',
      command: () => this.scrollToSection('experience')
    },
    {
      label: 'Proyectos',
      icon: 'pi pi-folder',
      command: () => this.scrollToSection('projects')
    },
    {
      label: 'Sobre mí',
      icon: 'pi pi-user',
      command: () => this.scrollToSection('about')
    },
    {
      label: 'Tecnologías',
      icon: 'pi pi-code',
      command: () => this.scrollToSection('technologies')
    },
    {
      items: [
        {
          icon:'pi pi-linkedin',
          command: () => window.open('https://www.linkedin.com/in/israelbolanos/', '_blank')
        },
        {
          icon: 'pi pi-github',
          command: () => window.open('https://github.com/U2D-8Bits', '_blank')
        }
      ]
    }
  ];

  constructor(private renderer: Renderer2) {}

  ngAfterViewInit() {
    this.renderer.listen('window', 'click', (event: Event) => {
      if (this.isMobileMenuOpen && this.mobileMenuRef && this.menuButtonRef) {
        const menuEl = this.mobileMenuRef.nativeElement;
        const buttonEl = this.menuButtonRef.nativeElement;
        if (!menuEl.contains(event.target) && !buttonEl.contains(event.target)) {
          this.isMobileMenuOpen = false;
        }
      }
    });
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  closeMobileMenu() {
    this.isMobileMenuOpen = false;
  }

  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      this.closeMobileMenu();
    }
  }

  openExternal(url: string) {
    window.open(url, '_blank');
    this.closeMobileMenu();
  }
}
