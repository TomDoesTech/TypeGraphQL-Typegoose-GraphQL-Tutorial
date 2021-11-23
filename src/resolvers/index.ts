import UserResolver from "./user.resolver";
import ProductResolver from "./product.resolver";

export const resolvers = [UserResolver, ProductResolver] as const;
