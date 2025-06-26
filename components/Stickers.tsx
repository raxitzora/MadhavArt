import { TextHoverEffect } from "@/components/ui/text-hover-effect";

export default function Stickers() {
  return (
    <section className="h-[300px] md:h-[400px] flex items-center justify-center bg-black">
      <TextHoverEffect
  text="Stickers"
  automatic={true}
  duration={4} // slower = longer stroke animation
  className="w-full h-full"
/>

    </section>
  );
}
