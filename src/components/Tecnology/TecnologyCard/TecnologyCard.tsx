import Image from "next/image";

type Props = {
  imgSrc: string
  title: string
}

export function TecnologyCard({imgSrc, title}: Props) {
   return (
    <div className="
      group relative flex flex-col items-center justify-center 
      w-36 h-44 rounded-xl bg-section
      transition-all duration-300
      shadow-lg shadow-black/40
      hover:shadow-[0_0_25px_5px_rgba(0,150,255,0.5)]
    ">
      
      <Image
        src={imgSrc}
        width={90}
        height={90}
        alt="Tecnologia"
        className="select-none"
      />

      <p className="text-foreground text-center mt-4 text-sm font-medium z-10">
        {title.toUpperCase()}
      </p>
    </div>
  );
}
