import { TecnologyCard } from "./TecnologyCard/TecnologyCard";

export default function Tecnology() {
  return (
    <section className="w-full min-h-screen bg-bgDark flex flex-col items-center px-6 md:px-16" id="tecnology">
        <h2 className="text-4xl text-white font-semibold mb-24 mt-24">Tecnologias</h2>

        <div className="flex flex-wrap gap-6 max-w-7xl ">

            <TecnologyCard imgSrc="/logo-html-5-1536.png" title="html"/>
            <TecnologyCard imgSrc="/logo-css-3-2048.png" title="css"/>
            <TecnologyCard imgSrc="/javascript-logo-1.png" title="javascript"/>
            <TecnologyCard imgSrc="/react.png" title="react"/>
            <TecnologyCard imgSrc="/typescript.png" title="typescript"/>
            <TecnologyCard imgSrc="/tailwind-css.png" title="tailwind-css"/>
            <TecnologyCard imgSrc="/styledcomponents.png" title="styled components"/>
            <TecnologyCard imgSrc="/Bootstrap_logo.png" title="bootstrap"/>
            <TecnologyCard imgSrc="/sass.png" title="sass"/>
            <TecnologyCard imgSrc="/next.jpg" title="next"/>
            <TecnologyCard imgSrc="/react-query.png" title="react query"/>
            <TecnologyCard imgSrc="/shadcnui.png" title="shadcn-ui"/>
            <TecnologyCard imgSrc="/reacthookform.png" title="react hook form"/>
            <TecnologyCard imgSrc="/zod.webp" title="zod"/>
            <TecnologyCard imgSrc="/react.png" title="react native"/>
            <TecnologyCard imgSrc="/Git.png" title="git"/>
            <TecnologyCard imgSrc="/github.png" title="github"/>
        </div>

    </section>
  )
}
