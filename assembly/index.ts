export function fastInvSqrt(number: f32): f32 {
  const halfNumber: f32 = number * 0.5;
  const threeHalfs: f32 = 1.5;

  let i = Int32Array.wrap(new Float32Array(1).fill(number).buffer)[0];

  i = 0x5f3759df - (i >> 1); // what the fuck? :)

  number = Float32Array.wrap(new Int32Array(1).fill(i).buffer)[0];

  number = number * (threeHalfs - (halfNumber * number * number));

  return number;
}
