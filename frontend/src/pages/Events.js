import { Link } from "react-router-dom";

const DUMMY_EVENTS = [
  { id: "e1", title: "Mashujaa Day" },
  { id: "e2", title: "Jamhuri Day" },
];

export default function EventsPage() {
  return (
    <>
      <h1>EventsPage</h1>
      <ul>
        {DUMMY_EVENTS.map((event) => <li key={event.id}>
          <Link to={event.id}>{event.title}</Link>
        </li>)}
      </ul>
    </>
  );
}
