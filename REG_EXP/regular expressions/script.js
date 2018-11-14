var fileData, i, x = '';
descending = true;


fileData = {
    files: [{
        "file": "somearchive.7z",
        "size": "500",
        "time": "December 17, 2011 03:24:00"
    }, {
        "file": "photos.zip",
        "size": "80",
        "time": "November 18, 2011 03:24:00"
    }, {
        "file": "wedding.zip",
        "size": "60",
        "time": "December 17, 2011 03:26:00"
    }, {
        "file": "workfiles.zip",
        "size": "360",
        "time": "March 19, 2016 03:24:00"
    }, {
        "file": "презентация.pptx",
        "size": "360",
        "time": "March 20, 2016 03:24:00"
    }, ]
}


            
function sortFiles(x) {

    document.getElementById("filetable").innerHTML = '<tr>						<th  onclick="sortFiles(\'name\')"  title="Sort by file name" class="sorting">File</th>						<th onclick="sortFiles(\'size\')" title="Sort by file size" class="sorting">Size (kb)</th><th onclick="sortFiles(\'time\')" title="Sort by time of upload" class="sorting">Date-time</th><th>Delete</th>  </tr> ';
    descending = !descending;


    var swapped;


    do {
        swapped = false;
        for (var i = 0; i < fileData.files.length - 1; i++) {


            if ((x == "name" && descending == true && fileData.files[i].file > fileData.files[i + 1].file) || (x == "name" && descending == false && fileData.files[i].file < fileData.files[i + 1].file) || (x == "size" && descending == true && Number(fileData.files[i].size) > Number(fileData.files[i + 1].size)) || (x == "size" && descending == false && Number(fileData.files[i].size) < Number(fileData.files[i + 1].size)) || (x == "time" && descending == true && new Date(fileData.files[i].time) > new Date(fileData.files[i + 1].time)) || (x == "time" && descending == false && new Date(fileData.files[i].time) < new Date(fileData.files[i + 1].time))) {
                var temp = fileData.files[i];
                fileData.files[i] = fileData.files[i + 1];
                fileData.files[i + 1] = temp;
                swapped = true;
            }
        }

    } while (swapped);



    for (i in fileData.files) {
      
        document.getElementById("filetable").innerHTML += '<tr><td class="filename"><u>' + fileData.files[i].file + '</u></td><td>' + fileData.files[i].size + '</td><td>' + fileData.files[i].time + '</td><td class="delete"><u>DELETE</u></td></tr>';
    }
}



function fill() {
    for (i in fileData.files) {
      
        document.getElementById("filetable").innerHTML += '<tr><td class="filename"><u>' + fileData.files[i].file + '</u></td><td>' + fileData.files[i].size + '</td><td>' + fileData.files[i].time + '</td><td class="delete"><u>DELETE</u></td></tr>';
    }

}