import * as React from 'react';
import { Text, View, StyleSheet, FlatList, Dimensions } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { globalStyles } from '../../constants/styles';
const width = Dimensions.get('window').width;

export default function BannerComplete(data) {
    const circles = data.data;
    return (
        <View style={styles.container}>
            <LinearGradient colors={['#EEF0F4', '#F7F9FB']} angle={341.66} >
                <LinearGradient colors={['rgba(255, 197, 197, 0.15)', 'rgba(255, 197, 197, 0)']} angle={180}
                    style={[globalStyles.padH24, globalStyles.padV16]} >
                    <View style={[globalStyles.row]}>
                        <Text style={globalStyles.title}>Complete your skincare regime</Text>
                    </View>
                </LinearGradient>
                <View style={styles.bRBottom}>
                    <View style={[globalStyles.padH24, globalStyles.padB24]}>
                        <FlatList
                            horizontal={true}
                            data={circles}
                            keyExtractor={(item) => (item?.id)}
                            renderItem={({ item, index }) => (
                                <View style={[globalStyles.mt12]}>
                                    <View style={[styles.rowCenter]}>
                                        <View>
                                            <View style={[styles.parentCircle, styles.rowCenter]}>
                                                <View style={styles.indexPos}>
                                                    <Text style={styles.indexNo}>{index + 1}</Text>
                                                </View>
                                                <View style={styles.circle}>
                                                    <Text style={styles.centerText}>{item.centerText}</Text>
                                                </View>
                                            </View>
                                            <Text style={[styles.title, globalStyles.mt4]}>{item.title}</Text>
                                        </View>
                                        <View style={[styles.dotWhiteLine, { marginTop: width / 14 }]}>
                                            <View style={styles.dotLine} />
                                        </View>
                                    </View>
                                </View>
                            )}
                        />
                    </View>
                </View>
            </LinearGradient >
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        borderTopColor: "#FF7433",
        borderTopWidth: 1,
        borderBottomEndRadius: 24,
    },
    parentCircle: {
        backgroundColor: "#ffffff",
        width: width / 7,
        height: width / 7,
        justifyContent: "center",
        borderRadius: (width / 7) / 2,
        display: 'flex',
        alignItems: "center",
        position: "relative",
    },
    circle: {
        width: 48,
        height: 48,
        justifyContent: "center",
        borderRadius: 48 / 2,
        borderColor: "#BDBEBD",
        borderWidth: 1,
        borderStyle: "dotted"
    },
    centerText: {
        fontWeight: '500',
        fontSize: 12,
        lineHeight: 18,
        color: '#757575',
        textAlign: 'center',
    },
    title: {
        fontWeight: '500',
        fontSize: 14,
        lineHeight: 20,
        color: '#000000',
        textAlign: 'center'
    },
    dotWhiteLine: {
        flex: 1,
        height: 7,
        width: 34,
        backgroundColor: '#ffffff'
    },
    dotLine: {
        borderWidth: 0.8,
        borderColor: "#BDBEBD",
        marginTop: 3
    },
    bRBottom: {
        borderBottomLeftRadius: 24,
        borderBottomRightRadius: 24,
        borderWidth: 0.5,
        borderColor: "#EEF0F4"
    },
    indexPos: {
        position: "absolute",
        bottom: 48, right: 20,
        backgroundColor: "#E4E6E4",
        paddingHorizontal: 5,
        paddingTop: 1,
        borderBottomLeftRadius: 4,
        borderBottomRightRadius: 4,
        borderWidth: 0.5,
        borderColor: "#BDBEBD",
        borderStyle: "solid",
        borderTopWidth: 1
    },
    indexNo: {
        fontWeight: '500',
        fontSize: 12,
        lineHeight: 12,
        color: "#000000"
    },
    rowCenter: {
        flexDirection: 'row',
        justifyContent: 'center',
    }
});
