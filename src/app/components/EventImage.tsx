import Image from "next/image";

export type EventImageProps = {
    src: string;
    alt: string;
};

export function EventImage(props: EventImageProps) {
  return (
    <Image
      src={props.src}
      alt={props.alt}
      width={300}
      height={300}
      priority
      className="rounded-2xl"
    />
  );
}
