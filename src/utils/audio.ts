// Web Audio API bronze bell / singing bowl resonance synthesizer
class RitualSoundSynthesizer {
  private audioCtx: AudioContext | null = null;
  private intervalId: number | null = null;

  private initContext() {
    if (!this.audioCtx) {
      const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioContextClass) {
        this.audioCtx = new AudioContextClass();
      }
    }
    if (this.audioCtx && this.audioCtx.state === 'suspended') {
      this.audioCtx.resume();
    }
  }

  // Play a single harmonic temple bell chime
  public playBell(frequency = 432) {
    try {
      this.initContext();
      if (!this.audioCtx) return;

      const now = this.audioCtx.currentTime;

      // Master gain
      const masterGain = this.audioCtx.createGain();
      masterGain.gain.setValueAtTime(0.35, now);
      masterGain.gain.exponentialRampToValueAtTime(0.001, now + 4.5);
      masterGain.connect(this.audioCtx.destination);

      // Fundamental harmonic
      const osc1 = this.audioCtx.createOscillator();
      osc1.type = 'sine';
      osc1.frequency.setValueAtTime(frequency, now);
      osc1.connect(masterGain);

      // Overtone 1
      const osc2 = this.audioCtx.createOscillator();
      osc2.type = 'sine';
      osc2.frequency.setValueAtTime(frequency * 2.76, now);
      const gain2 = this.audioCtx.createGain();
      gain2.gain.setValueAtTime(0.18, now);
      gain2.gain.exponentialRampToValueAtTime(0.001, now + 2.5);
      osc2.connect(gain2);
      gain2.connect(masterGain);

      osc1.start(now);
      osc2.start(now);
      osc1.stop(now + 4.5);
      osc2.stop(now + 2.5);
    } catch {
      // Ignore if user has not interacted yet
    }
  }

  // Start periodic ambient bell
  public startAmbientLoop() {
    this.playBell(384);
    if (this.intervalId) clearInterval(this.intervalId);
    this.intervalId = window.setInterval(() => {
      this.playBell(384 + (Math.random() > 0.5 ? 48 : 0));
    }, 12000);
  }

  public stopAmbientLoop() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }
}

export const ritualAudio = new RitualSoundSynthesizer();
