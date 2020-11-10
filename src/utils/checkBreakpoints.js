// validates Col breakpoint inputs and returns sanitized values
export function checkBreakpoints(breakpoint, input) {

  // input can accept int, str, or { str/int, str/int } (obj with either strings or ints)
  let col = 12;
  let offset = 0;
  let order;

  // if input is not a str or int, check if it's an object
  let keys = Object.keys(input);
  // if (keys.length) {
  //   // okay, you're an obj. but you should only have two key/value pairs (span, offset)
  //   if (keys.length > 3) {
  //     throw new Error(`Invalid object for Col span and offset (${breakpoint}).`);
  //   }

  //   if (keys.includes) throw
  //   let { span, offset } = {checkBreakpoints(breakpoint, input.span)}
  // }

  // if input is str or int, check it's in the correct range and return int

}

export function sanitizeValue(breakpoint, val) {
  // if input is str or int, check it's in the correct range and return int
  if (typeof input === "number" || typeof input === "string" ) {
    let val = parseInt(input);
    if (!val < 1 || !val > 12) {
      throw new Error(`Col value (${breakpoint}, ${val}) must be between 1 and 12.`);
    }
    return val;
  }
  throw new Error(`Invalid input on Col (${breakpoint}, ${val}).`);
}