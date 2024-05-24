// App.js

import React from 'react';
import { FlatList, View, Text, Image, StyleSheet } from 'react-native';

// Model untuk produk
const products = [
  { 
    name: 'Boneka 1', 
    price: 200000, 
    image: 'https://s4.bukalapak.com/img/4655381302/w-1000/Boneka_Beruang_Teddy_Bear_Jumbo_100cm_V2.jpg' 
  },
  { 
    name: 'Boneka 2', 
    price: 210000, 
    image: 'https://tse2.mm.bing.net/th?id=OIP.fgkmiQa_MiSJawCtp_SDIwHaJ3&pid=Api&P=0&h=180' 
  },
  { 
    name: 'Boneka 3', 
    price: 250000, 
    image: 'https://e7.pngegg.com/pngimages/562/313/png-clipart-teddy-bear-teddy-bear.png' 
  },
  { 
    name: 'Boneka 4', 
    price: 50000, 
    image: 'https://tse3.mm.bing.net/th?id=OIP.vjHaqhdxAHyn8D7pkAVm9gHaHa&pid=Api&P=0&h=180' 
  },
  { 
    name: 'Boneka 5', 
    price: 150000, 
    image: 'https://s2.bukalapak.com/img/22735299/large/Boneka_Beruang_Bantal_Sleep_Lucu_Imut_Manis_Pink_1a.JPG' 
  },
  { 
    name: 'Boneka 6', 
    price: 200000, 
    image: 'https://tse4.mm.bing.net/th?id=OIP.8ErVEFv2zuTl0c54uiNVCAHaHa&pid=Api&P=0&h=180' 
  },
  { 
    name: 'Boneka 7', 
    price: 200000, 
    image: 'https://tse1.mm.bing.net/th?id=OIP.G75rtH96fXm3pcw2Qj5kXwHaE8&pid=Api&P=0&h=180' 
  },
  { 
    name: 'Boneka 8', 
    price: 50000, 
    image: 'https://ds393qgzrxwzn.cloudfront.net/resize/c500x500/cat1/img/images/0/AQ1rfhsAMX.jpg' 
  },
  { 
    name: 'Boneka 9', 
    price: 300000, 
    image: 'https://tse4.mm.bing.net/th?id=OIP.QsbfKPx6aN6m84BdlXHxkQHaHa&pid=Api&P=0&h=180' 
  },
  { 
    name: 'Boneka 10', 
    price: 30000, 
    image: 'http://4.bp.blogspot.com/-vEzCdn6jAXs/UBiznpSeHcI/AAAAAAAAAEA/DshZbLCUGqg/s1600/boneka.jpg' 
  },
];

const App = () => {
  const renderProduct = ({ item }) => (
    <View style={styles.product}>
      <Image source={{ uri: item.image }} style={styles.productImage} />
      <Text style={styles.productName}>{item.name}</Text>
      <Text style={styles.productPrice}>Rp {item.price}</Text>
    </View>
  );

  return (
    <FlatList
      data={products}
      renderItem={renderProduct}
      keyExtractor={(item, index) => index.toString()}
      numColumns={2}
      contentContainerStyle={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  product: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
    padding: 16,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 2,
    margin: 8,
  },
  productImage: {
    width: 100,
    height: 100,
    marginBottom: 8,
  },
  productName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  productPrice: {
    fontSize: 16,
    color: '#888',
  },
});

export default App;