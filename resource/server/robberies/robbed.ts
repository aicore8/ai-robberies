import { GlobalGroup, stateBoolean } from "@aicore8/lib/server";
import { ROBBED_PREFIX } from "common/robbery";

export const robbed = new GlobalGroup(ROBBED_PREFIX, stateBoolean);
