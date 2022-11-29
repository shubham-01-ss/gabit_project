import * as React from 'react';
import { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import { images } from '../../constants/assets';
import { globalStyles } from '../../constants/styles';
import BottomSheet from './BottomSheet';

export default function skinFilter() {
    const [modal, setModal] = useState(false)
    const sortList = [
        {
            id: 1,
            name: 'Age'
        },
        {
            id: 2,
            name: 'SKin'
        },
        {
            id: 3,
            name: 'SkinTone'
        },
        {
            id: 4,
            name: 'Gender'
        },
        {
            id: 5,
            name: 'Age'
        },
        {
            id: 6,
            name: 'SKin'
        },
        {
            id: 7,
            name: 'SkinTone'
        },
        {
            id: 8,
            name: 'Gender'
        }
    ];

    return (
        <View>
            <View style={[globalStyles.row, styles.dropdownContainer, globalStyles.padV8]}>
                <View style={[styles.dropdown]}>
                    <TouchableOpacity onPress={() => setModal(true)} style={globalStyles.rowCenter}>
                        <Image
                            source={images.sortIcon}
                        />
                        <Text style={styles.dropdownType}>
                            Sort by
                        </Text>
                        <Image style={globalStyles.mt4}
                            source={images.dropdown}
                        />
                    </TouchableOpacity>
                </View>
                <View style={styles.dropdown}>
                    <TouchableOpacity onPress={() => setModal(true)} style={globalStyles.rowCenter}>
                        <Text style={styles.dropdownType}>
                            Skin type
                        </Text>
                        <Image style={globalStyles.mt4}
                            source={images.dropdown}
                        />
                    </TouchableOpacity>
                </View>
                <View style={styles.dropdown}>
                    <TouchableOpacity onPress={() => setModal(true)} style={globalStyles.rowCenter}>
                        <Text style={styles.dropdownType}>
                            Skin concern
                        </Text>
                        <Image style={globalStyles.mt4}
                            source={images.dropdown}
                        />
                    </TouchableOpacity>
                </View>
            </View>
            <BottomSheet
                open={modal}
                data={sortList}
                height={300}
                close={(bool) => setModal(bool)}
                identity={"name"}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    dropdownContainer: {
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
        color: "#212121",
        marginRight: 10
    },
});
