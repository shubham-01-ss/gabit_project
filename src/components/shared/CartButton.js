import * as React from 'react';
import { Text, Image, Dimensions } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { images } from '../../constants/assets';
import { globalStyles } from '../../constants/styles';
const width = Dimensions.get('window').width;

export default function CartButton(data) {
    const btnTitle = data.data.title;
    const btnWidth = data.data.width
    return (
        <LinearGradient
            colors={['#59DF74', '#15C0B6']} style={[globalStyles.buttonText, globalStyles.rowCenter, { width: btnWidth }]}>
            <Image style={globalStyles.mr8}
                source={images.shoppingCart}
            />
            <Text style={globalStyles.colorWhite}>
                {btnTitle}
            </Text>
        </LinearGradient>
    );
}
