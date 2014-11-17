function createNewBook(e){
    var bookName = Document.getElementById("bookName").value;
    var authorName = Document.getElementById("authorName").value;
    var score = Document.getElementById("score").value;
    var book = new Book(bookName, authorName, score);

    
    var a = document.createElement("li");
    var b = document.createElement("span").innerHTML = bookName;
    var c = document.createElement("span").innerHTML = authorName;
    var d = document.createElement("span").innerHTML = score;


    document.getElementById("bList").appendChild(a).appendChild(b).appendChild(c).appendChild(d);
}    
    
    
/* el.innerHTML = "Some title";
document.body.appendChild(el);

var el2 =  document.createElement("span")
el2.style.display="block";
el2.style.width="100%";
el2.innerHTML = "Some arb text";
document.body.appendChild(el2);


  */  




function restAll(e){
    Document.getElementById("bookName").value = "";
    Document.getElementById("authorName").value = "";
    Document.getElementById("score").value = "";
}
   
function Book (bookName, authorName, score) {
	this.bookName = bookName;
	this.authorName = authorName;
	this.score = score;
};















