import * as React from 'react';
import { View, StyleSheet, Text, Image, Dimensions, TextInput } from 'react-native';
import { images } from '../../constants/assets';
import { globalStyles } from '../../constants/styles';
const width = Dimensions.get('window').width;

export default function HomeFooter() {
    return (
        <View style={styles.container}>
            <Image source={images.gabitLogo} style={{ width: width }} />
            <View style={[globalStyles.rowAround, globalStyles.padH24, globalStyles.padV24]}>
                <View style={globalStyles.colCenter}>
                    <Text style={[styles.heading]}>About</Text>
                    <Text style={styles.subHeading}>Contact us</Text>
                    <Text style={styles.subHeading}>Comunity</Text>
                    <Text style={styles.subHeading}>FAQ’s</Text>
                </View>
                <View style={globalStyles.colCenter}>
                    <Text style={[styles.heading, globalStyles.mb4]}>Resources</Text>
                    <Text style={[styles.subHeading]}>Articles</Text>
                    <Text style={styles.subHeading}>Blogs</Text>
                    <Text style={styles.subHeading}>Events</Text>
                </View>
            </View>
            <Text style={[styles.heading, globalStyles.txtCenter, globalStyles.padB24]}>Join Us</Text>
            <View style={styles.searchSection}>
                <Image source={images.mail} />
                <TextInput
                    style={styles.input}
                    placeholder="Enter email.."
                />
                <Image source={images.arrowRight} />
            </View>
            <View style={[globalStyles.rowCenter, globalStyles.padV24]}>
                <Image source={images.fb} />
                <Image source={images.twiter} />
                <Image source={images.insta} />
            </View>
            <View style={styles.copyRight}>
                <Text style={globalStyles.txtCenter}> © 2022 Gabit. All rights reserved.</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#F5F5F5",
        flex: 1,
        display: "flex",
        width: width
    },
    heading: {
        fontWeight: '700',
        fontSize: 18,
        lineHeight: 20,
        color: "#000000",
        marginBottom: 4
    },
    subHeading: {
        fontWeight: '500',
        fontSize: 12,
        lineHeight: 14,
        color: "#757575",
        marginTop: 8
    },
    copyRight: {
        backgroundColor: "#FFFFFF",
        padding: 12,
        shadowColor: 'rgba(0, 0, 0, 0.15)',
    },
    searchSection: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        marginHorizontal: 40,
        borderColor: '#ffffff',
        borderWidth: 1,
        shadowColor: 'rgba(0, 0, 0, 0.04)',
        shadowOpacity: 1,
        borderRadius: 4,
        paddingHorizontal: 10
    },
    input: {
        flex: 1,
        paddingTop: 10,
        paddingRight: 10,
        paddingBottom: 10,
        paddingLeft: 10,
        backgroundColor: '#fff',
        color: '#424242',
    },
});
