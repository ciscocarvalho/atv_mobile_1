import { Button, Image, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';
import icon from './assets/images/icon.png';
import { useState } from 'react';

export default function App() {
  const [mobName, setMobName] = useState('');
  const [nameList, setNameList] = useState<string[]>([]);

  const clearMobName = () => {
    setMobName('');
  };

  const addMobName = () => {
    setNameList([...nameList, mobName]);
    clearMobName();
  };

  const removeMobNameByIndex = (index: number) => {
    setNameList(nameList.filter((_, thisIndex) => thisIndex !== index));
  };

  return (
    <SafeAreaView style={styles.bgContainer}>
      <View style={styles.column}>
        <View style={styles.column}>
          <View style={styles.row}>
            <center>
              <Image style={styles.icon} source={icon} />
            </center>

            <View style={styles.bgContainer}>
              <Text style={styles.text}>Cadastre seu mob:</Text>
            </View>
          </View>

          <View style={styles.column}>
            <Text style={{ ...styles.text, alignSelf: 'flex-start' }}>Nome:</Text>
            <TextInput style={styles.textInput} onChangeText={(name) => setMobName(name)} value={mobName} />
            <View style={styles.rowBetween}>
              <Button title='Limpar' onPress={clearMobName} />
              <Button title='Adicionar' onPress={addMobName} />
            </View>
          </View>
        </View>

        <View style={styles.column}>
          {
            nameList.map((name, index) => {
              return <>
                <View style={styles.mobNameContainer}>
                  <View style={styles.row}>
                    <Text style={styles.text}>
                      {name}
                    </Text>
                    <Button title='Apagar' onPress={() => removeMobNameByIndex(index)}></Button>
                  </View>
                </View>
              </>
            })
          }
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  bgContainer: {
    flex: 1,
    backgroundColor: 'darkgrey',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 20,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  mobNameContainer: {
    fontSize: 18,
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
  textInput: {
    borderColor: 'black',
    borderWidth: 2,
    height: 30,
  },
  columnBetween: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  rowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  row: {
    flexDirection: 'row',
    gap: 20,
  },
  column: {
    flexDirection: 'column',
    gap: 20,
  },
  icon: {
    width: 200,
    height: 200,
  },
});
