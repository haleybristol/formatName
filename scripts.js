function formatName(inputName) {
    inputName = inputName.split(' ');
    let lastItem = inputName.slice(-1).pop();

    if (lastItem.substring(lastItem.length - 1) === '.') {
      inputName.pop();
    }
    
    inputName = inputName.map((word, i) => {          
      word = word.toLowerCase();
      word = word.charAt(0).toUpperCase() + word.substring(1);
   
      if (word === 'Mister' || word === 'Mr') {
        return 'Mr.'
      }
      if (word === 'Doctor' || word === 'dr') {
        return 'Dr.'
      }
      else if (word === 'Misses' || word === 'Miss' || word === 'Mrs.' || word === 'Mrs' || word === 'Ms' ) {
        return 'Ms.'
      } else {
        return word;
      }

    })
    return inputName.join(' ');
  }



  console.log(formatName('doctor haley Jane sr.'));