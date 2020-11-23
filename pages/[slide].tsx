import { useRouter } from "next/router";
import Deduping from "../slides/Deduping";
import DependentQueries from "../slides/DependentQueries";
import { DynamicKeys } from "../slides/DynamicKeys";
import Intro from "../slides/Intro";
import { Introducing } from "../slides/Introducing";
import InvalidateQueries from "../slides/InvalidateQueries";
import LiveCoding from "../slides/LiveCoding";
import { ManyComponents } from "../slides/ManyComponents";
import MultipleUseEffect from "../slides/MultipleUseEffect";
import OnClick from "../slides/OnClick";
import Pure from "../slides/Pure";
// import { Shop } from "../slides/Shop";
import { StupidSolution } from "../slides/StupidSolution";
import UseEffect from "../slides/UseEffect";
import UseEffectWithStates from "../slides/UseEffectWithStates";
import UseQuery from "../slides/UseQuery";
import UseQuerySearch from "../slides/UseQuerySearch";

const slides = [
  Intro,
  OnClick,
  UseEffect,
  UseEffectWithStates,
  MultipleUseEffect,
  StupidSolution,
  Introducing,
  UseQuery,
  // Pure,
  Deduping,
  DynamicKeys,
  DependentQueries,
  UseQuerySearch,
  InvalidateQueries,
  LiveCoding,
  // ManyComponents,
  // Shop,
];

function Slide() {
  const router = useRouter();

  const slide = router.query.slide;

  if (!slide) {
    return null;
  }

  // @ts-ignore
  const SlideComponent = slides[parseInt(slide, 10)];

  if (!SlideComponent) {
    return null;
  }

  return <SlideComponent />;
}

export default Slide;
