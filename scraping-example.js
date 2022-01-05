// https://stackabuse.com/the-node-js-request-module/

const request = require('request');

API_url = 'https://secure.lni.wa.gov/verify/Controller.aspx/Search'

InitialUrl = 'https://secure.lni.wa.gov/verify/SessionHandler.aspx'

hash = {'hash':'https://secure.lni.wa.gov/verify/Results.aspx#%7B%22firstSearch%22%3A1%2C%22searchCat%22%3A%22Name%22%2C%22searchText%22%3A%22phan%22%2C%22Name%22%3A%22phan%22%2C%22pageNumber%22%3A0%2C%22SearchType%22%3A2%2C%22SortColumn%22%3A%22Rank%22%2C%22SortOrder%22%3A%22desc%22%2C%22pageSize%22%3A10%2C%22ContractorTypeFilter%22%3A%5B%5D%2C%22SessionID%22%3A%22jayg1j54af33mxrigssrrfc0%22%2C%22SAW%22%3A%22%22%7D'};

data = {"dtoSrch":{"firstSearch":1,"searchCat":"Name","searchText":"phan","Name":"phan","pageNumber":0,"SearchType":2,"SortColumn":"Rank","SortOrder":"desc","pageSize":10,"ContractorTypeFilter":[],"SessionID":"jayg1j54af33mxrigssrrfc0","SAW":""}}

const options = {
  url: InitialUrl,
  method: 'POST',
  headers: {
    "Accept": "*/*",
    "Origin": "https://secure.lni.wa.gov",
    "X-Requested-With": "XMLHttpRequest",
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/69.0.3497.92 Safari/537.36",
    "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
    "Referer": "https://secure.lni.wa.gov/verify/Results.aspx",
    "Accept-Encoding": "gzip, deflate, br",
    "Connection": "keep-alive",
    "Host": "secure.lni.wa.gov",
  },
  form: {hash:'https://secure.lni.wa.gov/verify/Results.aspx#%7B%22firstSearch%22%3A1%2C%22searchCat%22%3A%22Name%22%2C%22searchText%22%3A%22phan%22%2C%22Name%22%3A%22phan%22%2C%22pageNumber%22%3A0%2C%22SearchType%22%3A2%2C%22SortColumn%22%3A%22Rank%22%2C%22SortOrder%22%3A%22desc%22%2C%22pageSize%22%3A10%2C%22ContractorTypeFilter%22%3A%5B%5D%2C%22SessionID%22%3A%22jayg1j54af33mxrigssrrfc0%22%2C%22SAW%22%3A%22%22%7D'}
};


const option2 = {
  url: API_url,
  method: 'POST',
  headers: {
    "Accept": "application/json, text/javascript, */*; q=0.01",
    'Connection': 'keep-alive',
        "Origin": "https://secure.lni.wa.gov",
        "X-Requested-With": "XMLHttpRequest",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/69.0.3497.92 Safari/537.36",
        "Content-Type": "application/json; charset=UTF-8",
        "Referer": "https://secure.lni.wa.gov/verify/Results.aspx",
        "Accept-Encoding": "gzip, deflate, br"
  },
  data: JSON.stringify(data),
};

request.post(options, function(error, response, body) {
  console.log(response.headers);
  request.post(option2, function(error, response, body){
      console.log(body);
  });
});