let cards = document.querySelectorAll(".card")
let myh3 = document.querySelectorAll(".card p")
cards= Array.from(cards)
myh3= Array.from(myh3)
let info = document.querySelectorAll("span")
let valide=[]
let prix=[]
for(let i=0;i<=info.length-1;i++){
    prix[i]=Number(info[i].textContent)
}
let total=0

cards.forEach((card)=>{

    
    card.addEventListener("click",()=>{
        if(!(card.classList.contains("add"))){
        total+=prix[cards.indexOf(card)]
        const total2=document.getElementById("total2")
        total2.textContent=total+" dh"
        card.classList.add("add")
        valide.push(myh3[cards.indexOf(card)].textContent)
        }
        else{
            total-=prix[cards.indexOf(card)]
            const total2=document.getElementById("total2")
            total2.textContent=total+" dh"
            card.classList.remove("add")
            const newValide= valide.filter((it)=>it !==myh3[cards.indexOf(card)].textContent)
            valide=newValide
            
        }
        console.log(valide)
    })
})
const myh2=document.createElement("h2")
document.body.append(myh2)
function drw(){
    if(!total){
        window.alert("vous n'avez pas choisit un objet")
    }
    
    else document.body.innerHTML=` <div id="form">
    <form><label for="nom">👤nom et prenom</label><br><input id="nom" required  type="text"><br>
    <label for="email">📧email: </label><br><input id="email" type="email" required><br>
    <label for="tel">☎️numero de tele</label><br><input pattern="[0-9]{10}" placeholder="06xxxxxxxx" id="tel"  required type="tel"><br>
    <label for="ville">🏡ville</label><select required name="" id="ville"><option value="0" selected disabled>ville</option><option id="rabat" value="10">rabat (+10 dh)</option><option id="kenitra" value="25">kenitra (+25 dh)</option><option value="180">autre(+180 dh)</option></select><br>
    <label for="taille">taille</label><select required name="" id="taille"><option value="0" selected disabled>taille</option><option id="rabat" value="xs">xs</option><option id="s" value="s">s</option><option value="m">m</option><option value="L">L</option><option value="XL">XL</option><option value="XXL">XXL</option></select><br>
    <input type="reset"><br></form><button onclick="test()">confirmer</button></div>`
}
let nom 
let email 
let tel 
let ville
let taille
let nomVille=''
let myInput
nomVille
function test(){
    taille= document.getElementById("taille").value
    nom = document.getElementById("nom").value
    email = document.getElementById("email").value
    tel = document.getElementById("tel").value
    ville = document.getElementById("ville").value
    const form=document.querySelector("form")
    if(!nom){
        window.alert("entrez votre nom")
    }
    else if(!email){
        window.alert("entrez votre email")
    }
    else if(!email.includes("@")){
        window.alert("votre email doit contenir '@'")
    }
    else if(!tel){
        window.alert("entrez vos tele")
    }
     else if(tel.length<10){
        window.alert("votre nombre doit etre en miniment 10 chifres")
    }

    
    else if(nomVille==''){
            if(ville==10){
        nomVille='rabat'
        
    }
    else if(ville==25){
        nomVille='kenitra'
    }
    else if(ville==180){ 
       document.body.innerHTML= `<h2>autre ville</h2>
    <input type="text" name="" id="nomVille">
    <button onclick="conf()">confirmer la ville</button>`
        
    }else if(ville==0){
        document.body.innerHTML=`<h2>vous avez oublie la ville</h2>
    <button onclick="drw()">retoure</button>`
    }
    
    }else if(nom && email && tel && ville !=0 && ville!=180){document.body.innerHTML=`<h2>voulez vous envoyer vos info?</h2>
    <button onclick="envoyer()">envoyer</button><button onclick="drw()">retoure</button>`
    }if(taille==0){
        document.body.innerHTML=`<h2>vous avez oublie la taille</h2>
    <button onclick="drw()">retoure</button>`
    }

    
}

function envoyer(){
    tpl={
        gmail:email,
        email:email,
        nom:nom,
        namm:nom,
        tel:tel,
        total:eval( `${total}+${ville}`),
        ville:nomVille,
        pruduit:valide.join("  //  "),
        taille:taille
    }
    emailjs.send('service_gr3pr7x', 'template_z8vhb3r', tpl).then(
  (response) => {
    console.log('SUCCESS!', response.status, response.text);
  },
  (error) => {
    console.log('FAILED...', error);
  },
);
    document.body.innerHTML=`<h1>Merci d'avoir fait vos achats chez nous.</h1>
    <a href="contact.html">contactrz nous</a>
    `
}

function conf(){
     nomVille=document.getElementById("nomVille").value
    if(!nomVille){
        window.alert("entrez votre ville")
    }
    
    else{ document.body.innerHTML=`<h2>envoyez vous vos info?</h2>
    <button onclick="envoyer()">envoyer</button><button onclick="drw()">retoure</button>`
}

}