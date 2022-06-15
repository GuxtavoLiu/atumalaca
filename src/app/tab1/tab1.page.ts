import {Component} from '@angular/core';
import {NativeAudio} from '@awesome-cordova-plugins/native-audio/ngx';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(private nativeAudio: NativeAudio) {
  }

  play(audio: string) {
    if (audio === 'atumalaca') {
      this.nativeAudio.preloadSimple('uniqueId1', 'src/assets/audios/atumalaca.mp3').then(this.onSuccess, this.onError);
      // this.nativeAudio.preloadComplex('uniqueId2', 'path/to/file2.mp3', 1, 1, 0).then(this.onSuccess, this.onError);

      // this.nativeAudio.play('uniqueId1').then(this.onSuccess, this.onError);

// can optionally pass a callback to be called when the file is done playing
      this.nativeAudio.play('uniqueId1', () => console.log('uniqueId1 is done playing'));
//
//       this.nativeAudio.loop('uniqueId2').then(this.onSuccess, this.onError);
//
//       this.nativeAudio.setVolumeForComplexAsset('uniqueId2', 0.6).then(this.onSuccess, this.onError);
//
//       this.nativeAudio.stop('uniqueId1').then(this.onSuccess, this.onError);
//
//       this.nativeAudio.unload('uniqueId1').then(this.onSuccess, this.onError);
    }
  }

  onSuccess() {
    console.log('deu bom');
  }

  onError() {
    console.log('deu ruim');

  }
}
