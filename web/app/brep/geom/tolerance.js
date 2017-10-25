import {areEqual, areVectorsEqual, areVectorsEqual3} from "../../math/math";

export const TOLERANCE = 1e-5;
export const TOLERANCE_SQ = TOLERANCE * TOLERANCE;

export const EPSILON = 1e-12;
export const EPSILON_SQ = EPSILON * EPSILON;


//tolerance used for parametric domain which is between 0..1
export const TOLERANCE_01 = TOLERANCE * 1e-2;
export const TOLERANCE_01_SQ = TOLERANCE * TOLERANCE;

export function eqTol(a, b) {
  return areEqual(a, b, TOLERANCE);
}

export function eqEps(a, b) {
  return areEqual(a, b, EPSILON);
}

export function veq(a, b) {
  return areVectorsEqual(a, b, TOLERANCE_SQ);
}

export function veq3(a, b) {
  return areVectorsEqual3(a, b, TOLERANCE_SQ);
}


export function ueq(a, b) {
  return areEqual(a, b, TOLERANCE_01);
}
