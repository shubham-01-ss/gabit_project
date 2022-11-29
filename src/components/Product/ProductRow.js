import * as React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { images } from '../../constants/assets';
import { globalStyles } from '../../constants/styles';
import CartButton from '../shared/CartButton';
import { styles } from './ProductStyle';

export default function ProductRow(data) {
    const product = data.product;
    return (
        <LinearGradient
            colors={['rgba(255, 255, 255, 0.27)', 'rgba(255, 255, 255, 0.58)']}
            angle={153.99}>
            <View style={[globalStyles.container, styles.main]}>
                <View>
                    <Image source={product?.imageUrl} />
                </View>
                <View style={globalStyles.paddingLeft20}>
                    <View style={[globalStyles.mt8]}>
                        <Text style={[styles.title]}>{product?.title}</Text>
                    </View>
                    <View style={[globalStyles.row, globalStyles.mt8]}>
                        <Text Text style={[styles.quantity]}>{product?.quantity} {product?.quantityUnit}
                        </Text>
                        <Image style={[globalStyles.ml6]}
                            source={images.dropdown}
                        />
                    </View>
                    <View style={[globalStyles.row, globalStyles.mt8]}>
                        <Image source={images?.star} style={globalStyles.mr4} />
                        <Text style={globalStyles.ratingsReviews}>{product?.ratings} stars</Text>
                        <Text></Text>
                        <Text style={[globalStyles.ratingsReviews, globalStyles.ml8]}>{product?.reviews} reviews</Text>
                    </View>
                    <View style={[globalStyles.row, globalStyles.mt8]}>
                        <Text style={globalStyles.price}>{'\u20B9'}{product?.price}</Text>
                        <Text style={[globalStyles.ratingsReviews, globalStyles.strike, globalStyles.ml8]}>{'\u20B9'}{product?.sellingPrice}</Text>
                    </View>
                    <View style={[globalStyles.mt12, globalStyles.row]}>
                        <CartButton data={{ title: "Add to cart", width: 120 }} />
                        <Image style={[globalStyles.ml12]}
                            source={images.heart}
                        />
                    </View>
                </View>
            </View>
        </LinearGradient>
    );
}

const innertStyles = StyleSheet.create({
    btnProp: {
        width: 115,
        marginRight: 12,
    },
    main: {
        borderRadius: 16,
        backgroundColor: "white"
    }
});