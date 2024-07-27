function doPost(e){
  
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = JSON.parse(e.postData.contents);
    sheet.appendRow([data.image, data.title, data.description, data.price, data.location]);
    return ContentService.createTextOutput(JSON.stringify({ "result": "success" })).setMimeType(ContentService.MimeType.JSON);
  
  }

  function doGet(e) {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = sheet.getDataRange().getValues();
    var jsonData = [];
    
    for (var i = 1; i < data.length; i++) {
      var row = data[i];
      jsonData.push({
        image: row[0],
        title: row[1],
        description: row[2],
        price: row[3],
        location: row[4]
      });
    }
    
    return ContentService.createTextOutput(JSON.stringify(jsonData)).setMimeType(ContentService.MimeType.JSON);
  }
  