import {Component, OnInit} from '@angular/core';
import {NativeAudio} from '@awesome-cordova-plugins/native-audio/ngx';
import {ToastController} from '@ionic/angular';

@Component({
  selector: 'app-audios',
  templateUrl: './audios.page.html',
  styleUrls: ['./audios.page.scss'],
})
export class AudiosPage implements OnInit {
  abrubra = true;
  ai = true;
  aiMamaeAiMeuDeus = true;
  aiaiai = true;
  ainGostei = true;
  aowPotencia = true;
  ata = true;
  atumalaca = true;
  cavalo = true;
  chega = true;
  dancaGatinho = true;
  demais = true;
  ehBrincadeira = true;
  eleGosta = true;
  fail = true;
  ficoBaoNao = true;
  galinha = true;
  irra = true;
  leao = true;
  nao = true;
  okayOkay = true;
  pare = true;
  pewn = true;
  plin = true;
  pratos = true;
  qimfc = true;
  quaBebe = true;
  queCaraSemGraca = true;
  quePapelaoHein = true;
  relincho = true;
  tambor = true;
  taoTaBom = true;
  tapa = true;
  tome = true;
  uh = true;
  uuuui = true;
  vamoDanca = true;
  xiii = true;

  constructor(private nativeAudio: NativeAudio,
              public toastController: ToastController) {
  }

  ngOnInit() {
    //TODO testar o carregamento sem ser em cascata
    this.nativeAudio.preloadSimple('atumalaca', 'assets/audios/atumalaca.mp3').then(() => {
      this.atumalaca = false;
    });

    this.nativeAudio.preloadSimple('danca-gatinho', 'assets/audios/danca-gatinho.mp3').then(() => {
      this.dancaGatinho = false;
    });

    this.nativeAudio.preloadSimple('demais', 'assets/audios/demais.mp3').then(() => {
      this.demais = false;
    });

    this.nativeAudio.preloadSimple('cavalo', 'assets/audios/cavalo.mp3').then(() => {
      this.cavalo = false;
    });

    this.nativeAudio.preloadSimple('tome', 'assets/audios/tome.mp3').then(() => {
      this.tome = false;
    });

    this.nativeAudio.preloadSimple('abrubra', 'assets/audios/abrubra.mp3').then(() => {
      this.abrubra = false;
    });

    this.nativeAudio.preloadSimple('ai', 'assets/audios/ai.mp3').then(() => {
      this.ai = false;
    });

    this.nativeAudio.preloadSimple('ai-mamae-ai-meu-deus', 'assets/audios/ai-mamae-ai-meu-deus.mp3').then(() => {
      this.aiMamaeAiMeuDeus = false;
    });

    this.nativeAudio.preloadSimple('aiaiai', 'assets/audios/aiaiai.mp3').then(() => {
      this.aiaiai = false;
    });

    this.nativeAudio.preloadSimple('ain-gostei', 'assets/audios/ain-gostei.mp3').then(() => {
      this.ainGostei = false;
    });

    this.nativeAudio.preloadSimple('aow-potencia', 'assets/audios/aow-potencia.mp3').then(() => {
      this.aowPotencia = false;
    });

    this.nativeAudio.preloadSimple('ata', 'assets/audios/ata.mp3').then(() => {
      this.ata = false;
    });

    this.nativeAudio.preloadSimple('chega', 'assets/audios/chega.mp3').then(() => {
      this.chega = false;
    });

    this.nativeAudio.preloadSimple('eh-brincadeira', 'assets/audios/eh-brincadeira.mp3').then(() => {
      this.ehBrincadeira = false;
    });

    this.nativeAudio.preloadSimple('ele-gosta', 'assets/audios/ele-gosta.mp3').then(() => {
      this.eleGosta = false;
    });

    this.nativeAudio.preloadSimple('fail-v2', 'assets/audios/fail-v2.mp3').then(() => {
      this.fail = false;
    });

    this.nativeAudio.preloadSimple('fico-bao-nao', 'assets/audios/fico-bao-nao.mp3').then(() => {
      this.ficoBaoNao = false;
    });

    this.nativeAudio.preloadSimple('galinha-v2', 'assets/audios/galinha-v2.mp3').then(() => {
      this.galinha = false;
    });

    this.nativeAudio.preloadSimple('irra', 'assets/audios/irra.mp3').then(() => {
      this.irra = false;
    });

    this.nativeAudio.preloadSimple('leao-v2', 'assets/audios/leao-v2.mp3').then(() => {
      this.leao = false;
    });

    this.nativeAudio.preloadSimple('nao', 'assets/audios/nao.mp3').then(() => {
      this.nao = false;
    });

    this.nativeAudio.preloadSimple('okay-okay', 'assets/audios/okay-okay.mp3').then(() => {
      this.okayOkay = false;
    });

    this.nativeAudio.preloadSimple('pare', 'assets/audios/pare.mp3').then(() => {
      this.pare = false;
    });

    this.nativeAudio.preloadSimple('pewn-v2', 'assets/audios/pewn-v2.mp3').then(() => {
      this.pewn = false;
    });

    this.nativeAudio.preloadSimple('plin-rebentando-v2', 'assets/audios/plin-rebentando-v2.mp3').then(() => {
      this.plin = false;
    });

    this.nativeAudio.preloadSimple('pratos-v2', 'assets/audios/pratos-v2.mp3').then(() => {
      this.pratos = false;
    });

    this.nativeAudio.preloadSimple('qimfc', 'assets/audios/qimfc.mp3').then(() => {
      this.qimfc = false;
    });

    this.nativeAudio.preloadSimple('qua-bebe-v2', 'assets/audios/qua-bebe-v2.mp3').then(() => {
      this.quaBebe = false;
    });

    this.nativeAudio.preloadSimple('que-cara-sem-graca', 'assets/audios/que-cara-sem-graca.mp3').then(() => {
      this.queCaraSemGraca = false;
    });

    this.nativeAudio.preloadSimple('que-papelao-hein', 'assets/audios/que-papelao-hein.mp3').then(() => {
      this.quePapelaoHein = false;
    });

    this.nativeAudio.preloadSimple('relincho-v2', 'assets/audios/relincho-v2.mp3').then(() => {
      this.relincho = false;
    });

    this.nativeAudio.preloadSimple('tambor-v2', 'assets/audios/tambor-v2.mp3').then(() => {
      this.tambor = false;
    });

    this.nativeAudio.preloadSimple('tao-ta-bom', 'assets/audios/tao-ta-bom.mp3').then(() => {
      this.taoTaBom = false;
    });

    this.nativeAudio.preloadSimple('tapa', 'assets/audios/tapa.mp3').then(() => {
      this.tapa = false;
    });

    this.nativeAudio.preloadSimple('uh', 'assets/audios/uh.mp3').then(() => {
      this.uh = false;
    });

    this.nativeAudio.preloadSimple('uuuui', 'assets/audios/uuuui.mp3').then(() => {
      this.uuuui = false;
    });

    this.nativeAudio.preloadSimple('vamo-danca', 'assets/audios/vamo-danca.mp3').then(() => {
      this.vamoDanca = false;
    });

    this.nativeAudio.preloadSimple('xiii', 'assets/audios/xiii.mp3').then(() => {
      this.xiii = false;
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

      case 'abrubra':
        this.nativeAudio.play('abrubra');
        break;

      case 'ai':
        this.nativeAudio.play('ai');
        break;

      case 'ai-mamae-ai-meu-deus':
        this.nativeAudio.play('ai-mamae-ai-meu-deus');
        break;

      case 'aiaiai':
        this.nativeAudio.play('aiaiai');
        break;

      case 'ain-gostei':
        this.nativeAudio.play('ain-gostei');
        break;


      case 'aow-potencia':
        this.nativeAudio.play('aow-potencia');
        break;


      case 'ata':
        this.nativeAudio.play('ata');
        break;


      case 'chega':
        this.nativeAudio.play('chega');
        break;


      case 'danca-gatinho':
        this.nativeAudio.play('danca-gatinho');
        break;


      case 'eh-brincadeira':
        this.nativeAudio.play('eh-brincadeira');
        break;


      case 'ele-gosta':
        this.nativeAudio.play('ele-gosta');
        break;


      case 'fico-bao-nao':
        this.nativeAudio.play('fico-bao-nao');
        break;


      case 'irra':
        this.nativeAudio.play('irra');
        break;


      case 'nao':
        this.nativeAudio.play('nao');
        break;


      case 'okay-okay':
        this.nativeAudio.play('okay-okay');
        break;


      case 'pare':
        this.nativeAudio.play('pare');
        break;


      case 'qimfc':
        this.nativeAudio.play('qimfc');
        break;


      case 'que-cara-sem-graca':
        this.nativeAudio.play('que-cara-sem-graca');
        break;


      case 'que-papelao-hein':
        this.nativeAudio.play('que-papelao-hein');
        break;


      case 'tao-ta-bom':
        this.nativeAudio.play('tao-ta-bom');
        break;


      case 'tapa':
        this.nativeAudio.play('tapa');
        break;


      case 'uh':
        this.nativeAudio.play('uh');
        break;


      case 'uuuui':
        this.nativeAudio.play('uuuui');
        break;


      case 'vamo-danca':
        this.nativeAudio.play('vamo-danca');
        break;


      case 'xiii':
        this.nativeAudio.play('xiii');
        break;

      default:
        this.nativeAudio.play('atumalaca');
    }
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
