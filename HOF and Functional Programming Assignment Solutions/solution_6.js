function linkedinProfileUrlValidator(inputUrl){

    const linkedinProfileUrlPattern = /^(https:\/\/?)www.linkedin\.com\/in\/[A-Za-z0-9_\-]{5,30}[A-Za-z0-9]\/$/g;
    
    const validation = linkedinProfileUrlPattern.test(inputUrl);

    if(validation){
        console.log(`"${inputUrl}" is a valid LinkedIn Profile URL`);
    }
    else{
        console.log(`"${inputUrl}" is not a valid LinkedIn Profile URL`);
    }
}


let profile1 = 'https://www.linkedin.com/in/tony-stark-25b7v68c4/'

linkedinProfileUrlValidator(profile1);
