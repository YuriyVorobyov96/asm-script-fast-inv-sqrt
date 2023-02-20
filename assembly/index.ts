export function fastInvSqrt(number: f32): f32 {
  const halfNumber: f32 = number * 0.5;
  const threeHalfs: f32 = 1.5;

  let i = reinterpret<u32>(number);

  i = 0x5f3759df - (i >> 1); // what the fuck? :)

  number = reinterpret<f32>(i);

  number = number * (threeHalfs - (halfNumber * number * number));

  return number;
}
