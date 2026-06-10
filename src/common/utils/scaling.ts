import { Dimensions } from "react-native";
import { isNative } from "./platform";

// iPhone 11 Pro size
const guidelineWidth = 375;
const guidelineHeight = 812;

const { width, height } = Dimensions.get("screen");
const [shortDimension, longDimension] =
  width < height ? [width, height] : [height, width];

const scale = (size: number) => (shortDimension / guidelineWidth) * size;
const verticalScale = (size: number) =>
  (longDimension / guidelineHeight) * size;
const moderateScale = (size: number, factor = 0.5) =>
  size + (scale(size) - size) * factor;
const moderateVerticalScale = (size: number, factor = 0.5) =>
  size + (verticalScale(size) - size) * factor;

const withNativeScale =
  <F extends (size: number, ...args: any[]) => number>(scaleFn: F) =>
  (...args: Parameters<F>) => {
    const [size, ...rest] = args;
    return isNative ? scaleFn(size, ...rest) : size;
  };

export const s = withNativeScale(scale);
export const vs = withNativeScale(verticalScale);
export const ms = withNativeScale(moderateScale);
export const mvs = withNativeScale(moderateVerticalScale);
