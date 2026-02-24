import { HeroLegs, HeroArm, Button } from "@/app/shared/ui";

export const HeroSection = () => {
  return (
    <section className="flex bg-background pb-10 rounded-b-full shadow-md flex-col relative w-full min-h-72 justify-center items-center">
      <h1 className="font-unique font-black text-[300px] text-primary">
        Spytay
      </h1>

      <Button className="p-10 text-3xl border-3">Register now</Button>
      <span className="absolute -top-5 right-10">
        <HeroLegs />
      </span>
      <span className="mt-5 text-center max-w-64">
        Get questions. Give honest answers. Completely anonymous.
      </span>
      <span className="absolute bottom-21 -left-1">
        <HeroArm />
      </span>
    </section>
  );
};
