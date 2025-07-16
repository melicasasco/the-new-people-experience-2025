"use client";
import React from "react";
import KitsTemplate from "./components/KitsTemplate";
import kitsData from "../data/kitsData.json";
import SayHello from "./components/SayHello";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { useSectionTracking } from "@/hooks/use-section-tracking";

export default function KitsPage() {
  const router = useRouter();
  const sayHelloRef = useSectionTracking({ sectionName: "kits_say_hello" });
  const kitsRef = useSectionTracking({ sectionName: "kits_content" });

  return (
    <>
      <button
        onClick={() => router.back()}
        className="inline-flex md:text-[20px] text-[14px] items-center text-black hover:text-gray-700 transition-colors ml-4 absolute z-10 mt-6 mb-4">
        <ArrowLeft className="mr-2 h-5 w-5" />
        Volver
      </button>
      <div ref={sayHelloRef}>
        <SayHello />
      </div>
      <div ref={kitsRef} className=" mt-2 md:mt-0 mb-4">
        {kitsData.map((kit, idx) => (
          <KitsTemplate
            key={idx}
            title={kit.title}
            items={kit.items}
            reverse={idx % 2 !== 0}
            kitImage={kit.kitImage}
          />
        ))}
      </div>
    </>

  );
}
