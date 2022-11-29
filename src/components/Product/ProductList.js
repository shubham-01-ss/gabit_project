import * as React from 'react';
import { View, FlatList, StyleSheet, Image, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { images } from '../../constants/assets';
import { globalStyles } from '../../constants/styles';
import ProductRow from './ProductRow';
import SkinFilter from '../shared/skinFilter';

export default function ProductList() {
    const product = [
        {
            "id": 1,
            "title": "Gabit sunscreen",
            "quantity": 60,
            "quantityUnit": "ml",
            "ratings": "4.2",
            "reviews": "482",
            "price": 1000,
            "sellingPrice": 750,
            "imageUrl": images.gabitSunscreen
        },
        {
            "id": 2,
            "title": "Gabit dry skin sunscreen",
            "quantity": 60,
            "quantityUnit": "ml",
            "ratings": "4.2",
            "reviews": "482",
            "price": 1000,
            "sellingPrice": 750,
            imageUrl: images.gabitDrySkin
        },
        {
            "id": 3,
            "title": "Gabit sunscreen",
            "quantity": 60,
            "quantityUnit": "ml",
            "ratings": "4.2",
            "reviews": "482",
            "price": 1000,
            "sellingPrice": 750,
            imageUrl: images.gabitSunscreen
        },
        {
            "id": 4,
            "title": "Gabit dry skin sunscreen",
            "quantity": 60,
            "quantityUnit": "ml",
            "ratings": "4.2",
            "reviews": "482",
            "price": 1000,
            "sellingPrice": 750,
            imageUrl: images.gabitDrySkin
        },
        {
            "id": 5,
            "title": "Gabit dry skin",
            "quantity": 100,
            "quantityUnit": "ml",
            "ratings": "4.2",
            "reviews": "482",
            "price": 1000,
            "sellingPrice": 750,
            "imageUrl": images.gabitSunscreenOld
        },
        {
            "id": 6,
            "title": "Gabit sunscreen",
            "quantity": 100,
            "quantityUnit": "ml",
            "ratings": "4.2",
            "reviews": "482",
            "price": 1000,
            "sellingPrice": 750,
            "imageUrl": images.gabitSunscreen
        }
    ];

    return (
        <View>
            <View style={[styles.container, globalStyles.row]}>
                <View style={[globalStyles.row]}>
                    <Image style={[globalStyles.mr16]}
                        source={images?.back}
                    />
                    <Text style={styles.title}>All skincare products </Text>
                    <Text style={[globalStyles.ml4, styles.count]}>({product?.length})</Text>
                </View>
                <View style={[globalStyles.rowCenter]}>
                    <Image style={[globalStyles.mr16]}
                        source={images?.search}
                    />
                    <Image style={[globalStyles.mr16]}
                        source={images?.heartStrong}
                    />
                    <Image
                        source={images?.bag}
                    />
                </View>
            </View>
            <View style={[globalStyles.bgWhite, globalStyles.padH24]}>
                <SkinFilter></SkinFilter>
            </View>
            <LinearGradient colors={['#EEF0F4', '#F7F9FB']}>
                <View style={globalStyles.flex1}>
                    <FlatList
                        data={product}
                        keyExtractor={(item) => (item?.id)}
                        renderItem={({ item }) => (
                            <ProductRow product={item} />
                        )}
                    />
                </View>
            </LinearGradient>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 16,
        borderWidth: 1,
        borderBottomColor: "rgba(0, 0, 0, 0.03)",
        justifyContent: "space-between",
        backgroundColor: "#FFFFFF"
    },
    count: {
        fontWeight: '600',
        fontSize: 18,
        lineHeight: 20,
        color: '#15C0B6',
    },
    title: {
        fontWeight: '700',
        fontSize: 20,
        lineHeight: 24,
        color: '#000000',
    },
    viewUnderSearch: {
        flexDirection: 'row',
        marginHorizontal: 10,
        justifyContent: 'space-between',
    },
    dropdownContainer: {
        backgroundColor: "#FFFFFF",
        justifyContent: 'space-between',
    },
    dropdown: {
        borderRadius: 32,
        borderWidth: 2,
        borderStyle: 'solid',
        borderColor: '#F5F5F5',
        paddingHorizontal: 12,
        paddingVertical: 8,
    },
    dropdownType: {
        fontWeight: '600',
        fontSize: 12,
        lineHeight: 16,
        color: "#212121"
    },
});
