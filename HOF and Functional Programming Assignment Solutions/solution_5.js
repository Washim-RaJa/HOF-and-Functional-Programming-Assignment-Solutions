function urlValidator(inputUrl){

    const urlPattern = /^(https?:\/\/)[A-Za-z0-9`!@#$%&*()_+=\-.[\];:'"\\|,?/]+\.[A-Za-z]+$/g;

    const validation = urlPattern.test(inputUrl);
    
    if(validation){
        console.log(`"${inputUrl}" is a valid URL`);
    }
    else{
        console.log(`"${inputUrl}" is not a valid URL`);
    }
}

const url = "https://google.com";

const url1 = "http://google.com";

const url2 = "https://www.google.com";

const url3 = "www.google.com";

urlValidator(url);

urlValidator(url1);

urlValidator(url2);

urlValidator(url3);
