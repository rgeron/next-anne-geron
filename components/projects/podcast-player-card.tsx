"use client";

import { cn } from "@/lib/utils";
import { PauseIcon, PlayIcon, RewindIcon } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

type PodcastPlayerProps = {
  title: string;
  src: string;
  startTime: number;
  endTime: number;
};

export function PodcastPlayerCard(props: PodcastPlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(props.startTime);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.currentTime = props.startTime;
    }
  }, [props.startTime]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleTimeUpdate = () => {
      setCurrentTime(audio.currentTime);
      if (audio.currentTime >= props.endTime) {
        audio.pause();
        setIsPlaying(false);
        audio.currentTime = props.startTime;
      }
    };

    audio.addEventListener("timeupdate", handleTimeUpdate);
    return () => audio.removeEventListener("timeupdate", handleTimeUpdate);
  }, [props.endTime, props.startTime]);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const rewind = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = props.startTime;
      setCurrentTime(props.startTime);
    }
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  const progress =
    ((currentTime - props.startTime) / (props.endTime - props.startTime)) * 100;

  return (
    <Card className="w-[280px]">
      <CardHeader>
        <CardTitle className="text-lg line-clamp-2">{props.title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <audio ref={audioRef} src={props.src} />

        <div className="h-1 w-full bg-secondary rounded-full overflow-hidden">
          <div
            className="h-full bg-primary transition-all duration-200"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="flex items-center justify-between">
          <span className="text-sm text-muted-foreground">
            {formatTime(currentTime)}
          </span>
          <span className="text-sm text-muted-foreground">
            {formatTime(props.endTime)}
          </span>
        </div>

        <div className="flex justify-center gap-2">
          <Button
            variant="outline"
            size="icon"
            onClick={rewind}
            className="h-10 w-10"
          >
            <RewindIcon className="h-4 w-4" />
          </Button>
          <Button
            onClick={togglePlay}
            size="icon"
            className={cn(
              "h-10 w-10",
              isPlaying && "bg-primary-foreground text-primary"
            )}
          >
            {isPlaying ? (
              <PauseIcon className="h-4 w-4" />
            ) : (
              <PlayIcon className="h-4 w-4" />
            )}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
