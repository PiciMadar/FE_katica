import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { TListComponent } from './components/trafics/list/list.component';
import { CListComponent } from './components/categories/list/list.component';
import { StatisticsComponent } from './components/statistics/statistics.component';
import { CostumerComponent} from './components/costumers/form/form.component';
import { ProductsComponent } from './components/products/form/form.component';
import { PricingComponent } from './components/pricing/form/form.component';
import { CosListComponent } from './components/costumers/list/list.component';
import { ProListComponent } from './components/products/list/list.component';
import { PriListComponent } from './components/pricing/list/list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    HeaderComponent,
    NavbarComponent,
    FooterComponent,
    TListComponent,
    CListComponent,
    StatisticsComponent,
    CostumerComponent,
    CosListComponent,
    ProductsComponent,
    ProListComponent,
    PricingComponent,
    PriListComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  appTitle = 'Katifa Büfé App';
  company = 'Bajai SZC Türr István Technikum';
  author = '13.A szoftverfejlesztő'
}
