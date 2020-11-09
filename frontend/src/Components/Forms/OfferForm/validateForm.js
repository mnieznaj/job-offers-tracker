const validateFrom = values => {
    const errors = {};

    if(!values.title){
        errors.title = 'Required'
    } else if (values.title.length > 30) {
        errors.title = 'Must be less than 30 characters';
    }

    if(!values.link){
        errors.link = 'Required'
    }

    if(!/^[0-9]*$/.test(values.paygrade)){
        errors.paygrade = "Only numbers allowed";
    }
    if(!values.city){
        errors.city = 'Required'
    }
    
    if(!values.status){
        errors.status = 'Required'
    } else if (values.status !== "none" || values.status !== "applied" || values.status !== "rejected" || values.status !== "succeded"){
        errors.status = "Wrong status"
    }

    return errors;
}

export default validateFrom;