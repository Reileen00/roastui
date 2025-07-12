import { ShowcaseSection } from "../showcaseSection";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";
import app from "@/config/app";
import { cva } from "class-variance-authority";
const innerContainer=cva("w-full max-w-lg  px-10 py-8 bg-[#0e0e0e] rounded-lg")
const answerContainer=cva("text-gray-400 font-normal text-base")
export function Faq(){
    return(
        <ShowcaseSection
            title="Frequently Asked Questions"
            description={
            <>Have another question? Contact me on {' '}
                <a
                    href="https://www.x.com/_in_stealth"
                    target="_blank"
                    className="underline"
                >
                    Twitter
                </a>{' '}
                or by {' '}
                <a
                    href="emailto:baisnabirout001@gmail.com"
                    target="_blank"
                    className="underline"
                >
                    email
                </a>
                
            </>
            }
        >
            <div className={innerContainer()}>
            <Accordion
      type="single"
      collapsible
      defaultValue="item-1"
    >
        {app.faq.map((question,idx)=>(
      <AccordionItem value={idx+1} key={idx} className="w-full border-b-0">
        <AccordionTrigger>{question.question}</AccordionTrigger>
        <AccordionContent className={answerContainer()}>
        {question.answer}
        </AccordionContent>
      </AccordionItem>
     ))}
    </Accordion>
    </div>
        </ShowcaseSection>
    )
}