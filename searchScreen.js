import React, { useEffect } from "react";
import { Alert, Touchable } from "react-native";
import { View, useRef, Text, StyleSheet, Button, TouchableOpacity, Modal, Image, ImageBackground, TextInput, ScrollView } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import { useState } from "react";
import { searchListings } from "./ebayAPI";
const ScreenContainer = ({ children }) => (
    <View style={styles.container}>{children}</View>
  );
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      },
    headerBackground: 
    {
        position:"absolute",
        width: "100%",
        height: "100%",
        top:0,
        opacity: 0.3,
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#0C317D', // 061E4D BACKGROUND
        borderRadius: 30,
        margin: 20,
        //padding: 5,
        width:370,
        right:2,
        height:50,
        bottom: -50,
      },
      searchIcon: {
       marginRight: 15,
       left: 10,
        color: 'gray',
      },
      searchInput: {
        flex: 1,
        fontSize: 16,
        color: 'white',
      },
      searchText:
      { 
        color:"white"
      },

      resultsText:
      {
        color:"white",
        top:50
      },
      listing:
      {
        top:100,
        left:5,
        width:400,
        height:100,
        alignItems:"center",
        borderRadius:10,
        backgroundColor: "#012a6d",
      },
      listingOuter:
      {
        margin:5,
        top:-0,
      },
      listingImage:
      {
      },
      listingTextTitle:
      {
        fontSize:17,
        marginLeft: 10,
        marginTop: 0,
        color: "white",
      },
      listingTextPrice:
      {
        fontSize:17,
        marginLeft:40,
        color:"white",
      },
      listingImage:
      {
        width:85,
        borderRadius:10,

        height:85,
      },
      txt:
      {
        top:45,
        color:"white",
        textAlign: "center",
        fontSize:30,
      }

})
const Listing = ({onPress, title, price, image}) =>
{
  const MAX_TITLE_LENGTH = 33;
  //const max = title;
  const shortenTitle = (title) => {
    if (title.length > MAX_TITLE_LENGTH) {
      return title.substring(0, MAX_TITLE_LENGTH) + '...';
    }
    return title;
  };
  return (
    <TouchableOpacity onPress={onPress} style={styles.starOuter}>
      <View style={[styles.listing, { flexDirection: "row" }]}>
      <Image
              source={{ uri: image }}
              style={ styles.listingImage }
        />        
        <Text style={styles.listingTextTitle}>{shortenTitle(title)}</Text>
        <Text style={styles.listingTextPrice}>{price}</Text>
      </View>
    </TouchableOpacity>
  );
};
const SearchScreen = ({ navigation }) => {
    const [search, setSearch] = useState("");
return (
    <ScreenContainer>
        <ImageBackground
                source={require("./assets/images/PSBackground.jpg")}
                style={styles.headerBackground}
        />
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{paddingBottom: 270}}> 

        <View style={styles.searchContainer}>
        <Icon name="search" size={20} style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          onChangeText={setSearch}
          returnKeyType="done"
          placeholder="Search"
          placeholderTextColor="gray"
          autoFocus={true}
          onSubmitEditing={() => navigation.push("SearchResults", { search })}


        />
      </View>
      </ScrollView>
    </ScreenContainer>
)
};
export { SearchScreen };

const SearchResults = ({ route }) => {
  const { search } = route.params;
  const [titles, setTitles] = useState([]);

  useEffect(() => {
    const fetchListings = async (search) => {
      try {
        const listings = await searchListings(search);
        const titles = listings.map((listing) => listing);
        setTitles(titles);
      } catch (error) {
        console.error(error);
        setTitles(null);
      }
    };

    fetchListings(search);
  }, [search]);
  return (
    <ScrollView contentContainerStyle={{paddingBottom: 200}}>
      <Text style={styles.txt}>Search Results</Text>
    <View>
      {titles.map((listing, index) => (
        <Listing
          key={index}
          image={listing.galleryURL[0]}
          onPress={() => console.log("star pressed")} //navigation.push("Plus", {item}) }//
          title={listing.title[0]}
        />      
      ))}
    </View>
    </ScrollView>
  );
};

export {SearchResults};
/*/
    return (
    <ScreenContainer> 
      <ImageBackground
        source={require("./assets/images/PSBackground.jpg")}
        style={styles.headerBackground}
        />
      <Text style={styles.searchText}>{search}</Text>
    </ScreenContainer>
    )
    /*/

