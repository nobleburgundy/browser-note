import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CodemirrorModule } from '@ctrl/ngx-codemirror';
import { PreferencesComponent } from './preferences/preferences.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { EditorComponent } from './components/editor/editor.component';
import { LanguageSelectorComponent } from './components/language-selector/language-selector.component';
import { ThemeSelectorComponent } from './components/theme-selector/theme-selector.component';
import { ErrorBannerComponent } from './components/error-banner/error-banner.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    PreferencesComponent,
    EditorComponent,
    LanguageSelectorComponent,
    ThemeSelectorComponent,
    ErrorBannerComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    CodemirrorModule,
    FontAwesomeModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'preferences', component: PreferencesComponent, pathMatch: 'full' }
    ])
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
