hash = {'hash':'https://secure.lni.wa.gov/verify/Results.aspx#%7B%22firstSearch%22%3A1%2C%22searchCat%22%3A%22Name%22%2C%22searchText%22%3A%22phan%22%2C%22Name%22%3A%22phan%22%2C%22pageNumber%22%3A0%2C%22SearchType%22%3A2%2C%22SortColumn%22%3A%22Rank%22%2C%22SortOrder%22%3A%22desc%22%2C%22pageSize%22%3A10%2C%22ContractorTypeFilter%22%3A%5B%5D%2C%22SessionID%22%3A%22jayg1j54af33mxrigssrrfc0%22%2C%22SAW%22%3A%22%22%7D'};

function setSessionURL(hashValue) {
  //Sets the session URL for lower level pages to return to the search results
  $.ajax({
      url: "https://secure.lni.wa.gov/verify/SessionHandler.aspx",
      type: "POST",
      data: {
        'hash':'https://secure.lni.wa.gov/verify/Results.aspx#%7B%22firstSearch%22%3A1%2C%22searchCat%22%3A%22Name%22%2C%22searchText%22%3A%22phan%22%2C%22Name%22%3A%22phan%22%2C%22pageNumber%22%3A0%2C%22SearchType%22%3A2%2C%22SortColumn%22%3A%22Rank%22%2C%22SortOrder%22%3A%22desc%22%2C%22pageSize%22%3A10%2C%22ContractorTypeFilter%22%3A%5B%5D%2C%22SessionID%22%3A%22jayg1j54af33mxrigssrrfc0%22%2C%22SAW%22%3A%22%22%7D'
      },
      error: function() {
      },
      success: function(data) {
      }
  });
} //end of function

function dosearch() {
  console.log('call do search')
  //first update the hash
  localhash = escape(JSON.stringify(searchDto));
  setSessionURL(localhash);
  
  var dto = { "dtoSrch": searchDto };

  //result
  $.ajax({
      type: "POST",
      url: "https://secure.lni.wa.gov/verify/Controller.aspx/Search",
      data: JSON.stringify(dto),
      contentType: "application/json; charset=utf-8",
      dataType: "json",
      error: function (data) {
          console.log(data);
          return;
      },
      success: function (data) {
          if (data.d.SearchResult.length > 0) {
            console.log(data);
          }
        }
      });
    }

  setSessionURL(hash);

  //reset all values as they're all relevant to the search box
  searchDto = {};
  searchDto.firstSearch = 1;
  searchDto.searchCat = 'Name';
  searchDto.searchText = 'phan';
  searchDto.Name = 'phan';
  searchDto.pageNumber = 0;
  searchDto.SearchType = 2;
  searchDto.SortColumn = "Rank";
  searchDto.SortOrder = "desc";
  searchDto.pageSize = 10;
  searchDto.ContractorTypeFilter = [];
  searchDto.SessionID = 'jayg1j54af33mxrigssrrfc0';
  searchDto.SAW = '';
  dosearch();