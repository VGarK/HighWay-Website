
// Flexible Image Slideshow- By JavaScriptKit.com (http://www.javascriptkit.com)
// For this and over 400+ free scripts, visit JavaScript Kit- http://www.javascriptkit.com/
// This notice must stay intact for use

var ultimateshow=new Array()

//ultimateshow[x]=["path to image", "OPTIONAL link for image", "OPTIONAL link target"]

ultimateshow[0]=['Styles/Resources/Images/family.png', '', '']
ultimateshow[1]=['Styles/Resources/Images/star.png', '', '']

//configure the below 3 variables to set the dimension/background color of the slideshow

var slidewidth="128px" //set to width of LARGEST image in your slideshow
var slideheight="128px" //set to height of LARGEST iamge in your slideshow
var slidecycles="continous" //number of cycles before slideshow stops (ie: "2" or "continous")
var randomorder="no" //randomize the order in which images are displayed? "yes" or "no"
var preloadimages="yes" //preload images? "yes" or "no"
var slidebgcolor='none'

//configure the below variable to determine the delay between image rotations (in miliseconds)
var slidedelay=3000

////Do not edit pass this line////////////////

var ie=document.all
var dom=document.getElementById
var curcycle=0

if (preloadimages=="yes"){
for (i=0;i<ultimateshow.length;i++){
var cacheimage=new Image()
cacheimage.src=ultimateshow[i][0]
}
}

var currentslide=0

function randomize(targetarray){
ultimateshowCopy=new Array()
var the_one
var z=0
while (z<targetarray.length){
the_one=Math.floor(Math.random()*targetarray.length)
if (targetarray[the_one]!="_selected!"){
ultimateshowCopy[z]=targetarray[the_one]
targetarray[the_one]="_selected!"
z++
}
}
}

if (randomorder=="yes")
randomize(ultimateshow)
else
ultimateshowCopy=ultimateshow

function rotateimages(){
curcycle=(currentslide==0)? curcycle+1 : curcycle
ultcontainer='<center>'
if (ultimateshowCopy[currentslide][1]!="")
ultcontainer+='<a href="'+ultimateshowCopy[currentslide][1]+'" target="'+ultimateshowCopy[currentslide][2]+'">'
ultcontainer+='<img src="'+ultimateshowCopy[currentslide][0]+'" border="0">'
if (ultimateshowCopy[currentslide][1]!="")
ultcontainer+='</a>'
ultcontainer+='</center>'
if (ie||dom)
crossrotateobj.innerHTML=ultcontainer
if (currentslide==ultimateshow.length-1) currentslide=0
else currentslide++
if (curcycle==parseInt(slidecycles) && currentslide==0)
return
setTimeout("rotateimages()",slidedelay)
}

if (ie||dom)
document.write('<div id="slidedom" style="width:'+slidewidth+';height:'+slideheight+'; background-color:'+slidebgcolor+'"></div>')

function start_slider(){
crossrotateobj=dom? document.getElementById("slidedom") : document.all.slidedom
rotateimages()
}

if (ie||dom)
window.onload=start_slider
