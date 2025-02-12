"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

type CardGameCardProps = {
  title: string;
  images: { src: string; alt: string }[];
};

export function CardGameCard(props: CardGameCardProps) {
  return (
    <Card className="w-[350px] flex flex-col">
      <CardHeader>
        <CardTitle className="whitespace-pre-wrap">{props.title}</CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-2 gap-4">
        {props.images.map((image, index) => (
          <div
            key={index}
            className="relative aspect-[3/4] overflow-hidden rounded-lg"
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 50vw, 33vw"
            />
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
