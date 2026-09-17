import React, { useState, useEffect } from 'react';
import { ScreenId } from './types';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { HomeScreen } from './screens/HomeScreen';
import { MenuScreen } from './screens/MenuScreen';
import { ScheduleMapScreen } from './screens/ScheduleMapScreen';
import { RegistrationScreen } from './screens/RegistrationScreen';
import { DivinationScreen } from './screens/DivinationScreen';
import { ritualAudio } from './utils/audio';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<ScreenId>('home');
  const [isAudioActive, setIsAudioActive] = useState(false);
  const [isMistActive, setIsMistActive] = useState(true);

  const handleToggleAudio = () => {
    if (!isAudioActive) {
      ritualAudio.startAmbientLoop();
      setIsAudioActive(true);
    } else {
      ritualAudio.stopAmbientLoop();
      setIsAudioActive(false);
    }
  };

  const handleToggleMist = () => {
    setIsMistActive((prev) => !prev);
  };

  // Scroll to top upon navigating to another screen
  const handleNavigate = (screen: ScreenId) => {
    setCurrentScreen(screen);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen w-full max-w-full overflow-x-hidden bg-[#191207] text-[#f0e0cc] flex flex-col relative selection:bg-[#8b0000] selection:text-[#ffe088]">
      {/* Background Spiritual Texture Overlay */}
      <div
        className="fixed inset-0 pointer-events-none opacity-40 z-0"
        style={{
          backgroundImage:
            'radial-gradient(#3c3326 1px, transparent 1px), radial-gradient(#221a0e 1px, #191207 1px)',
          backgroundSize: '32px 32px',
          backgroundPosition: '0 0, 16px 16px'
        }}
      />

      {/* Spirit Fog / Incense Mist Overlay */}
      {isMistActive && (
        <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
          <div
            className="absolute -inset-[30%] opacity-25 animate-fog"
            style={{
              background:
                'radial-gradient(circle at 50% 50%, rgba(160, 221, 230, 0.08) 0%, rgba(139, 0, 0, 0.06) 40%, transparent 75%)',
              filter: 'blur(40px)'
            }}
          />
        </div>
      )}

      {/* Persistent Sticky Header Wooden Beam Navigation */}
      <Navigation
        currentScreen={currentScreen}
        onNavigate={handleNavigate}
        isAudioActive={isAudioActive}
        onToggleAudio={handleToggleAudio}
        isMistActive={isMistActive}
        onToggleMist={handleToggleMist}
      />

      {/* Main Content Area */}
      <main className="flex-1 w-full max-w-full overflow-x-hidden relative z-20">
        {currentScreen === 'home' && <HomeScreen onNavigate={handleNavigate} />}
        {currentScreen === 'menu' && <MenuScreen />}
        {currentScreen === 'schedule' && <ScheduleMapScreen />}
        {currentScreen === 'registration' && <RegistrationScreen />}
        {currentScreen === 'divination' && <DivinationScreen />}
      </main>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
