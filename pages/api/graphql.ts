import { ApolloServer } from "apollo-server-micro";
import { typeDefs } from "./schema/index";
import { resolvers } from "./resolvers/resolver";
import Cors from "micro-cors";

const cors = Cors();
const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  csrfPrevention: true,
  cache: "bounded",
  introspection: process.env.NODE_ENV !== "production",
});

const startServer = apolloServer.start();

export default cors(async (req, res) => {
  if (req.method === "OPTIONS") {
    res.end();
    return false;
  }
  await startServer;

  return apolloServer.createHandler({
    path: "/api/graphql",
  })(req, res);
});

export const config = {
  api: {
    bodyParser: false,
  },
};
