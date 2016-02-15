/**
 * Created by MichaelLeffert on 2/11/16.
 */

 function getEmployee(empID){
    return new employees.Employee()

    .query({where: {id: empID}})

        .fetch({withRelated: ['jobs'], require: true})
        .then(function(model){
            return model;
});

}
