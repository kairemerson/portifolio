import SlideOnScroll from "../SlideOnScroll/SlideOnScroll";
import { TecnologyCard } from "./TecnologyCard/TecnologyCard";

export default function Tecnology() {
  return (
    <section className="w-full min-h-screen bg-background flex flex-col items-center px-6 pb-20 md:px-16" id="tecnology">
        <h2 className="text-4xl text-foreground font-semibold mb-24 mt-24">Tecnologias</h2>

        <div className="flex flex-wrap gap-6 max-w-7xl ">
            <SlideOnScroll from="top" delay={0}>
              <TecnologyCard imgSrc="/logo-html-5-1536.png" title="html"/>
            </SlideOnScroll>
            <SlideOnScroll from="top" delay={50}>
              <TecnologyCard imgSrc="/logo-css-3-2048.png" title="css"/>
            </SlideOnScroll>
            <SlideOnScroll from="top" delay={100}>
              <TecnologyCard imgSrc="/javascript-logo-1.png" title="javascript"/>
            </SlideOnScroll>
            <SlideOnScroll from="top" delay={150}>
              <TecnologyCard imgSrc="/react.png" title="react"/>
            </SlideOnScroll>
            <SlideOnScroll from="top" delay={200}>
              <TecnologyCard imgSrc="/typescript.png" title="typescript"/>
            </SlideOnScroll>
            <SlideOnScroll from="top" delay={250}>
              <TecnologyCard imgSrc="/tailwind-css.png" title="tailwind-css"/>
            </SlideOnScroll>
            <SlideOnScroll from="top" delay={300}>
              <TecnologyCard imgSrc="/styledcomponents.png" title="styled components"/>
            </SlideOnScroll>
            <SlideOnScroll from="top" delay={350}>
              <TecnologyCard imgSrc="/Bootstrap_logo.png" title="bootstrap"/>
            </SlideOnScroll>
            <SlideOnScroll from="top" delay={400}>
              <TecnologyCard imgSrc="/sass.png" title="sass"/>
            </SlideOnScroll>
            <SlideOnScroll from="top" delay={450}>
              <TecnologyCard imgSrc="/next.jpg" title="next"/>
            </SlideOnScroll>
            <SlideOnScroll from="top" delay={500}>
              <TecnologyCard imgSrc="/react-query.png" title="react query"/>
            </SlideOnScroll>
            <SlideOnScroll from="top" delay={550}>
              <TecnologyCard imgSrc="/shadcnui.png" title="shadcn-ui"/>
            </SlideOnScroll>
            <SlideOnScroll from="top" delay={600}>
              <TecnologyCard imgSrc="/reacthookform.png" title="react hook form"/>
            </SlideOnScroll>
            <SlideOnScroll from="top" delay={650}>
              <TecnologyCard imgSrc="/zod.webp" title="zod"/>
            </SlideOnScroll>
            <SlideOnScroll from="top" delay={700}>
              <TecnologyCard imgSrc="/react.png" title="react native"/>
            </SlideOnScroll>
            <SlideOnScroll from="top" delay={750}>
              <TecnologyCard imgSrc="/Git.png" title="git"/>
            </SlideOnScroll>
            <SlideOnScroll from="top" delay={800}>
              <TecnologyCard imgSrc="/github.png" title="github"/>
            </SlideOnScroll>
        </div>

    </section>
  )
}
