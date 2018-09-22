var budgetController = (function() {

    var x = 23;

    var add = function(a){
        return x + a;
    }

    return {
        publicTest: function(b) {
            return add(b);
        }
    }

})();

var UIConstroller = (function(){
    
    // some code


})();

var controller = (function(budgeCtrl, UICtrl) {

    var z = budgeCtrl.publicTest(5);

    return {
        anotherPublic: function() {
            console.log(z);
        }
    }

})(budgetController, UIConstroller);