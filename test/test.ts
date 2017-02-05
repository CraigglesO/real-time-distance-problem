import * as test from "blue-tape";
import { ready } from "../real-time-distance-problem";

test('Test Typescript-Ready', (t) => {
  t.plan(1);

  t.true( ready() );

  t.end();
});
  