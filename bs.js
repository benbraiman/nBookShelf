 
function crateNewBook(e){
    var bookName = Document.getElementById("bookName").value;
    var bookName = Document.getElementById("authorName").value;
    var bookName = Document.getElementById("score").value;
    var book = new Book(bookName, authorName, score);

    
    var a = document.createElement("li");
    var b = document.createElement("span");
    var c = document.getElementById("bookName").value;

    document.ul.appendChild(a).appendChild(b).getElementById("bookName").innerHTML;// appanding the span and the value?
    
/* el.innerHTML = "Some title";
document.body.appendChild(el);

var el2 =  document.createElement("span")
el2.style.display="block";
el2.style.width="100%";
el2.innerHTML = "Some arb text";
document.body.appendChild(el2);


  */  

}


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















