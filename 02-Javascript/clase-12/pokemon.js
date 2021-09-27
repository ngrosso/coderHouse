class Pokemon {

    constructor(id,name,image){


        this.id = id;
        this.name = name;
        this.image = image;

    }

    //Devuelve el nombre y el id concatenados
    getTitle () {

        return this.name +  " #"+this.id ;

    }


}


