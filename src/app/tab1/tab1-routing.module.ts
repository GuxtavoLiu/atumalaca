import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {Tab1Page} from './tab1.page';
import {NativeAudio} from '@awesome-cordova-plugins/native-audio/ngx';

const routes: Routes = [
  {
    path: '',
    component: Tab1Page,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [
    NativeAudio
  ]
})
export class Tab1PageRoutingModule {
}
