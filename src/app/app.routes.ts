import { Routes } from '@angular/router';
import { StructuralDirComponent } from './components/structural-dir/structural-dir.component';
import { AttributeDirComponent } from './components/attribute-dir/attribute-dir.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { IfElseComponent } from './components/controlFlow/if-else/if-else.component';
import { PipeComponent } from './components/pipe/pipe.component';
import { TemplateComponent } from './components/forms/template/template.component';
import { ReactiveComponent } from './components/forms/reactive/reactive.component';
import { GetApiComponent } from './components/api/get-api/get-api.component';
import { PostApiComponent } from './components/api/post-api/post-api.component';

export const routes: Routes = [
  { path: 'structural-dir', component: StructuralDirComponent },
  { path: 'attribute-dir', component: AttributeDirComponent },
  { path: 'if-else', component: IfElseComponent },
  { path: 'pipe', component: PipeComponent },
  { path: 'template', component: TemplateComponent },
  { path: 'reactive', component: ReactiveComponent },
  { path: 'get-api', component: GetApiComponent },
  { path: 'post-api', component: PostApiComponent },

  // Default route (redirect to StructuralDirComponent)
  { path: '', redirectTo: '/structural-dir', pathMatch: 'full' },

  // Wildcard route (redirect invalid URLs)
  { path: '**', component: NotFoundComponent }
];
