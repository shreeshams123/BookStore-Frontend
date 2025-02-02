import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatToolbarModule} from '@angular/material/toolbar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import { BookCardComponent } from './components/book-card/book-card.component';
import { BooksContainerComponent } from './components/books-container/books-container.component';
import { HttpClientModule } from '@angular/common/http';
import { BookDetailsComponent } from './components/book-details/book-details.component';
import { FormsModule } from '@angular/forms';
import { SearchPipe } from './pipe/search.pipe';
import { LoginSignupComponent } from './components/login-signup/login-signup.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { CartContainerComponent } from './components/cart-container/cart-container.component';
import { CartItemComponent } from './components/cart-item/cart-item.component';
import { WishlistContainerComponent } from './components/wishlist-container/wishlist-container.component';
import {MatMenuModule} from '@angular/material/menu';
import { AddressItemComponent } from './components/address-item/address-item.component';
import { OrderSuccessComponent } from './components/order-success/order-success.component';
import { OrderContainerComponent } from './components/order-container/order-container.component';
import { MatInputModule } from '@angular/material/input';
import { LoginPromptComponent } from './components/login-prompt/login-prompt.component';
import { ProfileComponent } from './components/profile/profile.component';
import {MatDialogModule} from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    BookCardComponent,
    BooksContainerComponent,
    BookDetailsComponent,
    SearchPipe,
    LoginSignupComponent,
    CartContainerComponent,
    CartItemComponent,
    WishlistContainerComponent,
    AddressItemComponent,
    OrderSuccessComponent,
    OrderContainerComponent,
    LoginPromptComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    MatMenuModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MatToolbarModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    MatIconModule,
    HttpClientModule,
    FormsModule,
    MatTabsModule,
    MatInputModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
