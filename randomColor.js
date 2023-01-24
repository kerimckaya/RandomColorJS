function GetrandomColorList(numberOfColors=7) {
    var ColorArray = new Array(); // create new string array 
        for (var i = 0 ; i < numberOfColors ; i++) { // A repeating loop was created as many as the desired number of colors
            let colorHextString = "#";
            for (var j = 0 ; j < 3 ; j++){ //3 different numbers are derived because the hex colors consist of 3 different hex numbers
               colorHextString+= ""+parseInt(Math.random() * 256).toString(16); // The generated random number was converted to hex codes and added to the string
            }
             ColorArray.push(colorHextString) // produced color added to list
            }
        console.log(ColorArray);
        return ColorArray;
    }
GetrandomColorList();
