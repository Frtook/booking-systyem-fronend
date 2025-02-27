import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
const Slider = () => {
  return (
    <Carousel className="w-[80%] h-[200px]  mx-auto ">
      <CarouselContent className="h-full w-full">
        <CarouselItem className="w-full h-full">
          <div
            className={`p-4 relative rounded-xl bg-red-300 block w-full h-full`}
          >
            <div className="absolute bottom-10 left-[50%] translate-x-[-50%] flex gap-5">
              <span className="size-4 bg-white rounded-full block"></span>
              <span className="size-4 bg-white rounded-full block"> </span>
              <span className="size-4 bg-white rounded-full block"></span>
            </div>
          </div>
        </CarouselItem>
        <CarouselItem>
          <div
            className={`p-4 relative rounded-xl bg-green-300 block w-full h-full`}
          >
            <div className="absolute bottom-10 left-[50%] translate-x-[-50%]  flex gap-5">
              <span className="size-4 bg-white rounded-full block"></span>
              <span className="size-4 bg-white rounded-full block"> </span>
              <span className="size-4 bg-white rounded-full block"></span>
            </div>
          </div>
        </CarouselItem>
        <CarouselItem>
          <div
            className={`p-4 relative rounded-xl bg-blue-300 block w-full h-full`}
          >
            <div className="absolute bottom-10 left-[50%] translate-x-[-50%]  flex gap-5">
              <span className="size-4 bg-white rounded-full block"></span>
              <span className="size-4 bg-white rounded-full block"> </span>
              <span className="size-4 bg-white rounded-full block"></span>
            </div>
          </div>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default Slider;
