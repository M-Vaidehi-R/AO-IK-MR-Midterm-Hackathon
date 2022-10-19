( () => {

    console.log("Midterm hackathon");

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
})();