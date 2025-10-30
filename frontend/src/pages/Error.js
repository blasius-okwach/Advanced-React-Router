import { useRouteError } from "react-router-dom";
import PageContent from "../components/PageContent";

export default function ErrorPage() {
  const error = useRouteError();

  let title = "Not Found !";
  let message = "Something went wrong !";

  if (error.staus === 500) {
    message = error.data.message;
  }

  if (error.statua === 400) {
    title = "Not Found";
    message = "Could Not Find Resources or Page";
  }

  return (
    <PageContent title="An Error Occurred !">
      <p>Something went wrong !</p>
    </PageContent>
  );
}
