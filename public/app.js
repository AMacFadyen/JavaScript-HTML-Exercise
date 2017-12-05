var app = function(){

    var createCatUl = function(){
        var cat = document.createElement('ul');
        cat.classList.add('cat')
        return cat;
    }

    var createName = function(name){
        var titleLi = document.createElement('li');
        titleLi.innerText = name;
        return titleLi;
    }

    var createFavFood= function(food){
        var favFoodLi = document.createElement('li');
        favFoodLi.innerText = food;
        return favFoodLi;
    }

    var createImgFile= function(img){
        var imgFile = document.createElement('img');
        imgFile.src = img;
        return imgFile;
    }

    var createImgLi = function(createImgFile(img)){
        var imgLi = document.createElement('li');
        imgLi.innerText = createImgFile(img);
        return imgLi;
    }


    var appendElements = function(nameLi, foodLi, imgLi, catUl){
        catUl.appendChild(nameLi);
        catUl.appendChild(foodLi);
        catUl.appendChild(imgLi);
    };

    var addCat = function(name, favFood, image){
        var catUl = createCatUl();
        var imgLi = createImgLi(image);
        var foodLi = createFavFood(favFood);
        var nameLi = createName(name);
        appendElements(nameLi, foodLi, imgLi, catUl);
    }

    addCat("Paw-p-eye", "Spinach", "./pawpeye.jpg");

};

window.onload = app;
