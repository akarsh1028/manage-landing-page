import FirstView from "./components/sections/FirstView";
import SecondView from "./components/sections/SecondView";
import Simplify from "./components/sections/Simplify";
import Testimonial from "./components/sections/Testimonial";

export default function Home() {
  return (
    <>
      <FirstView />
      <SecondView/>
      <Testimonial />
      <Simplify />
    </>
  )
}
