require("dotenv").config();
import { __prod__ } from "./constants";
import { Post } from "./entities/Post";
import { MikroORM } from "@mikro-orm/core";
import path from "path";

export default {
  migrations: {
    path: path.join(__dirname, "./migrations"),
    pattern: /^[\w-]+\d+\.[tj]s$/,
  },
  entities: [Post],
  dbName: "reddit",
  user: process.env.USER,
  password: process.env.PASSWORD,
  type: "postgresql",
  debug: !__prod__,
} as Parameters<typeof MikroORM.init>[0];
