var mongoose = require('mongoose');
var Todo = require('./models/todo.js');

var data = [
    /* COMMUNITY TODOS */
    {
        type: "community",
        value: "The stairwell leading to your floor: dust the banisters, ledges and floorboards in the staircase and landings. Dust any fixtures in the landings. Vacuum the stairs and the landings."
    },
    {
        type: "community",
        value: "Clean ceiling fan blades, base, and light fixtures with wet washcloth"
    },
    {
        type: "community",
        value: "Wipe all baseboards, door frames, and window frames with wet washcloth"
    },
    {
        type: "community",
        value: "Dust the blinds and clean the windows."
        
    },
    {
      type: "community",
      value: "Check and if necessary replace the batteries in the smoke and carbon monoxide detectors."
    },
    {
        type: "community",
        value: "Clean the glass of the front and back doors."
    },
    {
        type: "community",
        value: "Dust all vents. Dust any other surfaces such as lamp shades, etc."
        
    },
    {
        type: "community",
        value: "Guest bathroom: clean the sink, under the sink, the mirror, the toilet, and the base of the toilet."
        
    },
    {
        type: "community",
        value: "Vacuum all the carpeted areas. Mop all hard surface floors. (This includes but is not limited to the living room, dining room, sunroom, kitchen, and guest bathroom.)"
        
    },
    {
        type: "community",
        value: "Vacuum the couches."
        
    },
    {
        type: "community",
        value: "Wash and dry any blankets or throw that may belong to IHOP Housing. Fold and return."
        
    },
    {
        type: "community",
        value: "Check every space(hall closets, linen closets, storage spaces, all common areas, etc.) and remove any personal items.<br>Check every drawer and shelf and behind every door even if you are sure you have not stored any items there."
        
    },
    {
        type: "community",
        value: "Laundry area: do not only remove your items; make sure you clean the area: shelves, machines, doors, frame, etc. Clean out lint from dryer. Wipe down the inside of washer and dryer. Sweep and mop areas around washer and dryer."
        
    },
    {
        type: "community",
        value: "Deep clean kitchen. Clean the inside and outside of the refrigerator, clean inside and outside of the oven, the hood of the stove, wipe the front of the dishwasher, wipe down the front of the kitchen cabinets, and clean all surface areas."
        
    },
    {
        type: "community",
        value: "Clean out and wipe down personal spaces in kitchen. Check pantry, cabinets, refrigerator, freezer, counters, etc. for personal items even in areas not designated to you."
        
    },
    {
        type: "community",
        value: "Take out the trash. Clean trash can."
        
    },
    {
        type: "community",
        value: "Clean anything else that is not clean."
        
    },
    /* PERSONAL TODOS */
    {
        type: "personal",
        value: "Empty the room of all personal belongings. Inspections will only begin after all your belongings are packed"
    },
    {
        type: "personal",
        value: "Clean ceiling fan blades, base, and light fixtures with wet washcloth"
    },
    {
        type: "personal",
        value: "Wipe baseboards, door frames, and window frames in room, closet, and bathroom with wet washcloth."
    },
    {
        type: "personal",
        value: "Dust all vents. Dust any other surfaces such as lamp shades, community furniture, etc."
    },
    {
        type: "personal",
        value: "Dust the blinds and clean the windows."
    },
    {
        type: "personal",
        value: "Clean out all furniture(drawers, shelves, nightstands, etc.), and wipe(inside and out) with a damp cloth."
    },
    {
        type: "personal",
        value: "Bathroom: clean the sink, under the sink, the mirror, the toilet, the base of the toilet, the shower and tub. It may be necesary to use bleach to whiten your shower or tub. Clean out and wipe the cabinets or any storage area inside and out."
    },
    {
        type: "personal",
        value: "Wash plastic shower liner in washing machine with a cup of bleach. Make sure all mold is removed."
    },
    {
        type: "personal",
        value: "Clean out the hair from the drain."
    },
    {
        type: "personal",
        value: "If you used any IHOP Housing bed linens including mattress covers, wash and dry them. Mattress covers should be put back on the corresponding mattress. Linens should be folded and stored in upstairs linen closet."
    },
    {
        type: "personal",
        value: "Vacuum bathroom, bedroom, and closet. Mop all hard surface floors in personal living space."
    },
    {
        type: "personal",
        value: "Double check every nook and cranny to make sure you've removed all personal items."
    },
    {
        type: "personal",
        value: "Clean out the wastebasket."
    },
    {
        type: "personal",
        value: "Refill soap dispensers."
    },
];

function seedTodos(){
    removeTodos();
    createTodos();
};

function createTodos(){
    data.forEach(function(seed){
        Todo.create(seed, function(err, todo){
            if(err){
                console.log(err);
            } else {
                console.log('Todo created');
            }
        })
    });
}

function removeTodos(){
    Todo.remove({}, function(err){
        if(err){
            console.log(err);
        }
       console.log('Removed all Todos!'); 
    });
}

module.exports = seedTodos;

