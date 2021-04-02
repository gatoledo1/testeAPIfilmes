import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Component from "./component";
import { StatusBar } from 'expo-status-bar';

interface filmeItens {
  Title: string;
  Year: string;
  Type: string;
  Poster: string;
}

function App() {

  const [item, setItem] = useState(new Array<filmeItens>())

  useEffect(() => {

    LoadItens()

  }, [])

  async function LoadItens() {
    let keyAPI = "28d0dee8"
    await fetch(`http://www.omdbapi.com/?s="Batman"&apikey=${keyAPI}&page="default"`)
      .then((res) => res.json())
      .then(async (json) => {
        let array = await json.Search;
        setItem(array)
      })
  }
  return (
    <ScrollView>
      <StatusBar style="dark" />
      <View style={styles.container}>
        {
          item.map((itens, index) =>
            <Component key={index} titulo={itens.Title} ano={itens.Year} tipo={itens.Type} poster={itens.Poster} />
          )
        }

      </View>
    </ScrollView>

  )

}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f3f3',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 60,
  },
});
