/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window/Global Object Binding:  The value of "this" will be the window/console Object.  In function call, 'this' points out at global object.
* 2. Implicit Binding:  Whenever a function is called by a preceding dot, the object before that dot is 'this'.  Before going to global object properties,
    'this' goes into its object context to which it has binding because the object has a property which is storing a function as a method - thus, it's implicitly bound.
    'This' does not search for a global object because object context has higher precedence than global object and is found when the function is called --> this bypasses
    the need to search in the global object.
* 3. New Binding: Occurs when a constructor function is used.  'This' refers to the specific instance of the object that is created and returned by a constructor function.
* 4. Explicit Binding:  Whenever JavaScript's call or apply method is used, 'this' is explicitly defined. Explicit binding occurs when we call functions via object AND
    explicitly bind a specific object in the function call.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function sayName(name) {
    console.log(this);
    return name;
}
console.log(sayName("Felix"));
// Principle 2

// code example for Implicit Binding

const myObj = {
    bind: 'binding',
    bindingType: function(type) {
        console.log(`This ${this.bind} is ${type}`)
    }
};
myObj.bindingType('implicit');

// Principle 3

// code example for New Binding
function HockeyTeams(team) {
    this.team = team;
    this.poorResult = function() {
        console.log(`Better luck next year, ${this.team}.`);
    };
}
const leafs = new HockeyTeams('Toronto Maple Leafs');
const bruins = new HockeyTeams('Boston Bruins');
const preds = new HockeyTeams('Nashville Predators');
leafs.poorResult();
// Principle 4

// code example for Explicit Binding
bruins.poorResult.call(leafs);