import { useLoaderData, useParams } from "react-router-dom";

import  EventItem  from "../components/EventItem.js";

export default function EventDetailPage() {
  
  const data = useLoaderData()

  return (
    <>
      <EventItem event={data.event} />
    </>
  );
}

export async function loader({ request, params }) {
  const id = params.eventId;
  const response = await fetch("http://localhost:8080/events/" + id);
  if (!response.ok) {
    throw new Response(
      JSON.stringify({
        message: "Could Not Fetch Events Details For Selected Event",
      }),
      {
        status: 500,
      }
    );
  }else {
    return response
  }
}
