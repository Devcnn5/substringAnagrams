
//to search the window in sample text and compare it to the pattern window
function search(pattern, sample)
{
    var M = pattern.length, N = sample.length;
 
    // countP[]:  Store count of all characters of pattern
    // countS[]: Store count of current window of Sample Text
    var countP = new Array(pattern.length);
  var countS = new Array(sample.length);
   

    for (var i = 0; i < pattern.length; i++)
    {
       
        (countP[pattern[i]])=0;
    }
for (i = 0; i < pattern.length; i++)
    {
       
        (countP[pattern[i]])++;
    }
console.log("countP initial: ",countP);

    for (var j = 0; j < sample.length; j++)
    {
       
        (countS[sample[j]])=0;
    }
for ( j = 0; j < pattern.length; j++)
    {
       
        (countS[sample[j]])++;
    }
 console.log("countS initial: ",countS);

    // Traverse through remaining characters of pattern
    for (j = M; j < N; j++)
    {
        // Compare counts of current window of text with
        // counts of pattern[]
        if (compare(countP,pattern, countS,sample)){
			console.log("countP:",countP);
			console.log("countS:",countS);
            console.log("Found at Index ", (j - M));
			return true;
        }
 
        // Add current character to current window
        (countS[sample[j]])++;
 
        // Remove the first character of previous window
        countS[sample[j-M]]--;

	console.log("window: ",countS);
    }
 
    // Check for the last window in text
    if (compare(countP,pattern,countS,sample)){
        console.log("Found at Index ", (N - M));
		return true;
		}
	else{
		return false;
	}
	
}

//to actually compare each index of pattern window and sample text window
function compare(countP,pattern,countS,sample)
{
    for (var i=0; i<pattern.length; i++){
console.log(countS[sample[i]]);
        if ((countS[sample[i]])!=countP[pattern[i]])
            return false;
    }
    return true;
    
}

//driving function  
function foundOrNot(pattern,sample){
pattern=pattern.toLowerCase();
sample=sample.toLowerCase();
return search(pattern,sample);
}

var sample = "Google";
    var pattern = "Gog";
    foundOrNot(pattern, sample);