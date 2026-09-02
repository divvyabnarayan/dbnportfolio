"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { withBasePath } from "@/lib/basePath";

function formatTime(seconds: number) {
  if (!Number.isFinite(seconds) || seconds < 0) return "0:00";
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${s.toString().padStart(2, "0")}`;
}

export function VinylPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  // Known length of public/audio/daylight.mp3 (~4:54) used until metadata loads
  const [duration, setDuration] = useState(294.5);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const syncDuration = () => {
      const next = audio.duration;
      if (Number.isFinite(next) && next > 0) {
        setDuration(next);
      }
    };

    const onEnded = () => setPlaying(false);
    const onPause = () => setPlaying(false);
    const onPlay = () => setPlaying(true);
    const onTime = () => {
      setCurrentTime(audio.currentTime);
      syncDuration();
    };

    audio.addEventListener("ended", onEnded);
    audio.addEventListener("pause", onPause);
    audio.addEventListener("play", onPlay);
    audio.addEventListener("timeupdate", onTime);
    audio.addEventListener("loadedmetadata", syncDuration);
    audio.addEventListener("durationchange", syncDuration);
    audio.addEventListener("loadeddata", syncDuration);
    audio.addEventListener("canplay", syncDuration);

    audio.load();
    syncDuration();

    return () => {
      audio.removeEventListener("ended", onEnded);
      audio.removeEventListener("pause", onPause);
      audio.removeEventListener("play", onPlay);
      audio.removeEventListener("timeupdate", onTime);
      audio.removeEventListener("loadedmetadata", syncDuration);
      audio.removeEventListener("durationchange", syncDuration);
      audio.removeEventListener("loadeddata", syncDuration);
      audio.removeEventListener("canplay", syncDuration);
    };
  }, []);

  const togglePlayback = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    try {
      if (audio.paused) {
        await audio.play();
      } else {
        audio.pause();
      }
    } catch {
      setPlaying(false);
    }
  };

  const seek = (value: number) => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.currentTime = value;
    setCurrentTime(value);
  };

  const skip = (delta: number) => {
    const audio = audioRef.current;
    if (!audio) return;
    const next = Math.min(Math.max(audio.currentTime + delta, 0), duration || 0);
    audio.currentTime = next;
    setCurrentTime(next);
  };

  const progress = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <div className="flex h-full min-h-0 flex-col overflow-hidden rounded-[1.35rem] bg-[#121212] px-3.5 py-3.5 text-white shadow-[0_8px_30px_-12px_rgba(18,24,22,0.28)] sm:rounded-[1.5rem] sm:px-4 sm:py-4">
      <audio ref={audioRef} src={withBasePath("/audio/daylight.mp3")} preload="auto" />

      <div className="flex items-center justify-between text-white/70">
        <span className="text-[0.65rem] font-semibold tracking-[0.12em] text-[#1DB954] uppercase">
          Now playing
        </span>
        <span className="flex h-6 w-6 items-center justify-center rounded-full text-lg leading-none text-white/60">
          ···
        </span>
      </div>

      <div className="relative mx-auto mt-3 aspect-square w-[86%] max-h-[46%] overflow-hidden rounded-2xl bg-[#282828] shadow-[0_18px_40px_-18px_rgba(0,0,0,0.85)]">
        <Image
          src="/brand/daylight-art.png?v=2"
          alt="Daylight album art"
          fill
          unoptimized
          sizes="280px"
          className="object-cover"
        />
      </div>

      <div className="mt-4 flex items-start justify-between gap-3">
        <div className="min-w-0">
          <p className="truncate text-base font-bold tracking-[-0.02em] sm:text-lg">
            Daylight
          </p>
          <p className="mt-0.5 truncate text-xs text-white/55 sm:text-sm">
            Taylor Swift
          </p>
        </div>
        <button
          type="button"
          aria-label="Liked"
          className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center text-[#1DB954] transition hover:scale-110"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden>
            <path d="M12 21.35 10.55 20.03C5.4 15.36 2 12.27 2 8.5 2 5.41 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.08C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.41 22 8.5c0 3.77-3.4 6.86-8.55 11.54L12 21.35Z" />
          </svg>
        </button>
      </div>

      <div className="mt-4">
        <input
          type="range"
          min={0}
          max={duration || 0}
          step={0.1}
          value={currentTime}
          onChange={(e) => seek(Number(e.target.value))}
          aria-label="Seek Daylight"
          className="h-1 w-full cursor-pointer appearance-none rounded-full bg-white/20 [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white"
          style={{
            background: `linear-gradient(to right, #1DB954 ${progress}%, rgba(255,255,255,0.2) ${progress}%)`,
          }}
        />
        <div className="mt-1.5 flex justify-between text-[0.65rem] tabular-nums text-white/45">
          <span>{formatTime(currentTime)}</span>
          <span>{formatTime(duration)}</span>
        </div>
      </div>

      <div className="mt-auto flex items-center justify-between px-1 pt-3 pb-1">
        <button
          type="button"
          aria-label="Shuffle"
          className="flex h-7 w-7 items-center justify-center"
        >
          <Image
            src="/brand/shuffle-white.png"
            alt=""
            width={26}
            height={26}
            unoptimized
            className="h-[26px] w-[26px] object-contain"
          />
        </button>

        <div className="flex items-center gap-5">
          <button
            type="button"
            onClick={() => skip(-10)}
            aria-label="Back 10 seconds"
            className="text-white"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden>
              <path d="M6 6v12h2.2V6H6Zm4.2 6 9.3 6.1V5.9L10.2 12Z" />
            </svg>
          </button>

          <button
            type="button"
            onClick={togglePlayback}
            aria-label={playing ? "Pause Daylight" : "Play Daylight"}
            className="flex h-12 w-12 items-center justify-center rounded-full bg-[#1DB954] text-[#121212] shadow-[0_8px_20px_-8px_rgba(29,185,84,0.45)] transition hover:scale-105 hover:bg-[#1ed760]"
          >
            {playing ? (
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden>
                <rect x="6" y="5" width="4" height="14" rx="1" />
                <rect x="14" y="5" width="4" height="14" rx="1" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" className="h-5 w-5 translate-x-[1px]" fill="currentColor" aria-hidden>
                <path d="M8 5.5v13l11-6.5L8 5.5Z" />
              </svg>
            )}
          </button>

          <button
            type="button"
            onClick={() => skip(10)}
            aria-label="Forward 10 seconds"
            className="text-white"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden>
              <path d="M15.8 6v12H18V6h-2.2Zm-1.5 6L5 18.1V5.9L14.3 12Z" />
            </svg>
          </button>
        </div>

        <button
          type="button"
          aria-label="Repeat"
          className="text-[#1DB954]"
        >
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden>
            <path d="M7 7h10v3l4-3.5L17 3v3H5v6h2V7Zm10 10H7v-3l-4 3.5L7 21v-3h12v-6h-2v5Z" />
          </svg>
        </button>
      </div>
    </div>
  );
}
