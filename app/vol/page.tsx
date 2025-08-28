// app/vol/page.tsx
import type { Metadata } from "next";
import { volData } from "@/data/vol";
import { VolItem } from "./link";

export const metadata: Metadata = {
  title: "Volunteering",
  description: "Some of my volunteering experiences",
};

const Vol = () => {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">
        I'v been part of 
      </h1>
      <div className="my-8 flex flex-col space-y-4 w-full">
        <ul>
          {volData.map((vol, i) => (
            <VolItem key={i} name={vol.name} description={vol.description} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Vol;