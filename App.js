import * as React from 'react';
import {
  Text,
  View,
  Button,
  ImageBackground,
  TextInput,
  FlatList,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useState, useEffect } from 'react';
import SelectDropdown from 'react-native-select-dropdown';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <ImageBackground
        source={require('./assets/sports.jpg')}
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
        }}>
        <Button
          title="Escale seu time!"
          onPress={() => navigation.navigate('Escale!')}
          color='green'
        />
      </ImageBackground>
    </View>
  );
}

function ViewFutScaleScreen({ route }) {
  const [listPlayerTitularVolei, setListPlayerTitularVolei] = useState([]);
  const [listPlayerLiberoVolei, setListPlayerliberoVolei] = useState([]);
  const [listPlayerReservaVolei, setListPlayerReservaVolei] = useState([]);
  const [listReservas, setListReservas] = useState('');
  const [listLiberos, setListLiberos] = useState('');

  useEffect(() => {
    if (route && route.params) {
      setListPlayerTitularVolei(route.params.playerTitularVolei);
      setListReservas(listWithComma(route.params.playerReservasVolei, 'title'));
      setListLiberos(listWithComma(route.params.playerLiberoVolei, 'title'));
    }
  }, [route]);

  function listWithComma(array, field) {
    const list = array.map((prop) => prop[field]);
    return list.join(', ');
  }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:"#000" }}>
      <View style={{ marginTop: '60px', color:"#fff" }}>
        Reservas: {listReservas ? listReservas : null}
      </View>
      <ImageBackground
        source={require('./assets/campofut.png')}
        style={{ width: '100%', height: '100%' }}>
        <View
          style={{
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
            flexDirection: 'row',
            top: '50px',
          }}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'column',
            }}>
            <View
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  width: '37px',
                  backgroundColor: '#fff',
                  padding: '10px',
                  borderRadius: '30px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                P1
              </Text>
            </View>
            <Text
              style={{
                padding: '10px',
                display: 'flex',
              }}>
              {listPlayerTitularVolei[0]
                ? listPlayerTitularVolei[0].title
                : null}
            </Text>
          </View>
        </View>
        <View
          style={{
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
            flexDirection: 'row',
            top: '78px',
          }}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'column',
            }}>
            <View
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop:'30px'
              }}>
              <Text
                style={{
                  width: '37px',
                  backgroundColor: '#fff',
                  padding: '10px',
                  borderRadius: '30px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                P2
              </Text>
            </View>
            <Text
              style={{
                padding: '10px',
                display: 'flex',
              }}>
              {listPlayerTitularVolei[1]
                ? listPlayerTitularVolei[1].title
                : null}
            </Text>
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'column',
            }}>
            <View
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  width: '37px',
                  backgroundColor: '#fff',
                  padding: '10px',
                  borderRadius: '30px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                P3
              </Text>
            </View>
            <Text
              style={{
                padding: '10px',
                display: 'flex',
              }}>
              {listPlayerTitularVolei[2]
                ? listPlayerTitularVolei[2].title
                : null}
            </Text>
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'column',
            }}>
            <View
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  width: '37px',
                  backgroundColor: '#fff',
                  padding: '10px',
                  borderRadius: '30px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                P4
              </Text>
            </View>
            <Text
              style={{
                padding: '10px',
                display: 'flex',
              }}>
              {listPlayerTitularVolei[3]
                ? listPlayerTitularVolei[3].title
                : null}
            </Text>
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'column',
            }}>
            <View
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop:'30px'
              }}>
              <Text
                style={{
                  width: '37px',
                  backgroundColor: '#fff',
                  padding: '10px',
                  borderRadius: '30px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                P5
              </Text>
            </View>
            <Text
              style={{
                padding: '10px',
                display: 'flex',
              }}>
              {listPlayerTitularVolei[4]
                ? listPlayerTitularVolei[4].title
                : null}
            </Text>
          </View>
        </View>
         <View
          style={{
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
            flexDirection: 'row',
            top: '25%',
          }}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'column',
            }}>
            <View
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  width: '37px',
                  backgroundColor: '#fff',
                  padding: '10px',
                  borderRadius: '30px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                P6
              </Text>
            </View>
            <Text
              style={{
                padding: '10px',
                display: 'flex',
              }}>
              {listPlayerTitularVolei[5]
                ? listPlayerTitularVolei[5].title
                : null}
            </Text>
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'column',
            }}>
            <View
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  width: '37px',
                  backgroundColor: '#fff',
                  padding: '10px',
                  borderRadius: '30px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                P7
              </Text>
            </View>
            <Text
              style={{
                padding: '10px',
                display: 'flex',
              }}>
              {listPlayerTitularVolei[6]
                ? listPlayerTitularVolei[6].title
                : null}
            </Text>
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'column',
            }}>
            <View
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  width: '37px',
                  backgroundColor: '#fff',
                  padding: '10px',
                  borderRadius: '30px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                P8
              </Text>
            </View>
            <Text
              style={{
                padding: '10px',
                display: 'flex',
              }}>
              {listPlayerTitularVolei[7]
                ? listPlayerTitularVolei[7].title
                : null}
            </Text>
          </View>
        </View>
         <View
          style={{
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
            flexDirection: 'row',
            top: '45%',
          }}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'column',
            }}>
            <View
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  width: '37px',
                  backgroundColor: '#fff',
                  padding: '10px',
                  borderRadius: '30px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                P9
              </Text>
            </View>
            <Text
              style={{
                padding: '10px',
                display: 'flex',
              }}>
              {listPlayerTitularVolei[8]
                ? listPlayerTitularVolei[8].title
                : null}
            </Text>
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'column',
            }}>
            <View
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  width: '37px',
                  backgroundColor: '#fff',
                  padding: '10px',
                  borderRadius: '30px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                P10
              </Text>
            </View>
            <Text
              style={{
                padding: '10px',
                display: 'flex',
              }}>
              {listPlayerTitularVolei[9]
                ? listPlayerTitularVolei[9].title
                : null}
            </Text>
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'column',
            }}>
            <View
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  width: '37px',
                  backgroundColor: '#fff',
                  padding: '10px',
                  borderRadius: '30px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                P11
              </Text>
            </View>
            <Text
              style={{
                padding: '10px',
                display: 'flex',
              }}>
              {listPlayerTitularVolei[10]
                ? listPlayerTitularVolei[10].title
                : null}
            </Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}
function ViewVoleiScaleScreen({ route }) {
  const [listPlayerTitularVolei, setListPlayerTitularVolei] = useState([]);
  const [listPlayerLiberoVolei, setListPlayerliberoVolei] = useState([]);
  const [listPlayerReservaVolei, setListPlayerReservaVolei] = useState([]);
  const [listReservas, setListReservas] = useState('');
  const [listLiberos, setListLiberos] = useState('');

  useEffect(() => {
    if (route && route.params) {
      setListPlayerTitularVolei(route.params.playerTitularVolei);
      setListReservas(listWithComma(route.params.playerReservasVolei, 'title'));
      setListLiberos(listWithComma(route.params.playerLiberoVolei, 'title'));
    }
  }, [route]);

  function listWithComma(array, field) {
    const list = array.map((prop) => prop[field]);
    return list.join(', ');
  }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:"#000" }}>
      <View style={{ marginTop: '60px', color:"#fff" }}>
        Liberos: {listLiberos ? listLiberos : null}
      </View>
      <View style={{ marginTop: '10px', color:"#fff" }}>
        Reservas: {listReservas ? listReservas : null}
      </View>
      <ImageBackground
        source={require('./assets/quadraVolei.png')}
        style={{ width: '100%', height: '100%' }}>
        <View
          style={{
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
            flexDirection: 'row',
            top: '50px',
          }}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'column',
            }}>
            <View
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  width: '37px',
                  backgroundColor: '#fff',
                  padding: '10px',
                  borderRadius: '30px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                P1
              </Text>
            </View>
            <Text
              style={{
                padding: '10px',
                display: 'flex',
              }}>
              {listPlayerTitularVolei[0]
                ? listPlayerTitularVolei[0].title
                : null}
            </Text>
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'column',
            }}>
            <View
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  width: '37px',
                  backgroundColor: '#fff',
                  padding: '10px',
                  borderRadius: '30px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                P6
              </Text>
            </View>
            <Text
              style={{
                padding: '10px',
                display: 'flex',
              }}>
              {listPlayerTitularVolei[5]
                ? listPlayerTitularVolei[5].title
                : null}
            </Text>
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'column',
            }}>
            <View
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  width: '37px',
                  backgroundColor: '#fff',
                  padding: '10px',
                  borderRadius: '30px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                P5
              </Text>
            </View>
            <Text
              style={{
                padding: '10px',
                display: 'flex',
              }}>
              {listPlayerTitularVolei[4]
                ? listPlayerTitularVolei[4].title
                : null}
            </Text>
          </View>
        </View>
        <View
          style={{
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
            flexDirection: 'row',
            top: '135px',
          }}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'column',
            }}>
            <View
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  width: '37px',
                  backgroundColor: '#fff',
                  padding: '10px',
                  borderRadius: '30px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                P2
              </Text>
            </View>
            <Text
              style={{
                padding: '10px',
                display: 'flex',
              }}>
              {listPlayerTitularVolei[1]
                ? listPlayerTitularVolei[1].title
                : null}
            </Text>
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'column',
            }}>
            <View
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  width: '37px',
                  backgroundColor: '#fff',
                  padding: '10px',
                  borderRadius: '30px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                P3
              </Text>
            </View>
            <Text
              style={{
                padding: '10px',
                display: 'flex',
              }}>
              {listPlayerTitularVolei[2]
                ? listPlayerTitularVolei[2].title
                : null}
            </Text>
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'column',
            }}>
            <View
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  width: '37px',
                  backgroundColor: '#fff',
                  padding: '10px',
                  borderRadius: '30px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                P4
              </Text>
            </View>
            <Text
              style={{
                padding: '10px',
                display: 'flex',
              }}>
              {listPlayerTitularVolei[3]
                ? listPlayerTitularVolei[3].title
                : null}
            </Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

const sports = ['Futebol', 'Vôlei'];
let cont = 0;
function ScaleScreen({ navigation }) {
  const [sport, setSport] = useState('');
  const [invalidValue, setInvalidValue] = useState(false);
  const [invalidView, setInvalidView] = useState(false);
  const [player, setPlayer] = useState(null);
  const [listPlayerTitularVolei, setListPlayerTitularVolei] = useState([]);
  const [listPlayerLiberoVolei, setListPlayerliberoVolei] = useState([]);
  const [listPlayerReservaVolei, setListPlayerReservaVolei] = useState([]);

  function addPlayer(player, list) {
    let listAux = list;
    cont += 1;
    if (listAux && listAux.length > 0) {
      listAux.push({ id: cont, title: player });
    } else {
      listAux = [];
      listAux.push({ id: cont, title: player });
    }
    setPlayer('');
    setListPlayerTitularVolei(listAux);
  }
  function addPlayerLibero(player, list) {
    let listAux = list;
    cont += 1;
    if (listAux && listAux.length > 0) {
      listAux.push({ id: cont, title: player });
    } else {
      listAux = [];
      listAux.push({ id: cont, title: player });
    }
    setPlayer('');
    setListPlayerliberoVolei(listAux);
  }
  function addPlayerReserva(player, list) {
    let listAux = list;
    cont += 1;
    if (listAux && listAux.length > 0) {
      listAux.push({ id: cont, title: player });
    } else {
      listAux = [];
      listAux.push({ id: cont, title: player });
    }
    setPlayer('');
    setListPlayerReservaVolei(listAux);
  }

  function resetForm() {
    cont = 0;
    setListPlayerTitularVolei([]);
    setListPlayerliberoVolei([]);
    setListPlayerReservaVolei([]);
    setPlayer('');
  }

  return (
    <View style={{ flex: 2, alignItems: 'center', backgroundColor:'#000', color:'#fff' }}>
      <Text style={{ color:'#fff' }}>Selecione um esporte</Text>
      <SelectDropdown
        data={sports}
        defaultButtonText={''}
        onSelect={(selectedItem, index) => {
          setSport(selectedItem);
          resetForm();
        }}
        buttonTextAfterSelection={(selectedItem, index) => {
          return selectedItem;
        }}
        rowTextForSelection={(item, index) => {
          return item;
        }}
      />
      {sport == 'Futebol' ? (
        <View  style={{ width: '100%', height: '100%' }}>
             <Text style={{ fontWeight: '700' }}>
              Monte seu time de futebol:
            </Text>
            <Text style={{ fontWeight: '700' }}>
              Formação: 11 jogadores titulares e até 11 reservas
            </Text>
        <ImageBackground
          source={require('./assets/campofut.png')}
          style={{ width: '100%', height: '100%' }}>
           <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <Text>Digite o nome do jogador titular {cont + 1}:</Text>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <View>
                <TextInput
                  style={{ borderWidth: 1, fontSize: 20, height: '35px', color:'#fff' }}
                  value={player}
                  onChangeText={setPlayer}
                />
                {invalidValue ? <Text>Digitei um valor válido!</Text> : null}
              </View>
              <View style={{ maxHeight: '10%' }}>
                <Button
                  title="Add"
                  onPress={() => {
                    if (player) {
                      setInvalidValue(false);
                      if (cont <= 10) {
                        addPlayer(player, listPlayerTitularVolei);
                        if (cont == 11) setInvalidView(false);
                      } else if (cont > 10 && cont <= 21) {
                        addPlayerReserva(player, listPlayerReservaVolei);
                      }
                    } else {
                      setInvalidValue(true);
                    }
                  }}
                  color="#87CEEB"
                  style={{ width: '10%' }}
                />
              </View>
            </View>
            <View
              style={{
                width: '80%',
                borderRadius: '20px',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '10px',
                color:'#000',
                fontWeight:'700',
                border: '1px solid #fff',
              }}>
              Titulares (1 a 11):
              <FlatList
                data={listPlayerTitularVolei}
                renderItem={({ item }) => (
                  <Text style={{color:'#000', fontWeight:'700',}}>{item.id + '. ' + item.title}</Text>
                )}
              />
            </View>
            <View
              style={{
                width: '80%',
                borderRadius: '20px',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '8px',
                color:'#000',
                fontWeight:'700',
                border: '1px solid #fff',
              }}>
              Reservas (12 a 22):
              <FlatList
                data={listPlayerReservaVolei}
                renderItem={({ item }) => (
                  <Text style={{color:'#000', fontWeight:'700',}}>{item.id + '. ' + item.title}</Text>
                )}
              />
            </View>
            <View
              style={{
                marginBottom: '10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Button
                title="Visualizar escalação"
                onPress={() => {
                  console.log(listPlayerTitularVolei.length);
                  if (listPlayerTitularVolei.length == 11) {
                    navigation.navigate('ScaleViewFut', {
                      playerTitularVolei: listPlayerTitularVolei,
                      playerLiberoVolei: listPlayerLiberoVolei,
                      playerReservasVolei: listPlayerReservaVolei,
                    });
                    setInvalidView(false);
                  } else {
                    setInvalidView(true);
                  }
                }}
                color="green"
                disabled={invalidView}
              />
              {invalidView ? <Text>Complete o time titular!</Text> : null}
            </View>

            <Button
              title="Limpar Dados"
              onPress={() => resetForm()}
              color="red"
            />
          </View>
        </ImageBackground>
        </View>
      ) : sport == 'Vôlei' ? (
        <ImageBackground
          source={require('./assets/quadraVolei.png')}
          style={{ width: '100%', height: '100%' }}>
          <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <Text>Monte seu time de vôlei:</Text>
            <Text style={{ marginTop: '10px' }}>
              Formação: 6 jogadores titulares até 2 liberos e até 6 reservas
            </Text>
            <Text>Digite o nome do jogador titular {cont + 1}:</Text>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <View>
                <TextInput
                  style={{ borderWidth: 1, fontSize: 20, height: '35px' }}
                  value={player}
                  onChangeText={setPlayer}
                />
                {invalidValue ? <Text>Digitei um valor válido!</Text> : null}
              </View>
              <View style={{ maxHeight: '10%' }}>
                <Button
                  title="Add"
                  onPress={() => {
                    if (player) {
                      setInvalidValue(false);
                      if (cont <= 5) {
                        addPlayer(player, listPlayerTitularVolei);
                        if (cont == 6) setInvalidView(false);
                      } else if (cont > 5 && cont <= 7) {
                        addPlayerLibero(player, listPlayerLiberoVolei);
                      } else if (cont > 7 && cont <= 13) {
                        addPlayerReserva(player, listPlayerReservaVolei);
                      }
                    } else {
                      setInvalidValue(true);
                    }
                  }}
                  color="#87CEEB"
                  style={{ width: '10%' }}
                />
              </View>
            </View>
            <View
              style={{
                width: '80%',
                borderRadius: '20px',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '10px',
                border: '1px solid black',
              }}>
              Titulares (1 a 6):
              <FlatList
                data={listPlayerTitularVolei}
                renderItem={({ item }) => (
                  <Text style={{}}>{item.id + '. ' + item.title}</Text>
                )}
              />
            </View>
            <View
              style={{
                width: '80%',
                borderRadius: '20px',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '10px',
                border: '1px solid black',
              }}>
              Liberos (7 e 8):
              <FlatList
                data={listPlayerLiberoVolei}
                renderItem={({ item }) => (
                  <Text style={{}}>{item.id + '. ' + item.title}</Text>
                )}
              />
            </View>
            <View
              style={{
                width: '80%',
                borderRadius: '20px',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '10px',
                border: '1px solid black',
              }}>
              Reservas (9 a 14):
              <FlatList
                data={listPlayerReservaVolei}
                renderItem={({ item }) => (
                  <Text style={{}}>{item.id + '. ' + item.title}</Text>
                )}
              />
            </View>
            <View
              style={{
                marginBottom: '10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Button
                title="Visualizar escalação"
                onPress={() => {
                  console.log(listPlayerTitularVolei.length);
                  if (listPlayerTitularVolei.length == 6) {
                    navigation.navigate('ScaleViewVolei', {
                      playerTitularVolei: listPlayerTitularVolei,
                      playerLiberoVolei: listPlayerLiberoVolei,
                      playerReservasVolei: listPlayerReservaVolei,
                    });
                    setInvalidView(false);
                  } else {
                    setInvalidView(true);
                  }
                }}
                color="green"
                disabled={invalidView}
              />
              {invalidView ? <Text>Complete o time titular!</Text> : null}
            </View>

            <Button
              title="Limpar Dados"
              onPress={() => resetForm()}
              color="red"
            />
          </View>
        </ImageBackground>
      ) : null}
    </View>
  );
}

const Stack = createNativeStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Bem vindo, técnico!">
        <Stack.Screen name="Bem vindo, técnico!" component={HomeScreen} />
        <Stack.Screen name="Escale!" component={ScaleScreen} />
        <Stack.Screen name="ScaleViewFut" component={ViewFutScaleScreen} />
        <Stack.Screen name="ScaleViewVolei" component={ViewVoleiScaleScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;