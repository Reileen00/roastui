import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";

interface ShowcaseSectionProps {
  children: any | any[];
  title: string;
  description: string | React.ReactNode;
  className?: string;
  id?: string;
}
const container=cva("flex flex-col items-center w-full max-screen-lg z-30 mt-10");
const h2Title=cva("text-5xl font-semibold -tracking-wide text-white text-center");
const sectionDescription=cva("text-sm font-normal text-gray-400 mt-4 max-w-2xl text-center");
const content=cva("flex flex-col mt-20 w-full items-center")
export function ShowcaseSection(props:ShowcaseSectionProps){
    const {children,title,description,className,id}=props;
    return(
        <div className={cn(container(),className)}>
            <h2 className={h2Title()}>{title}</h2>
            <p className={sectionDescription()}>{description}</p>
            <div className={content()}>
                {children}
            </div>
        </div>
    )
}
