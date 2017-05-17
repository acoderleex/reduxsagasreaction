'use strict';
import {StyleSheet} from 'react-native';
import Dimensions from 'Dimensions';
import colors from './color';
const window = Dimensions.get('window');

export default StyleSheet.create({
    container: {
        width: window.width,
        height: window.height,
        backgroundColor: colors.white
    }
});
