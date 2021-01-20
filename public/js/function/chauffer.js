let chaufi = (x) => {
    setTimeout(() => {
        if (x.temperature < 100) {
            x.temperature+=20
            console.log(`La temperature est ${x.temperature} degrés`);
            chaufi(x);
        } else {
            console.log("l'eau est chauffée");
        }
    }, 1000);
}

export {chaufi};