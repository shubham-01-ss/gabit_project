import * as React from 'react';
import { Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { globalStyles } from '../../constants/styles';
import { styles } from './CompleteRegimeStyle';

export default function CompleteRegime(data) {
  const regimes = data.data
  return (
    <View style={[styles.container]}>
      <LinearGradient
        colors={['rgba(226, 244, 243, 1)', 'rgba(253, 245, 233, 0.6)']}
        angle={341.66}
        start={{ x: 0, y: 0.1 }}
        end={{ x: 0, y: 0.9 }}
        locations={[0.5, 1]}
        style={[globalStyles.borderR16]}>
        <View style={globalStyles.col}>
          <View style={[globalStyles.padH45, styles.pad]}>
            <Text style={[globalStyles.title, globalStyles.txtCenter]}>
              Complete regime makes a difference
            </Text>
          </View>

          <View
            style={[
              globalStyles.rowBetween,
              globalStyles.padH16,
              globalStyles.padV8,
            ]}>
            {regimes.map((item, index) => (
              <React.Fragment key={index}>
                <View>
                  <View>
                    <View
                      style={[
                        styles.outer,
                        index % 2 != 0 ? styles.dropMargin : '',
                      ]}>
                      <View style={styles.pNumber}>
                        <Text style={styles.number}>{index + 1}</Text>
                      </View>
                      <View style={[styles.first, styles.common]}></View>
                      <View style={[styles.second, styles.common]}></View>
                      <View style={[styles.third, styles.common]}></View>
                    </View>
                  </View>
                  <View style={globalStyles.mt12}>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.format}>{item.centerText}</Text>
                  </View>
                </View>
                {index != regimes.length - 1 &&
                  <View
                    style={[
                      styles.dash,
                      index % 2 != 0 ? styles.connectOdd : styles.connectEven,
                    ]}>
                  </View>}
              </React.Fragment>
            ))}
          </View>
        </View>
      </LinearGradient>
    </View>
  );
}