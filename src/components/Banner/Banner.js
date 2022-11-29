import * as React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import { globalStyles } from '../../constants/styles';

export default function Banner(data) {
    const banner = data.data;
    return (
        <View style={[styles.container, globalStyles.rowCenter]}>
            <View style={styles.chilContainer}>
                <Text style={[styles.title]}>{banner?.title}</Text>
                <Text style={[styles.description]}>{banner?.description}</Text>
                <Text style={[styles.instructions, globalStyles.mt4]}>{banner?.instructions}</Text>
            </View>
            <View style={[globalStyles.mt8]}>
                <Image
                    resizeMode="cover"
                    source={banner.imageUrl}
                />
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        marginHorizontal: 24,
        marginVertical: 16,
        borderWidth: 1,
        backgroundColor: "#EBFAF4",
        borderWidth: 1,
        borderColor: "#F5F5F5",
        borderRadius: 8
    },
    chilContainer: {
        flex: 1,
        padding: 24
    },
    instructions: {
        fontWeight: '600',
        fontSize: 12,
        lineHeight: 16,
        color: "#15C0B6",
    },
    description: {
        fontWeight: '500',
        fontSize: 10,
        lineHeight: 12,
        color: "#757575",
    },
    title: {
        fontWeight: '700',
        fontSize: 12,
        lineHeight: 16,
        color: '#000000',
    },
});
