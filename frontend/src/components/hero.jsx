import AnchorButton from "./ui/anchorButton";
import Anchor from "./ui/anchor";
import Polygon from "./ui/polygon";
import Paragraph from "./ui/paragraph";
import Header1 from "./ui/header1";

function HeroSection() {

  return (
    <div className="bg-white">
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <Polygon styleClass="rotate-[30deg] left-[calc(50%-11rem)] sm:left-[calc(50%-30rem)]"/>
        </div>
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm/6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              Announcing our next round of funding.{" "}
              <Anchor AnchorText="Read more"/>
            </div>
          </div>
          <div className="text-center">
            <Header1 headerText={"Data to enrich your online business"}/>
            <Paragraph pText={"Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat."}/>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <AnchorButton btnText = "Get Started"/>
              <Anchor AnchorText="Learn more"/>
            </div>
          </div>
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          <Polygon styleClass={"left-[calc(50%+3rem)] sm:left-[calc(50%+36rem)]"}/>
        </div>
      </div>
    </div>
  );
}
export default HeroSection