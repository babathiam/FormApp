import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InscriptionComponent } from './Compenents/inscription/inscription.component';
import { ConnexionComponent } from './Compenents/connexion/connexion.component';
import { MotsPasseOblierComponent } from './Compenents/mots-passe-oblier/mots-passe-oblier.component';
import { IdentifierComponent } from './Compenents/identifier/identifier.component';
import { FormulaireComponent } from './formulaire/formulaire.component';

 
const routes: Routes = [
{
  path: '',
  component: InscriptionComponent
},
{
  path: 'Connexion',
  component:  ConnexionComponent
},

  
{
  path: 'inscription',
  component:  InscriptionComponent
},

{
  path: 'motsPasseOublier',
  component: MotsPasseOblierComponent
},

{
  path: 'identifier',
  component: IdentifierComponent
},

{
  path: 'CRÉER UN FORMULAIRE',
  component: FormulaireComponent
},




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
