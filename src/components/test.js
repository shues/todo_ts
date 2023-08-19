function check_for_full_div(mass_for_check) {
    console.log(arguments);
    if (!Array.isArray(mass_for_check)) return [];

    return mass_for_check.filter(mass_item => {
            if (typeof (mass_item) === 'number') {
                let temple_mass = [];
                for(let i = 1; i<arguments.length; i++){
                    if(typeof(arguments[i]) === 'number'){
                        temple_mass.push(mass_item % arguments[i] === 0);
                    }
                }
                return temple_mass;
            };
            return
        })
}
