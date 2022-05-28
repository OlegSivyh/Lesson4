let counter = 0;

stop: while (true) {
    ++counter;
    const answer =  prompt('Введите break или continue');

        switch (answer){
        case 'break':
              break stop;
        case 'continue':
              continue;
        default:
              alert(counter);
    }
}