import * as React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import { globalStyles } from '../../constants/styles';

export default function BannerBottom(data) {
    const banner = data.data;
    return (
        <View style={[styles.container, globalStyles.rowCenter]}>
            <View style={globalStyles.pad10}>
                <Image
                    resizeMode="cover"
                    source={banner.imageUrl}
                />
            </View>
            <View style={globalStyles.flex1}>
                <Text style={[styles.title]}>{banner?.title}</Text>
                <Text style={[styles.instructions, globalStyles.mt4]}>{banner?.instructions}</Text>
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
        borderWidth: 0.7,
        borderColor: "#EBFAF4",
        borderRadius: 8
    },
    instructions: {
        fontWeight: '600',
        fontSize: 12,
        lineHeight: 16,
        color: "#15C0B6",
    },
    title: {
        fontWeight: '600',
        fontSize: 14,
        lineHeight: 16,
        color: '#000000',
    },
});
