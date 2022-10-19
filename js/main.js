( () => {

    console.log("Midterm hackathon");
    let BMenu = document.querySelector(".burger"),
    nav= document.querySelector(".nav-links"),
    MenuOpen = false;

    let thermostat_data= {};


    function getdata() {

        console.log("Hey! this is our database for our product");

        fetch(`./data.json`)
        .then(res => res.json())
        .then(data => {
            thermostat_data = data;
            console.table(thermostat_data);
            console.log("json object converted to regular js object");
        })

        .catch(error => console.log(error));
        console.log("error handling working");
    }
    getdata();

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
    
})();