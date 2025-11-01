const React = require("react");
const View = (props) => React.createElement("View", props, props.children);

module.exports = {
  install: jest.fn(),
  PanGestureHandler: View,
  GestureHandlerRootView: View,
  State: {},
  Directions: {},
  Swipeable: View,
  DrawerLayout: View,
  TouchableHighlight: View,
  TouchableNativeFeedback: View,
  TouchableOpacity: View,
  TouchableWithoutFeedback: View,
};
