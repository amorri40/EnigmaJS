missing_functions=[];//TGMG
getMissingFunctions=function() {
	var blank_functions_string="";
	for (func in missing_functions) 
	{
		if (func.indexOf("script___") == -1) {
		blank_functions_string+="\n enigma.global."+func+"=function(){}\n";
		}
	}
	return blank_functions_string;
}; //TGMG
writeEnigmaJSOutputFile=function() {
	var outputfile=""
	for (func in missing_functions) 
	{
		if (func.indexOf("script___") == -1)
		outputfile+=func+"\n";
	}
	return outputfile;
};

getNumberOfMissingFunctions=function() {
	if (missing_functions.length===0) return "None";
	return missing_functions.length;
};