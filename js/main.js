( () => {

    console.log("Midterm hackathon");
    let BMenu = document.querySelector(".burger"),
    nav= document.querySelector(".nav-links"),
    MenuOpen = false,
    Product_Picture = document.querySelector(".picture"),
    Prod_Color = document.querySelector(".Prod-colour"),
    Prod_price=document.querySelector(".Prod_Price"),
    Prod_Tag = document.querySelector(".Prod_Tag"),
    Prod_Info = document.querySelector(".Prod-Info"),
    Product_Panel = document.querySelector(".product-panel"),
    buttons= document.querySelectorAll(".nav-buttons"),
    View_Button= document.querySelector(".View_Prod_button"),
    Close_button = document.querySelector(".close");
    let thermostat_data= {};

    function getdata() {

        console.log("Hey! this is our database for our product");

        fetch(`./data.json`)
        .then(res => res.json())
        .then(data => {
            thermostat_data = data;
            console.table(thermostat_data);
            DispImg(thermostat_data.Thermostat.images);
            buttons.forEach(button => button.addEventListener("click",DispInfo(thermostat_data.Thermostat.name, thermostat_data.Thermostat.colours,thermostat_data.Thermostat.price,thermostat_data.Thermostat.tagline)));
        })

        .catch(error => console.log("error is",error));
       
        //console.log("error handling working");
    }


    //Hamburger Menu
    BMenu.addEventListener("click", ()=> {
        if(!MenuOpen){
        nav.classList.add("nav-active");
        MenuOpen=true;
        }
        else{
            nav.classList.remove("nav-active");
            MenuOpen=false;
        }
    })

    //HamburgerMenu End
   
    //Displaying Images On the Page
    function DispImg(images) {

        images.forEach(img => {
            let newImg = document.createElement("img");
            newImg.src = `images/${img}`;
            Product_Picture.appendChild(newImg);

        })
    }
    //End Displaying Images

    //Displaying Name

    function DispInfo(Prod_Name, Colors, Price, TagLine ) {

        /*let key= this.dataset.key;
        console.log(key);*/
        Colors.forEach(color => {
            Prod_Color.textContent=Colors[0];
           // console.log(color);
            }
            )
       document.querySelector(".Prod-Name").textContent = Prod_Name; 
       Prod_price.textContent = Price[1];
       Prod_Tag.textContent = TagLine;
       
    }
    function DispInfostyle(){
        Prod_Info.style.display = "block";
        Close_button.style.display="block";
    }

    function DispProd(){
        Product_Panel.style.display= "block";
    }
    function Close(){
        Prod_Info.style.display="none";
    }

    View_Button.addEventListener("click", DispProd);
    buttons.forEach(button => button.addEventListener("click", DispInfostyle));
    Close_button.addEventListener("click", Close);

    getdata();
    
})();