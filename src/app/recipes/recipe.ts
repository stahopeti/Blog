export class Recipe{
    private _name:string;
    private _ingredients:string[];
    private _description:string;
    private _imgpath:string;

    constructor(name:string, ingredients:string[], description:string, imgpath:string){
        /*this._name = name;
        this._ingredients = ingredients;
        this._description = description;
        this._imgpath = imgpath;
    */
        this._name = "name";
        this._ingredients = ["ingredient1", "ingredient2"];
        this._description = "2description";
        this._imgpath = "2imgpath";

        console.log("Object created: " + this.toString());
}

    getName(): string{
        return this._name;
    }

    getIngredients(): string[]{
        return this._ingredients;
    }

    getDescription(): string{
        return this._description;
    }

    getImagePath(): string{
        return this._imgpath;
    }

    getRecipe(){
        return JSON.stringify(this);
    }

    toString(){
        let temp: string = name;
        for(let i in this._ingredients){
            temp += ", " + i;
        }
        temp += ", " + this._description + ", " + this._imgpath;
        return temp;
    }
}