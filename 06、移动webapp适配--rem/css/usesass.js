import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "box": {
        "backgroundColor": "red",
        "width": 2.4154589372,
        "height": 2.4154589372,
        "display": "flex",
        "justifyContent": "center",
        "alignItems": "center"
    },
    "item": {
        "backgroundColor": "yellow",
        "width": 1.2077294686,
        "height": 1.2077294686
    }
});