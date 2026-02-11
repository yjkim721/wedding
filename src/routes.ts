import { createBrowserRouter } from "react-router";
import EnvelopeIntro from "./components/intro/EnvelopeIntro";
import PageFlipInvitation from "./components/invitation/PageFlipInvitation";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: EnvelopeIntro,
  },
  {
    path: "/invitation",
    Component: PageFlipInvitation,
  },
], {
  basename: import.meta.env.BASE_URL,
});
