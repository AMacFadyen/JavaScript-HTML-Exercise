var app = function(){

    var createCatUl = function(){
        var cat = document.createElement('ul');
        cat.classList.add('cat')
        return cat;
    }

    var createLi = function(field, nameOrFood){
        var li = document.createElement('li');
        li.innerText = field + ": " + nameOrFood;
        return li;
    }

    var createFavFood= function(food){
        var favFoodLi = document.createElement('li');
        favFoodLi.innerText = food;
        return favFoodLi;
    }

    var createImgLi = function(imageSrce){
        var img = document.createElement('img');
        img.src = imageSrce;
        var li = document.createElement("li");
        li.appendChild(img);
        return li;
    }


    var appendElements = function(ul, liName, liFood, imageLi){
        ul.appendChild(liName);
        ul.appendChild(liFood);
        ul.appendChild(imageLi);
//what does the two lines below do???
        var cats = document.querySelector("#cats");
        cats.appendChild(ul);
    };

    var addCat = function(name, favFood, image){
        var catUl = createCatUl();
        var imgLi = createImgLi(image);
        var foodLi = createFavFood(favFood);
        var nameLi = createName(name);
        appendElements(nameLi, foodLi, imgLi, catUl);
    }

    var Cat = function(name, favFood, image){
        this.name = name;
        this.favFood = favFood;
        this.image = image;

    }

    var cat = new Cat("Paw-p-eye", "Spinach", "./pawpeye.jpg");

    var renderCat = function(cat){
        var ul = createCatUl();
        var nameLi = createLi("Name", cat.name);
        var foodLi = createLi("Food", cat.favFood);
        var imageLi = createImgLi(cat.image);

        appendElements(ul, nameLi, foodLi, imageLi);
    }

    renderCat(cat);

};

window.onload = app;
