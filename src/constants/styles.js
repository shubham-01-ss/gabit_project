import { StyleSheet } from 'react-native';

const globalStyles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    rowCenter: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    rowBetween: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    rowAround: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    boxShadow: {
        borderColor: '#ffffff',
        borderWidth: 1,
        shadowColor: 'rgba(255, 255, 255, 0.58)',
        shadowRadius: 10,
        shadowOpacity: 1,
        borderRadius: 12,
    },
    flex1: {
        flex: 1
    },
    strike: {
        textDecorationLine: "line-through",
        textDecorationColor: "#757575"
    },
    rowStart: {
        flexDirection: 'row',
        alignItems: 'flex-start',
    },
    colCenter: {
        flexDirection: 'column',
        alignItems: 'center',
    },
    col: {
        flexDirection: 'column',
    },
    flexGrow: {
        flexGrow: 1
    },
    container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 16,
        marginHorizontal: 26
    },
    mb4: {
        marginBottom: 4
    },
    mb16: {
        marginBottom: 16
    },
    mt4: {
        marginTop: 4
    },
    mr4: {
        marginRight: 4
    },
    mt8: {
        marginTop: 8
    },
    mt12: {
        marginTop: 12
    },
    mt48: {
        marginTop: 48
    },
    ml8: {
        marginLeft: 8
    },
    mr12: {
        marginRight: 12
    },
    ml12: {
        marginLeft: 12
    },
    ml6: {
        marginLeft: 6
    },
    mr16: {
        marginRight: 16
    },
    mr8: {
        marginRight: 8
    },
    ml3: {
        marginLeft: 3
    },
    pad10: {
        padding: 10
    },
    colorWhite: {
        color: "#ffffff",
    },
    bgWhite: {
        backgroundColor: "#ffffff",
    },
    paddingLeft20: {
        paddingLeft: 20
    },
    textRegular14: {
        fontSize: 14,
    },
    buttonText: {
        paddingVertical: 10,
        paddingHorizontal: 16,
        fontWeight: "600",
        fontSize: 12,
        lineHeight: 16,
        borderRadius: 8
    },
    ratingsReviews: {
        fontWeight: '500',
        fontSize: 14,
        lineHeight: 16,
        color: "#757575",
    },
    price: {
        fontStyle: "normal",
        fontWeight: "700",
        fontSize: 18,
        lineHeight: 20,
        color: "#000000"
    },
    title: {
        fontWeight: '700',
        fontSize: 20,
        lineHeight: 24,
        color: '#000000',
        flexWrap: 'wrap',
    },
    padH24: {
        paddingHorizontal: 24
    },
    padH16: {
        paddingHorizontal: 16
    },
    padH45: {
        paddingHorizontal: 45
    },
    padV16: {
        paddingVertical: 16
    },
    padV24: {
        paddingVertical: 24
    },
    padV8: {
        paddingVertical: 8
    },
    padB24: {
        paddingBottom: 24
    },
    description: {
        fontWeight: '500',
        fontSize: 12,
        lineHeight: 16,
        color: '#757575',
    },
    cardImg: {
        overflow: "hidden",
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    txtCenter: {
        textAlign: "center",
    },
    borderR16: {
        borderRadius: 16
    }
});

export { globalStyles }