import fastifyCookie from "@fastify/cookie";
import fastify from "fastify";
import { createPoll } from "./routes/create-polls";
import { getPoll } from "./routes/get-polls";
import { voteOnPoll } from "./routes/vote-on-poll";

const app = fastify();

app.register(fastifyCookie, {
  secret: "polls",
  hook: "onRequest",
  parseOptions: {},
});

app.register(createPoll);
app.register(getPoll);
app.register(voteOnPoll);

app.listen({ port: 3333 }).then(() => {
  console.log("HTTP server running");
});
