function doGet(e) {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = sheet.getDataRange().getValues();
    
    var jsonArray = [];
    for (var i = 1; i < data.length; i++) {
      var rowObject = {};
      rowObject["image"] = data[i][0];
      rowObject["title"] = data[i][1];
      rowObject["description"] = data[i][2];
      rowObject["price"] = data[i][3];
      rowObject["location"] = data[i][4];
      jsonArray.push(rowObject);
    }
    
    return ContentService.createTextOutput(JSON.stringify(jsonArray)).setMimeType(ContentService.MimeType.JSON);
  }
  
  function doPost(e) {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = JSON.parse(e.postData.contents);
    sheet.appendRow([data.image, data.title, data.description, data.price, data.location]);
    return ContentService.createTextOutput(JSON.stringify({ "result": "success" })).setMimeType(ContentService.MimeType.JSON);
  }
  