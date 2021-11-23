import { AuthChecker } from "type-graphql";
import Context from "../types/context";

const authChecker: AuthChecker<Context> = ({ context }) => {
  return !!context.user;
};

export default authChecker;
