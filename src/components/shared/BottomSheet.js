import React, { createRef, useEffect } from "react";
import { FlatList, TouchableOpacity, View, Text, StyleSheet } from "react-native";
import RBSheet from "react-native-raw-bottom-sheet";
export default function BottomSheet({ open, height, close, data }) {
    const lists = data;
    const botRef = createRef(null);
    useEffect(() => {
        open ? botRef.current.open() : null;
    }, [open]);

    return (
        <View>
            <RBSheet
                ref={botRef}
                height={height}
                openDuration={300}
                closeOnDragDown={true}
                closeOnPressBack={true}
                onClose={() => {
                    close(false);
                }}
                customStyles={{
                    wrapper: {
                        backgroundColor: "transparent"
                    },
                    draggableIcon: {
                        backgroundColor: "#000"
                    },
                    container: {
                        justifyContent: "center",
                        alignItems: "center"
                    }
                }}>
                <View>
                    <FlatList
                        data={lists}
                        renderItem={({ item, index }) => (
                            <TouchableOpacity
                                style={styles.option} onPress={() => {
                                    botRef.current.close();
                                }}>

                                <Text>
                                    {item.name}
                                </Text>
                            </TouchableOpacity>
                        )}
                        extraData={data}
                        keyExtractor={(item) => item.id}
                        showsVerticalScrollIndicator={false}
                    />
                </View>
            </RBSheet>
        </View >
    );
}
const styles = StyleSheet.create({
    option: {
        alignItems: 'center',
        flexDirection: 'row',
        padding: 10,
    }
})