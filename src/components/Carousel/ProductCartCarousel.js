import * as React from 'react';
import { Text, View, Image, StyleSheet, FlatList, Dimensions } from 'react-native';
import { images } from '../../constants/assets';
import { globalStyles } from '../../constants/styles';
const width = Dimensions.get('window').width;
import CartButton from '../shared/CartButton';

export default function ProductCartCarousel() {
    const product = [
        {
            "id": 1,
            "title": "Flawless skin pack",
            "description": "Carefully curated to get you that flawless skin",
            "offPercentage": 25,
            "price": 3450,
            "sellingPrice": 4500,
            "imageUrl": images.skinPack
        },
        {
            "id": 2,
            "title": "Flawless face pack",
            "description": "Carefully curated to get you that flawless skin",
            "offPercentage": 35,
            "price": 2350,
            "sellingPrice": 3000,
            imageUrl: images.skinPack
        },
        {
            "id": 3,
            "title": "Flawless skin pack",
            "description": "Carefully curated to get you that flawless skin",
            "offPercentage": 18,
            "price": 1700,
            "sellingPrice": 2500,
            imageUrl: images.skinPack
        },
    ];

    return (
        <View style={[globalStyles.padH24, globalStyles.padV16]}>
            <Text style={globalStyles.title}>Buy bundles for complete regime</Text>
            <Text style={[styles.description, globalStyles.mt4]}>Buy bundle to complete your skincare regime</Text>
            <FlatList
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                data={product}
                keyExtractor={(item) => (item?.id)}
                renderItem={({ item }) => (
                    <View style={styles.cardView}>
                        <View style={[globalStyles.rowCenter]}>
                            <Image
                                style={globalStyles.cardImg}
                                resizeMode="cover"
                                source={item.imageUrl}
                            />
                        </View>
                        <View style={[globalStyles.colCenter, globalStyles.padV24, globalStyles.flex1]}>
                            <Text style={[globalStyles.title, globalStyles.mt8]}>{item.title}</Text>
                            <Text style={[styles.description, globalStyles.mt8]}>{item.description}</Text>
                            <View style={[globalStyles.row, globalStyles.mt8]}>
                                <Text style={globalStyles.price}>{images.rupeeSymbol}{item?.price}</Text>
                                <Text style={[globalStyles.ratingsReviews, globalStyles.strike, globalStyles.ml8]}>{images.rupeeSymbol}{item?.sellingPrice}
                                </Text>
                                <View style={[globalStyles.row]}>
                                    <View style={globalStyles.ml8}>
                                        <Image
                                            resizeMode="cover"
                                            source={images.offPercentage}
                                            style={[styles.image]}
                                        />
                                    </View>
                                    <Text style={[globalStyles.ratingsReviews, globalStyles.ml3]}>{item?.offPercentage}% off
                                    </Text>
                                </View>
                            </View>
                            <View style={[globalStyles.mt12, globalStyles.row]}>
                                <Image style={[globalStyles.mr12]}
                                    source={images.heart}
                                />
                                <CartButton data={{ title: "Add to all cart", width: 200 }} />
                                <View>
                                </View>
                            </View>
                        </View>
                    </View>
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    cardView: {
        backgroundColor: "#F5F5F5",
        marginTop: 10,
        borderColor: "#F5F5F5",
        borderWidth: 1,
        borderRadius: 16,
        width: width - 100
    },
    description: {
        fontWeight: '500',
        fontSize: 12,
        lineHeight: 16,
        color: '#757575',
    },
    btnProp: {
        width: 200,
        marginLeft: 12,
    },
    image: {
        resizeMode: 'contain',
        flex: 1,
        aspectRatio: 1,
        width: 20,
        height: 20,
    }
});
