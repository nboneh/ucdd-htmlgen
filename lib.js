var debug = require('debug')('lib')
var lib = {}

lib.generateHeading1 = function(text) {
    return "<h1>" + text + "</h1>"
}

lib.generateHeading = function(level, text) {
    return "<h" + level + ">" + text + "<h" + level + ">"
}

lib.generateOrderedList = function(arrayOfText) {
    var html = "<ol>";
    for(index in arrayOfText){
        html += "<li>" + arrayOfText[index]  + "</li>"
    }
    html += "</ol>"
    return html;
}

lib.generateUnorderedList = function(arrayOfText) {
    var html = "<ul>";
    var x;
    for(x in arrayOfText){
        html += "<li>" + arrayOfText[x] + "</li>";
    }
    html += "</ul>";
    return html;
}

lib.generateTableRow = function (arrayOfText) {
    var text = "<tr>";
    var arrayLength = arrayOfText.length;
    
    for(var i = 0; i < arrayLength; i++){
		text += "<td>" + arrayOfText[i] + "</td>";
	}
    text += "</tr>"
    
    return text;
}

lib.generateTable = function(twoDimensionalArrayOfText) {
    var html = "<table>"
    var length = twoDimensionalArrayOfText.length;
    for(var i = 1; i < length; i++){
        html += lib.generateTableRow(twoDimensionalArrayOfText[i]);
    }
    html += "</table>"
    return html
}

lib.generateHyperLink = function(url, text) {
    return "<a href=\"" + url + "\">" + text + "</a>"
}

lib.generateFormTextField = function(name) {
    return "<input type=\"text\" name=\"" + name + "\">";
}

lib.generateFormTextFieldWithLabel = function(name, label) {
    return "<label>" + label + "</label> <input type=\"text\" name=\"" + name + "\">";
}
lib.generateDropdownList = function(arrayOfValues, arrayOfText) {
    var html = "<select>";
    for(x in arrayOfValues){
        html += "<option value=\"" + arrayOfValues[x] + "\">" + arrayOfText[x] + "</option>";
    }
    html += "</select>";
    return html;
}
// --> <iframe width="560" height="315" src="//www.youtube.com/embed/9bZkp7q19f0" allowfullscreen></iframe>

lib.generateYoutubeVideoEmbeddableFrame = function(width, height, videoId, allowfullscreen) {
    var html = "<iframe width=\"" + width+"\" height=\"" + height +"\" src=\"//www.youtube.com/embed/" + videoId +"\"";
    if(allowfullscreen)
        html += " allowfullscreen";
    html += "></iframe>";
    return html;
}

module.exports = lib
