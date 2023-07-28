  import React, { useEffect } from "react";
  import { Alert, Touchable } from "react-native";
  import { View, Text, StyleSheet, Button, TouchableOpacity, Modal, Image, ImageBackground, TextInput, ScrollView, Linking } from "react-native";
  import { useState } from "react";
  import Icon from 'react-native-vector-icons/FontAwesome';
  import { searchListings } from "./ebayAPI";
  import { SearchResults } from "./searchScreen";
  const styles = StyleSheet.create({
      container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
      },
      button: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginVertical: 10,
        borderRadius: 5
      },
      title: {
        color: "#fff",
        justifyContent: "center",
        bottom:0,
        zIndex: 1
      },
      headerBackground: {
        position:"absolute",
        width: "100%",
        height: "100%",
        top:0,
        opacity: 0.3,
      },
      plusbutton: {
        width: 50,
        height: 50,
        borderRadius: 20,
        backgroundColor: 'rgba(225, 225, 255, 0)',
        justifyContent: 'center',
        alignItems: 'center',
        right:15,
        bottom:10,
      },
      plusbuttonText: {
        fontSize: 50,
        color: '#ffff',
      },
      wrap: {
        padding:40,
        margin:30,
        borderRadius:8,
        backgroundColor: "#001F52",
        bottom:-100,

      },
      wrapTextHeader: {
        color:  "white",
        textAlign:"center",
        top:-30,
        fontSize: 35,
      },
      wrapText: {
        color:  "white",
        marginTop:20,
        fontSize:20,
        //textAlign: "center"
      },

      textInput:{
        backgroundColor:"white",
        padding:10,
        borderRadius: 30,
      },

      starContainer:
      {
        top:100,
        alignItems:"center",
        paddingBottom: 200,
      },
      star:
      {
        width:400,
        height:100,

        borderRadius:10,
        backgroundColor: "#012a6d",
      },
      starOuter:
      {
        margin:5,
        top:-0,
      },
      starTextTitle:
      {
        fontSize:25,
        marginLeft: 15,
        marginTop: 30,
        color: "white",
      },
      starTextConsole:
      {
        fontSize: 15,
        color: "grey",
        marginLeft: 15,
      },
      starTextPrice:
      {
        fontSize:15,
        marginLeft:350,
        marginTop:-35,
        color:"white",
      },
      doneButton:
      {
        height: 50,
        width: 200,
        borderRadius: 25,
        top:10,
        backgroundColor:"#4a71b0",
        alignItems: "center",
        justifyContent: "center",
        margin:5,
        left:30,
      },
      doneButtonText:
      {
        fontSize:20,
        color: "white"
      },
      focusedBox:
      {
        width:395,
        height:200,
        bottom:530,
        borderRadius:10,
        flexDirection: "row",
        justifyContent: "space-around",
      },
      boxedBox: {
        width: 175,
        height: 175,
        borderWidth: 2,
        borderColor: "#012a6d",
        borderRadius: 10,
        backgroundColor: "white",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      },
      focusTextHeader:
      {
        top:20,
        color:"white",
        fontWeight: "bold",
        fontSize:20,
        textAlign: "center",
      },
      focusText:
      {
        top:25,
        fontSize: 15,
        color: "grey"
      },
      focusedImage:
      {
        alignContent: "center",
        marginTop: 25,
        height:150,
        width:150,
      },
      listingsContainer:
      {
        top:220,
        width:450,
        height: 590,
        //backgroundColor: "grey",
      },
      listing:
      {
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
      listingTextTitle:
      {
        fontSize:19,
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
        height:85,
      },
      searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#0C317D', // 061E4D BACKGROUND
        borderRadius: 30,
        margin: 20,
        //padding: 5,
        width:370,
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
      horiCards: {
        marginTop:70,
        top: 50,
        width: 410,
        flexDirection: "row",
      },
      card:
      {
        width:190,
        height:215,
        margin:5,
        backgroundColor: "#0C317D",
        borderRadius:30
      },
      cardText:
      {
        color: "white",
        position: "absolute", 
        top: -14, 
        left: 20, 
      },
      horiContainer:
      {
        marginTop:0
      },
      horiText:
      {
        color:"#AEAEAE",
        fontSize: 10,
        textAlign: "center",
        top:25,

      },
      horiPrice:
      {
        color:"white",
        fontSize: 20,
        textAlign: "center",
        top:30,

      },
      horiImage:
      {
        width:140,
        height:140,
        alignSelf: "center",
        top: 20,
      },
      titleText:
      {
        fontSize: 35,
        color: "white",
        textAlign: "center",
        top:50,
      },
      consoleContainer:
      {
        width:"100%",
        height:150,
        //backgroundColor:"white",
        top:90,
      },
      consoleCards:
      {
        flexDirection:"row",
      },
      consoleCard:
      {
        height: 100,
        width:100,
        backgroundColor: "#4771C9",
        borderRadius:30,
        top:0,
        marginLeft:4,
        alignItems:"center",

      },
      consoleImage:
      {
        width:100,
        height:100,
        top:0
      },
      alertText:
      {
        color: "white",
      },
      
      
    });


const PlusButton = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.plusbutton}>
      <Text style={styles.plusbuttonText}>+</Text>
    </TouchableOpacity>
  );
};
    

const ScreenContainer = ({ children }) => (
    <View style={styles.container}>{children}</View>
  );

const Star = ({onPress, title, console, price}) => 
{
  return (
    <TouchableOpacity onPress={onPress} style={styles.starOuter}>
      <View style={styles.star}>
        <Text style={styles.starTextTitle}>{title}</Text>
        <Text style={styles.starTextConsole}>{console}</Text>
        <Text style={styles.starTextPrice}>{price}</Text>
      </View>
    </TouchableOpacity>

  );
} 
const Listing = ({onPress, title, price, image}) =>
{
  const MAX_TITLE_LENGTH = 20;
  const shortenTitle = (title) => {
    if (title.length > MAX_TITLE_LENGTH) {
      return title.substring(0, MAX_TITLE_LENGTH) + '...';
    }
    return title;
  };
  return (
    <TouchableOpacity onPress={onPress} style={styles.starOuter}>
      <View style={[styles.listing, { flexDirection: "row" }]}>
        <Image source={{ uri: image}} style={styles.listingImage} />
        <Text style={styles.listingTextTitle}>{shortenTitle(title)}</Text>
        <Text style={styles.listingTextPrice}>{price}</Text>
      </View>
    </TouchableOpacity>
  );
};
export const SignIn = ({ navigation }) => { 
    return (
      <ScreenContainer>
        <Text>Sign In Screen</Text>   
    </ScreenContainer>
    );
  };
  
const HoriCards = ({items}) => {
  const MAX_TITLE_LENGTH = 32;
  const shortenTitle = (title) => {
    if (title.length > MAX_TITLE_LENGTH) {
      return title.substring(0, MAX_TITLE_LENGTH) + '...';
    }
    return title;
  };
  return (
    <View style={styles.horiCards}>
      <Text style={styles.cardText}>DEALS</Text>
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {items.map((item, index) => (
        <TouchableOpacity style={styles.card} onPress={() => {Linking.openURL(item.viewItemURL[0]);}}>
          <Image source={{ uri: item.galleryURL[0] }} style={styles.horiImage}></Image>
          <Text style={styles.horiText}>{shortenTitle(item.title[0])}</Text>
          <Text style={styles.horiPrice}>${item.sellingStatus[0].convertedCurrentPrice[0].__value__}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
    
  </View>
  
  )
} 

const ConsoleCards = () => {
return (
  <View style={styles.consoleCards}>
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>  
    <TouchableOpacity style={styles.consoleCard}>
      <Image        
          source={require("./assets/images/PSLogo.png")}
          style={styles.consoleImage}
        />
    </TouchableOpacity>
    <TouchableOpacity style={styles.consoleCard}>
      <Image        
          source={require("./assets/images/PS2Logo.png")}
          style={styles.consoleImage}
        />
    </TouchableOpacity>
    <TouchableOpacity style={styles.consoleCard}>
      <Image        
          source={require("./assets/images/GCLogo.png")}
          style={styles.consoleImage}
        />
    </TouchableOpacity>
    <TouchableOpacity style={styles.consoleCard}>
      <Image        
          source={require("./assets/images/N64Logo.png")}
          style={styles.consoleImage}
        />
    </TouchableOpacity>

    </ScrollView>

  </View>

)
}
  const Home = ({ navigation }) => {
    const [search, setSearch] = useState("");
    itemOne =[
      {
        listName: "Delas",
        title: "God of war 2 DISK ONLY *RARE*",
        image: './assets/images/temp.jpg'
      },
      {
        
        title: "God",
        image: './assets/images/temp.jpg'
      },
      {
        title: "God",
        image: './assets/images/temp.jpg'
      },
      {
        title: "God",
        image: './assets/images/temp.jpg'
      },
    ]
    itemTwo =[
      {
        listName: "We do not care",
        title: "Gringle dingle man",
        image: './assets/images/squareB.PNG'
      },
      {
        title: "God",
        image: './assets/images/temp.jpg'
      },
      {
        title: "God",
        image: './assets/images/temp.jpg'
      },
      {
        title: "God",
        image: './assets/images/temp.jpg'
      },
    ]
    const [rowOne, setRowOne] = useState([]);
    const [rowTwo, setRowTwo] = useState([]);
    const [rowThree, setRowThree] = useState([]);
    useEffect(() => {
      const fetchListings = async (search1, search2, search3) => {
        try {
          const listings1 = await searchListings(search1);
          const listings2 = await searchListings(search2);
          const listings3 = await searchListings(search3);

          const one = listings1.map((listing) => listing);
          const two = listings2.map((listing) => listing);
          const three = listings3.map((listing) => listing);
          console.log(one[0])
          setRowOne(one);
          setRowTwo(two);
          setRowThree(three);
        } catch (error) {
          console.error(error);
          setTitles(null);
        }
      };
  
      fetchListings("God of war 2 Playstation 2", "Legend of Zelda a Link Between Worlds 3ds CIB", "Metal Gear Solid 1 Playstation 1");
    }, []);
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
          onSubmitEditing={() => navigation.push("SearchResults", { search })}

        />
      </View>
      <Text style={styles.titleText}>Retro Game Deals</Text>

      <View style={styles.consoleContainer}>
        <ConsoleCards></ConsoleCards>
      </View>
      <View style={styles.horiContainer}>
          <HoriCards items={rowOne}></HoriCards>
          <HoriCards items={rowTwo}></HoriCards>
          <HoriCards items={rowThree}></HoriCards>
      </View>
      </ScrollView>
    </ScreenContainer>  
    );
  };
  
  export { Home };


  export const StarScreen = ({ navigation }) => 
  {
    const [isVisible, setIsVisible] = useState(false);
    const [starList, setStarList] = useState([]); 
    const [title, setTitle] = useState("");
    const [consoleName, setConsoleName] = useState("");
    const [price, setPrice] = useState("");

    const openPopup = () => 
    {
      setIsVisible(true);
    };

    const closePopup = () => 
    {
      setIsVisible(false);
    };
    
    const addStar = () => {
      if (title != "" && consoleName != "" && price != "")
      {
        const newStar = { title, consoleName, price };
        //console.log(newStar)
        setStarList((prevList) => [...prevList, newStar]);
      }
      else
      {
        console.log("No input")
      }    
      setTitle("");
      setConsoleName("");
      setPrice("");
      closePopup();
    };

    const starListDisplay = () =>
    {
      for (let i = 0; i < starList.length; i++)
      {
        console.log(starList[i].title)
      }
    }
    // calls everytime the starlist is updated
    useEffect(() => {
      starListDisplay();
    }, [starList]);

    React.useLayoutEffect(() => {
      navigation.setOptions({
        headerRight: () => (
          <PlusButton onPress={openPopup}></PlusButton>

        ),
      });
    }, [navigation]);
      return (
      <ScreenContainer>
        <ImageBackground
        source={require("./assets/images/PSBackground.jpg")}
        style={styles.headerBackground}
      />
        <ScrollView contentContainerStyle={styles.starContainer}>
        {starList.map((item, index) => (
          <Star
            key={index}
            onPress={() =>
              navigation.push("Plus", {item}) }//() => console.log("star pressed")
            title={item.title}
            console={item.consoleName}
            price={item.price}
          />
        ))}
        </ScrollView>
        <Text>Star Screen</Text>
        <Button
          title="Plus Screen"
          onPress={() =>
            navigation.push("Plus", {name: "PLUS SCREEN"})
          }
        />
        <Modal visible={isVisible} animationType="fade" transparent>
          {
            <View style = {styles.wrap}>
            <Text style={styles.wrapTextHeader}>Add A Star Alert</Text>
              <Text style={styles.wrapText}>Title:</Text>
                <TextInput style={styles.textInput} onChangeText={setTitle}></TextInput>
            <Text style={styles.wrapText}>Console:</Text>
              <TextInput style={styles.textInput} onChangeText={setConsoleName}></TextInput>
            <Text style={styles.wrapText}>Price you want it for:</Text>
              <TextInput style={styles.textInput} keyboardType = 'numeric' returnKeyType='done' onChangeText={setPrice}>$</TextInput>
            <TouchableOpacity style={styles.doneButton} onPress={addStar}>
              <Text style={styles.doneButtonText}>Add Star</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.doneButton} onPress={closePopup}>
              <Text style={styles.doneButtonText}>Done</Text>
            </TouchableOpacity>
            </View>
          }
        </Modal>
      </ScreenContainer>
    );
  }
  export const AlertScreen = ({ navigation }) => (
      <ScreenContainer>
        <ImageBackground
        source={require("./assets/images/PSBackground.jpg")}
        style={styles.headerBackground}
      />
        <Text style={styles.alertText}>Alert Screen | THIS AREA IS UNDER CONSTRUCTION</Text>
        <Button
          title="Go back home"
          onPress={() =>
            navigation.navigate("Home", {
              screen: "Details",
              params: {name: "Details rat mode"}
            })
          }
        />
      </ScreenContainer>
    );



  export const Details = ({route}) => (
      <ScreenContainer>
        <Text>Details Screen</Text>
      </ScreenContainer>
    );

  export const Plus = ({route}) => {
    const {item} = route.params;
    const [rowOne, setRowOne] = useState([]);
    const [cib, setCIB] = useState(null);
    const [disk, setdisk] = useState([]);
    const [boxdisk, setBoxDisk] = useState([]);
    let found = false;

    useEffect(() => {
      const fetchListings = async (search1) => {
        try {
          const listings1 = await searchListings(search1);

          const one = listings1.map((listing) => listing);
          setRowOne(one);
          var lowest = 1000000000;
          var cibListing = null; // Initialize the variable to store the listing with the lowest price
          
          for (let i = 0; i < listings1.length; i++) {
            const currentPrice = parseInt(listings1[i].sellingStatus[0].convertedCurrentPrice[0].__value__);
            if (currentPrice < lowest) {
              lowest = currentPrice;
              cibListing = listings1[i]; // Store the listing with the new lowest price
            } else {
              console.log("passed", lowest, "is lower than current: ", currentPrice);
            }
          }
          setCIB(cibListing); // Update CIB with the listing that has the lowest price
          found = true;

        } catch (error) {
          console.error(error);
          setRowOne(null);
        }
      };
      fetchListings(item.title + " " + item.consoleName);
    }, []);
    useEffect(() => {
      // This will log the updated value of cib when it changes.
      if (cib && cib.sellingStatus && cib.sellingStatus[0].convertedCurrentPrice) {
        console.log("CIB:", cib.sellingStatus[0].convertedCurrentPrice[0].__value__, cib.title);
      }
    }, [cib]);

   return (
      <ScreenContainer>
        <ImageBackground
        source={require("./assets/images/PSBackground.jpg")}
        style={styles.headerBackground}
        />
      <View style={styles.listingsContainer}>
        <ScrollView contentContainerStyle={styles.starContainer}>
          {rowOne.map((rowOne, index) => (
            <Listing
              key={index}
              onPress={() => console.log("star pressed")} //navigation.push("Plus", {item}) }//
              image={rowOne.galleryURL[0]}
              title={rowOne.title[0]}
              price={ "$" + rowOne.sellingStatus[0].convertedCurrentPrice[0].__value__}
            />
          ))}
          </ScrollView>
        </View>
        <View style={styles.focusedBox}>
          <TouchableOpacity style={styles.boxedBox}>
          {cib ? (
            <Image
              source={{ uri: cib.galleryURL[0] }}
              style={ styles.focusedImage }
            />
            
          ) : (
            <Text>Loading...</Text>
          )}
          <Text style={styles.focusTextHeader}>Best CIB listing</Text>

          {cib ? (
            <Text style={ styles.focusText }>${cib.sellingStatus[0].convertedCurrentPrice[0].__value__}</Text>
            
          ) : (
            <Text>Loading...</Text>
          )}

          </TouchableOpacity>
        </View>
      </ScreenContainer>
      );
  };

  /*/
  <Button
        style={styles.title}
        title="Details Screen"
        onPress={() => navigation.push("Details", { name: "Details rat mode" })}
      />
      /*/


/// CUT CONTENT: FIND THE BEST DISK AND BOX LISTINGS
/*/

          </TouchableOpacity>
          <TouchableOpacity style={styles.boxedBox}>
            <Image source={{ }} style={styles.focusedImage}></Image>
            <Text style={styles.focusTextHeader}>Disk Only</Text>
            <Text style={styles.focusText}>$$$</Text>

          </TouchableOpacity>
          <TouchableOpacity style={styles.boxedBox}>
            <Image source={{}} style={styles.focusedImage}></Image>
            <Text style={styles.focusTextHeader}>Box + Disk</Text>
            <Text style={styles.focusText}>N/A</Text>
            /*/


// PUT THIS INSIDE THE TOUCHABLE OPACTIY IN FOCUSED BOX: This causes a undefined error still.
/*/
          {cib ? (
            <Image
              source={{ uri: cib.galleryURL[0] }}
              style={ styles.focusedImage }
            />
            
          ) : (
            <Text>Loading...</Text>
          )}
          <Text style={styles.focusTextHeader}>Best CIB listing</Text>

          {cib ? (
            <Text style={ styles.focusText }>${cib.sellingStatus[0].convertedCurrentPrice[0].__value__}</Text>
            
          ) : (
            <Text>Loading...</Text>
          )}
            
          /*/