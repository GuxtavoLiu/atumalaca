import {Component, OnInit} from '@angular/core';
import {NativeAudio} from '@awesome-cordova-plugins/native-audio/ngx';
import {ToastController} from '@ionic/angular';

@Component({
  selector: 'app-audios',
  templateUrl: './audios.page.html',
  styleUrls: ['./audios.page.scss'],
})
export class AudiosPage implements OnInit {


  constructor(private nativeAudio: NativeAudio,
              public toastController: ToastController) {
  }

  ngOnInit() {
    this.nativeAudio.preloadSimple('atumalaca', 'assets/audios/atumalaca.mp3').then(r => {
      this.presentToast('atumalaca carregado');

      this.nativeAudio.preloadSimple('cavalo', 'assets/audios/cavalo.mp3').then(i => {
        this.presentToast('cavalo carregado');

        this.nativeAudio.preloadSimple('tome', 'assets/audios/tome.mp3').then(j => {
          this.presentToast('tome carregado');

          this.nativeAudio.preloadSimple('demais', 'assets/audios/demais.mp3').then(k => {
            this.presentToast('demais carregado');
          });
        });
      });
    });

  }

  play(audio: string) {
    switch (audio) {
      case 'atumalaca':
        this.nativeAudio.play('atumalaca');
        break;
      case 'cavalo':
        this.nativeAudio.play('cavalo');
        break;
      case 'demais':
        this.nativeAudio.play('demais');
        break;
      case 'tome':
        this.nativeAudio.play('tome');
        break;
      default:
        this.nativeAudio.play('atumalaca');
    }

    // this.nativeAudio.preloadComplex('uniqueId2', 'path/to/file2.mp3', 1, 1, 0).then(this.onSuccess, this.onError);

    // this.nativeAudio.play('uniqueId1').then(this.onSuccess, this.onError);

// can optionally pass a callback to be called when the file is done playing
//       this.nativeAudio.play('uniqueId1', () => console.log('uniqueId1 is done playing'));
//
//       this.nativeAudio.loop('uniqueId2').then(this.onSuccess, this.onError);
//
//       this.nativeAudio.setVolumeForComplexAsset('uniqueId2', 0.6).then(this.onSuccess, this.onError);
//
//       this.nativeAudio.stop('uniqueId1').then(this.onSuccess, this.onError);
//
//       this.nativeAudio.unload('uniqueId1').then(this.onSuccess, this.onError);
  }

  onSuccess() {
    console.log('deu bom');
  }

  onError() {
    console.log('deu ruim');

  }

  async presentToast(messageStr: string) {
    const toast = await this.toastController.create({
      message: messageStr,
      duration: 2000
    });
    toast.present();
  }


}
