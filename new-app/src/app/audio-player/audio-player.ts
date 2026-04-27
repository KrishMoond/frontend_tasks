import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Track {
  title: string;
  artist: string;
  src: string;
}

@Component({
  selector: 'app-audio-player',
  imports: [CommonModule],
  templateUrl: './audio-player.html'
})
export class AudioPlayer {
  currentIndex = 0;
  isPlaying = false;

  tracks: Track[] = [
    { title: 'Clair de Lune', artist: 'Debussy', src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3' },
    { title: 'Spring Waltz', artist: 'Chopin', src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3' },
    { title: 'Moonlight', artist: 'Beethoven', src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3' },
    { title: 'Fur Elise', artist: 'Beethoven', src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3' }
  ];

  get currentTrack(): Track {
    return this.tracks[this.currentIndex];
  }

  togglePlay(audio: HTMLAudioElement) {
    if (this.isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    this.isPlaying = !this.isPlaying;
  }

  prev(audio: HTMLAudioElement) {
    this.currentIndex = (this.currentIndex - 1 + this.tracks.length) % this.tracks.length;
    this.reloadAndPlay(audio);
  }

  next(audio: HTMLAudioElement) {
    this.currentIndex = (this.currentIndex + 1) % this.tracks.length;
    this.reloadAndPlay(audio);
  }

  selectTrack(index: number, audio: HTMLAudioElement) {
    this.currentIndex = index;
    this.reloadAndPlay(audio);
  }

  private reloadAndPlay(audio: HTMLAudioElement) {
    audio.load();
    audio.play();
    this.isPlaying = true;
  }
}
