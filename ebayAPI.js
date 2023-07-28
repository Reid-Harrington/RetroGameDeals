import axios from "axios";

  const searchListings = async (query) => {
    try {
      const appID = 'ReidHarr-RetroGam-PRD-121a09b8a-e0e89dee'; // Replace 'YourAppID' with your actual eBay API App ID

      const response = await axios.get(
        `https://svcs.ebay.com/services/search/FindingService/v1`,
        {
          params: {
            'OPERATION-NAME': 'findItemsByKeywords',
            'X-EBAY-C-MARKETPLACE-ID': "EBAY_CA",
            'SECURITY-APPNAME': appID,
            'RESPONSE-DATA-FORMAT': 'JSON',
            keywords: query,
            'paginationInput.entriesPerPage': 10,
          },
        }
      );
      const searchResult = response.data.findItemsByKeywordsResponse[0].searchResult[0];
      if (searchResult.hasOwnProperty('item')) {
        // Handle the item listings here
        const items = searchResult.item;
        //console.log(items);
        return items;
      } else {
        // No items found
        console.log('No items found.');
        return [];
      }
    } catch (error) {
      // Handle errors here
      console.error(error);
    }
  };

  module.exports = {
    searchListings,
  };