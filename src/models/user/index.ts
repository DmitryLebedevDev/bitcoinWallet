import { createStore } from "effector";
import { generateUserData } from "./generateUserData";
import { initUser } from "./initUser";

export const $user = createStore(
  initUser()
);