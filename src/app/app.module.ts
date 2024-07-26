import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InscriptionComponent } from './Compenents/inscription/inscription.component';
import { ConnexionComponent } from './Compenents/connexion/connexion.component';
import { MotsPasseOblierComponent } from './Compenents/mots-passe-oblier/mots-passe-oblier.component';
import { IdentifierComponent } from './Compenents/identifier/identifier.component';
import { FormulaireComponent } from './formulaire/formulaire.component';


 
@NgModule({
  declarations: [
    AppComponent,
    InscriptionComponent,
    ConnexionComponent,
    MotsPasseOblierComponent,
    IdentifierComponent,
    FormulaireComponent,
    
   
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
