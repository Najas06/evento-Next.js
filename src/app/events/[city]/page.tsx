import EventsList from "@/components/events-list";
import H1 from "@/components/h1";
import { Suspense } from "react";
import Loading from "./loading";
import { Metadata } from "next";
import { capatilize } from "@/lib/utils";
import { z } from "zod";

type Props = {
  params: {
    city: string;
  };
};

type EventsPageProps = Props & {
  searchParams : {[key : string] : string | string[] | undefined}
}

//Bitegrad function is not working
// export async function generateMetaData({ params }: Props) {
//   const city = (await params).city;
//   return {
//     title: city === "all" ? "All Events" : `Events in ${capatilize(city)}`,
//   };
// }

//my own function in documentation 
export async function generateMetadata(
  { params }: Props,
  ): Promise<Metadata> {
  const city = params.city;
  return {
    title: city === "all" ? "All Events" : `Events in ${capatilize(city)}`,
  }
}

const pageNumberSchema = z.coerce.number().int().positive().optional()

const EventsPage = async ({ params, searchParams }: EventsPageProps) => {
  const city = params.city;
  // const page = searchParams.page || 1;
  const parsePage = pageNumberSchema.safeParse(searchParams.page)

  if(!parsePage.success){
    throw new Error("Invalid page number")
  }

  return (
    <main className="flex flex-col items-center py-24 px-[20px] min-h-[110vh]">
      <H1 className="mb-28">
        {city === "all" && "All Events"}
        {city !== "all" && `Events in ${capatilize(city)}`}
      </H1>
      <Suspense key={city + parsePage.data} fallback={<Loading />}>
        <EventsList city={city} page={parsePage.data} />
      </Suspense>
    </main>
  );
};

export default EventsPage;
