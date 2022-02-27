import * as React from "https://esm.sh/react?pin=v59";
import * as ReactDOM from "https://esm.sh/react-dom/server?pin=v59";
import { RemixServer } from "https://esm.sh/@remix-run/react?pin=v59";

export default function handleRequest(
  request,
  responseStatusCode,
  responseHeaders,
  remixContext
) {
  const markup = ReactDOM.renderToString(
    <RemixServer context={remixContext} url={request.url} />
  );

  responseHeaders.set("Content-Type", "text/html");

  return new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders,
  });
}
