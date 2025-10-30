import { useLoaderData } from "react-router-dom";
import EventsList from "../components/EventsList";

function EventsPage() {
  const events = useLoaderData();

  // if (data.isError) {
  //   return <p>{data.message}</p>;
  // }
  return (
    <>
      <EventsList events={events} />
    </>
  );
}

export default EventsPage;

export async function loader() {
  const response = await fetch("http://localhost:8080/events);

  if (!response.ok) {
    // return { isError: true, message: "Could Not Fetch Events." };
    throw new Response(JSON.stringify({message : "Could Not Fetch Events"}) , {status : 500})
  } else {
    const resData = await response.json();
    return resData.events;
  }
}
