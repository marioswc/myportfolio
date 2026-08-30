if (!localStorage.getItem('config')){
    // console.log('no configuration found, setting default configuration');
    const defConfig = {
        theme: 'dark',
        lang: 'en'
    }
    localStorage.setItem('config', JSON.stringify(defConfig));
    // console.log('config setted')
}

// console.log('loading configuration', localStorage.getItem('config'));