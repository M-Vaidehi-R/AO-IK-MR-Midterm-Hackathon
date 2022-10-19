( () => {

    console.log("Midterm hackathon");
    let BMenu = document.querySelector(".burger"),
    nav= document.querySelector(".nav-links"),
    MenuOpen = false,
    Product_Picture = document.querySelector(".picture");

    let thermostat_data= {};


    function getdata() {

        console.log("Hey! this is our database for our product");

        fetch(`./data.json`)
        .then(res => res.json())
        .then(data => {
            thermostat_data = data;
            console.table(thermostat_data);
            console.log(thermostat_data["colours"]);
            console.log("json object converted to regular js object");
            DispImg(thermostat_data.Thermostat.images);
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
   
    function DispImg(images) {

        images.forEach(img => {
            let newImg = document.createElement("img");
            newImg.src = `images/${img}`;
            console.log(newImg.src);
            Product_Picture.appendChild(newImg);

        })
    }

    getdata();
    
})();