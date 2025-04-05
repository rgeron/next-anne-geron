"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { PlayIcon } from "lucide-react";

type VideoPlayerCardProps = {
  title: string;
  description?: string;
  videos: { title: string; src: string }[];
};

export function VideoPlayerCard(props: VideoPlayerCardProps) {
  return (
    <Card className="w-[350px] flex flex-col">
      <CardHeader>
        <CardTitle className="whitespace-normal font-roboto">
          {props.title}
        </CardTitle>
        {props.description && (
          <CardDescription className="font-roboto">
            {props.description}
          </CardDescription>
        )}
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        {props.videos.map((video, index) => (
          <Dialog key={index}>
            <DialogTrigger asChild>
              <Button
                variant="outline"
                className="w-full flex gap-2 text-left min-h-[60px] font-roboto"
              >
                <PlayIcon className="h-4 w-4" />
                <span className="whitespace-normal break-words">
                  {video.title}
                </span>
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-4xl">
              <DialogTitle className="font-roboto">{video.title}</DialogTitle>

              <video controls className="w-full">
                <source src={video.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </DialogContent>
          </Dialog>
        ))}
      </CardContent>
    </Card>
  );
}
