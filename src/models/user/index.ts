import { createStore } from "effector";
import { generateUserData } from "./generateUserData";

export const $user = createStore(
  generateUserData()
);