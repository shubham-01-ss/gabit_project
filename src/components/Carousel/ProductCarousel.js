import * as React from 'react';
import { Text, View, Image, StyleSheet, FlatList, Dimensions } from 'react-native';
import { images } from '../../constants/assets';
import { globalStyles } from '../../constants/styles';
import SkinFilter from '../shared/skinFilter';

const width = Dimensions.get('window').width;
export default function ProductCarousel() {
    const product = [
        {
            "id": 1,
            "title": "How to find your skin type?",
            "description": "Figuring out your type could be tricky and at times, confusing. Even after people figure out the type they have...",
            "offPercentage": 25,
            "price": 3450,
            "sellingPrice": 4500,
            "imageUrl": images.knowMore
        },
        {
            "id": 2,
            "title": "How to find your skin type?",
            "description": "Figuring out your type could be tricky and at times, confusing. Even after people figure out the type they have...",
            "offPercentage": 35,
            "price": 2350,
            "sellingPrice": 3000,
            imageUrl: images.knowMore
        },
        {
            "id": 3,
            "title": "How to find your skin type?",
            "description": "Figuring out your type could be tricky and at times, confusing. Even after people figure out the type they have...",
            "offPercentage": 18,
            "price": 1700,
            "sellingPrice": 2500,
            imageUrl: images.knowMore
        },
    ];

    return (
        <View style={[globalStyles.padH24, globalStyles.padV24]}>
            <View style={[globalStyles.rowBetween, globalStyles.mb16]}>
                <View>
                    <Text style={globalStyles.title}>Know more</Text>

                    <Text style={[styles.description, globalStyles.mt4]}>Learn more about products on this page</Text>
                </View>
                <View style={globalStyles.row}>
                    <Text style={styles.seeAll}>See all</Text>
                    <Image style={globalStyles.ml6}
                        source={images.orangeArrow}
                    />
                </View>
            </View>
            <SkinFilter></SkinFilter>
            <FlatList
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                data={product}
                keyExtractor={(item) => (item?.id)}
                renderItem={({ item }) => (
                    <View style={[styles.cardView]}>
                        <View style={[globalStyles.row]}>
                            <Image
                                style={globalStyles.cardImg}
                                resizeMode="cover"
                                source={item.imageUrl}
                            />
                        </View>
                        <View style={[globalStyles.padV24, globalStyles.padH16, globalStyles.flex1]}>
                            <Text style={[styles.title, globalStyles.mt8]}>{item.title}</Text>
                            <Text style={[styles.description, globalStyles.mt8]}>{item.description}</Text>
                        </View>
                    </View>
                )} />
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
    title: {
        fontWeight: '600',
        fontSize: 14,
        lineHeight: 16,
        color: '#000000',
    },
    description: {
        fontWeight: '500',
        fontSize: 12,
        lineHeight: 16,
        color: '#757575',
    },
    seeAll: {
        fontWeight: '560',
        fontSize: 14,
        lineHeight: 16,
        color: "#FF7F42",
    }
});
