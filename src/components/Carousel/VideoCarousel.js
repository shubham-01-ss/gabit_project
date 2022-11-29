import * as React from 'react';
import { Text, View, Image, StyleSheet, FlatList, Dimensions } from 'react-native';
import { images } from '../../constants/assets';
import { globalStyles } from '../../constants/styles';

const width = Dimensions.get('window').width;
export default function VideoCarousel() {
    const product = [
        {
            "id": 1,
            "title": "Must know these things before use",
            "imageUrl": images.video,
            "userName": "Lucia D.",
            "level": 1,
        },
        {
            "id": 2,
            "title": "Must know these things before use",
            "imageUrl": images.women,
            "userName": "Julie M.",
            "level": 3,
        },
        {
            "id": 3,
            "title": "Must know these things before use",
            "imageUrl": images.video,
            "userName": "Sam S.",
            "level": 5,
        },
        {
            "id": 4,
            "title": "Must know these things before use",
            "imageUrl": images.women,
            "userName": "Marrie M.",
            "level": 8,
        },
    ];

    return (
        <View style={[globalStyles.padH24, globalStyles.padV16, styles.bg]}>
            <Text style={[globalStyles.title, globalStyles.mb4]}>Explore and buy</Text>
            <FlatList
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                data={product}
                keyExtractor={(item) => (item?.id)}
                renderItem={({ item }) => (
                    <View style={styles.cardView}>
                        <Image
                            style={styles.cardImg}
                            resizeMode="cover"
                            source={item.imageUrl}
                        />
                        <View style={[styles.vTitletPos, globalStyles.col]}>
                            <Text style={styles.vTitle}>{item.title}</Text>
                            <Text style={styles.nextDash}></Text>
                        </View>
                        <View style={styles.pausePos}>
                            <Image source={images.pauseWhiteIcon} />
                        </View>
                        <View style={[styles.userPos]}>
                            <View style={[styles.userContainer, globalStyles.row]}>
                                <View style={[globalStyles.rowStart]}>
                                    <Image source={images.avatar} style={styles.userImg} />
                                    <View>
                                        <Text style={styles.userName}>{item?.userName}</Text>
                                        <View style={[styles.follow, globalStyles.mt4]}>
                                            <Text style={[styles.insideTxt]}>Follow</Text>
                                        </View>
                                    </View>
                                    <View style={[globalStyles.ml8, styles.level]}>
                                        <Text style={[styles.insideTxt]}>Level {item?.level}</Text>
                                    </View>
                                </View>
                                <View style={[globalStyles.row]}>
                                    <Image source={images.heartWhite} style={globalStyles.mr16} />
                                    <Image source={images.upload} style={globalStyles.mr16} />
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
        marginTop: 10,
        borderRadius: 16,
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: "#F5F5F5",
        width: width - 100,
        position: "relative",
    },
    bgGrey: {
        width: width,
    },
    bg: {
        backgroundColor: "#EBFAF4"
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
    },
    vTitletPos: {
        position: "absolute",
        top: 0,
        left: 0,
        flexDirection: 'row'
    },
    vTitle: {
        fontWeight: '700',
        fontSize: 18,
        lineHeight: 20,
        color: "#FFFFFF",
        padding: 20,
        maxWidth: width - 150,
        flexWrap: 'wrap'
    },
    nextDash: {
        backgroundColor: "#FFFFFF",
        borderColor: "#FFFFFF",
        width: 20,
        height: 2,
        marginLeft: 20,
    },
    userPos: {
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
    },
    userContainer: {
        padding: 18,
        justifyContent: "space-between",
    },
    userImg: {
        marginRight: 8,
        borderRadius: 50,
        height: 48,
        width: 48,
    },
    userName: {
        fontWeight: '600',
        fontSize: 14,
        lineHeight: 16,
        color: "#FFFFFF",
    },
    level: {
        backgroundColor: "rgba(255, 255, 255, 0.2)",
        borderRadius: 30,
        paddingHorizontal: 8,
        paddingVertical: 2
    },
    follow: {
        borderColor: "#FFFFFF",
        borderWidth: 1,
        borderRadius: 6,
        paddingHorizontal: 8,
        paddingVertical: 2
    },
    insideTxt: {
        fontWeight: '600',
        fontSize: 10,
        lineHeight: 12,
        color: "#FFFFFF",
    },
    pausePos: {
        position: "absolute",
        top: "45%",
        right: "45%",
    },
    cardImg: {
        overflow: "hidden",
        borderRadius: 12,
    }
});
