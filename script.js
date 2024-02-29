//your JS code here. If required.
const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];
const ul=document.getElementById("bands");
(bands.sort((a,b)=>{
	let arr1=a.split(" "); 
	let arr2=b.split(" "); 
	let word1=arr1[0];
	if (arr1[0]=="A" ||arr1[0]=="An" || arr1[0]=="The") {
		word1=arr1[1];
	}	
	let word2=arr2[0];
	if (arr2[0]=="A" ||arr2[0]=="An" || arr2[0]=="The") {
		word2=arr2[1];
	}
	console.log(word1,word2);
	return word1>word2?1:-1;   
})).forEach((article)=>{
	const li=document.createElement("li");
	li.innerText=article;
	ul.appendChild(li)
})