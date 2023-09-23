import { Reveal } from "@/components/Reveal";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Faqs = () => {
  return (
    <div
      id="faqs"
      className="px-4 lg:px-10 py-4 lg:py-20 pt-8 w-full relative border-b border-b-white border-opacity-20"
    >
      <div className=" 2xl:max-w-[1280px] w-full mx-auto justify-center items-center flex flex-col lg:flex-row lg:px-10  lg:gap-16  text-center lg:text-left">
        <div className="flex-1 p-4">
          <div className="pb-4">
            <Reveal width="100%">
              <div className="w-full">
                <h2 className="font-title font-semibold text-2xl lg:text-4xl">
                  Frequently Asked
                </h2>

                <h2 className="font-title font-semibold text-2xl lg:text-4xl text-[#D434FE]">
                  Questions
                </h2>
              </div>
            </Reveal>
          </div>
          <Reveal width="100%">
            <p className="text-xs leading-6 pb-8">
              We got answers to the questions that you might want to ask about
              getlinked Hackathon 1.0
            </p>
          </Reveal>

          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>
                Can I work on a project I started before the hackathon?
              </AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>
                What happens if I need help during the hackathon?
              </AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>{" "}
            <AccordionItem value="item-3">
              <AccordionTrigger>
                What happens if I don&#39;t have an idea for a project?
              </AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>{" "}
            <AccordionItem value="item-4">
              <AccordionTrigger>
                Can I join a team or do I have to come with one?
              </AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>{" "}
            <AccordionItem value="item-5">
              <AccordionTrigger>
                What happens after the hackathon ends
              </AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6">
              <AccordionTrigger>
                Can I work on a project I started before the hackathon?
              </AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        <div className="lg:w-[50%] w-full lg:h-[500px] h-[300px]  relative">
          <Image src="/faq.svg" alt="GetLinked Logo" fill objectFit="contain" />
        </div>
      </div>
    </div>
  );
};

export default Faqs;
