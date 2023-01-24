function GetrandomColorList(numberOfColors) {
    var ColorArray = new Array();
        for (var i = 0 ; i < numberOfColors ; i++) {
            let colorHextString = "#";
            for (var j = 0 ; j < 3 ; j++){
               colorHextString+= ""+parseInt(Math.random() * 256).toString(16);
            }
             ColorArray.push(colorHextString)
            }
        console.log(ColorArray);
    }
GetrandomColorList();
