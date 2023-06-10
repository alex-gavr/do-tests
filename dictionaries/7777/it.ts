const dictionary = {
  welcome: {
    heading: 'Quale paese ha una popolazione più alta?',
    ScoresContainer: {
      score: 'Punteggio',
      hintsAvailable: 'Suggerimenti disponibili',
    },
    Countries: {
      CountryCard: {
        positiveFeedback: [
          'Ottimo lavoro!',
          'Hai capito bene!',
          'Risposta corretta!',
          'Ben fatto!',
          'Hai assolutamente ragione!',
          'Questa è la risposta corretta!',
          'Gentile!',
          "L'hai inchiodato!",
          'Ben giocato!',
          'Eccellente!',
          'La tua risposta è corretta!',
          'Perfetto!',
          'Hai capito!',
          'Brillante!',
          'Questa è la risposta giusta!',
          'Bel lavoro!',
          'Sei in fiamme!',
        ],
        lost: 'scorretto 😢',
        instructions: 'Scegli il paese superiore o inferiore',
        secondsLeft: 'secondi rimanenti',
      },
      Button: {
        nothingPicked: 'Seleziona un paese',
        answerIsCorrect: 'Prossima coppia',
        confirmCountry: 'confermare',
      },
      HintButton: {
        hintShown: 'Spero che aiuti',
        noHintAvailable: 'Nessun suggerimento crediti rimasti',
        getHint: 'Ottieni suggerimento',
      },
    },
  },
  gameOver: {
    heading: 'Punteggio finale',
    header: {
      leaderboardButton: 'Classifica',
      topScore: 'Punteggio massimo',
      moreHintsButton: ' suggerimenti',
      hintsAvailable: 'Suggerimenti disponibili',
    },
    footer: {
      finish: 'finire',
      playAgain: 'Gioca di nuovo',
    },
    roundScoreFeedback: {
      greatScore: [
        'Bravo!',
        'Fantastico!',
        'Impressionante!',
        'Eccezionale!',
        'Incredibile!',
        'Spettacolare!',
        'Fenomenale!',
        'Incredibile!',
        'Superbo!',
        'Fantastico!',
        'Grande sforzo!',
        'Bel lavoro!',
        'Ottimo sforzo!',
      ],
      mediumScore: [
        'Continua a provare!',
        'Hai questo!',
        'Non mollare!',
        'La prossima volta!',
        'Continua ad andare avanti!',
        'La pratica rende perfetti!',
        'Ancora una prova!',
        'Stai migliorando!',
        'Resta determinato!',
        'Spingiti oltre!',
        'Stai migliorando!',
        'Non male!',
        'Ci siamo quasi!',
      ],
      zeroScore: [
        'Rimanga su col morale!',
        'Rimani positivo!',
        'Ogni fallimento è una lezione!',
        "È solo l'inizio!",
        'Risorgete dalle ceneri!',
        'Accetta la sfida!',
        'Il tuo viaggio inizia ora!',
        "Non lasciare che le battute d'arresto ti definiscano!",
        'Concentrati sul progresso, non sulla perfezione!',
        'Continuate ad andare avanti!',
      ],
    },
    topScoreFeedback: {
      biggerPhrases: [
        'Punta più in alto e batti il tuo punteggio più alto!',
        'Continua a spingere e supera il tuo meglio!',
        'Con la pratica, raggiungerai nuove vette!',
        'Ancora un tentativo e batterai il tuo record!',
        'Sfida te stesso per superare il tuo punteggio più alto!',
        'Il tuo prossimo tentativo distruggerà il tuo record personale!',
        'Il tuo punteggio più alto è a portata di mano!',
        'Sei sulla strada giusta!',
        'Supera il tuo punteggio più alto la prossima volta!',
        'La tua determinazione supererà il tuo punteggio massimo!',
        'Punta alle stelle e batti il tuo record!',
      ],
      newBest: [
        'Nuovo record! Ottimo lavoro!',
        'Congratulazioni per aver superato il tuo meglio!',
        'Hai superato te stesso! Ben fatto!',
        'Hai raggiunto nuove vette! Fantastico!',
        'Punteggio più alto in frantumi! Continuate così!',
        'Incredibile! Hai stabilito un nuovo standard!',
        "Incredibile! Hai alzato l'asticella!",
        'Battere i record! Continua a spingere!',
        'Prestazioni sorprendenti! Continua ad andare avanti!',
        'Sei in fiamme! Il miglior punteggio di sempre!',
      ],
    },
    positiveFeedback: {
      text: [
        "Solo un po 'di più per ottenere la posizione {{reachTarget}}",
        'Continua a spingere per ottenere {{reachTarget}} posto!',
        "Un po' più di sforzo e raggiungerai la posizione {{reachTarget}}!",
        'Ancora qualche punto per assicurarsi {{reachTarget}} posto!',
        'Continuate ad andare avanti per quella posizione {{reachTarget}}!',
        'Sei a portata di mano {{reachTarget}} posto! Mantieni la concentrazione!',
        "Sei sull'orlo di {{reachTarget}} posizione! Non arrenderti ora!",
        'Così vicino! Punta più in alto per la posizione {{reachTarget}}!',
        '{{reachTarget}} posto è in vista! Continua a spingere!',
      ],
      nearTopThree: [
        'Sei a portata di mano della classifica! Vai per {{reachTarget}} posizione!',
        'Sei vicino alla cima! {{reachTarget}} posto ti aspetta!',
      ],
    },
  },
  leaderboard: {
    totalPlayers: 'Totale giocatori',
    playerCard: {
      you: 'tu',
      topScore: 'Punteggio più alto',
      hints: 'Suggerimenti',
    },
    buttons: {
      back: 'Indietro',
      playAgain: 'Gioca di nuovo',
    }
  },
};

export default dictionary;