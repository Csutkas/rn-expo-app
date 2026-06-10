module.exports = {
  NativeModulesProxy: {},
  EventEmitter: class {},
  Platform: { OS: "ios" },
  requireNativeModule: () => ({}),
  requireOptionalNativeModule: () => null,
};
