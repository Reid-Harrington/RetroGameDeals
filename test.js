const { searchListings } = require("./ebayAPI");

class Listing
{
    constructor(title)
    {
        this.title = title
    }
}

const testFunction = async (search) => {
  try {
    const listings = await searchListings(search);
    //console.log(listings[0].title)

    return(listings)
  } catch (error) {
    console.error(error);
    return(null);
  }
};

testFunction("Gameboy Advanced SP")
.then(listings => {
// Handle the returned listings or title
    for(let i=0; i < listings.length; i++)
    {
        console.log(listings[i].title);
    }
})
.catch(error => {
// Handle any errors that occur during the function execution
console.error(error);
});









/*/
const fetchListings = async () => {
    try {
      const listings = await testFunction("Gameboy Advanced SP");
      //console.log(listings[0].title);
      listOfListings = []
      for (let i = 0; i < listings.length; i++)
      {
        firstTitle = listings[i].title;
        listing = new Listing(firstTitle);
       // console.log(firstTitle)
        listOfListings.push(listing);
        //console.log(listOfListings[i]);
      }
      return(listOfListings)
    } catch (error) {
      console.error(error);
    }
  };
/*/