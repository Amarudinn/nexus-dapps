const matches = [
    {
        "teamA": "UTA Jazz",
        "teamB": "GS Warriors",
        "winner": "GS Warriors",
        "date": "2025-07-14",
        "type": "Match Winner",
        "odds": {
            "UTA Jazz": "1.1",
            "GS Warriors": "3"
        },
        "contract": "0x8b9e0E7fe46b4e494bc9645DEf8Ae18D0E632595",
        "bets": {
            "UTA Jazz": [
                { address: "0xce43e305434571Ed0a3fbb2641ab893E7f32307d", bet: "1.0 NEX" }
            ],
            "GS Warriors": [
                { address: "0x69C78846549ffE1914FF2b8A747d2611F4e576b0", bet: "1.0 NEX" }
            ]
        }
    },
    {
        "teamA": "LA Clippers",
        "teamB": "MIL Bucks",
        "winner": "LA Clippers",
        "date": "2025-07-14",
        "type": "Match Winner",
        "odds": {
            "LA Clippers": "1.4",
            "MIL Bucks": "2.4"
        },
        "contract": "0xd25EcA3e4C874376d99f795980b822f4b06f31c9",
        "bets": {
            "LA Clippers": [
                { address: "0x65053a1F3f09E235b529CCcE63850546D1C6C8ed", bet: "0.1 NEX" }
            ],
            "MIL Bucks": [
                { address: "0xce43e305434571Ed0a3fbb2641ab893E7f32307d", bet: "1.0 NEX" }
            ]
        }
    },
    {
        "teamA": "WAS Wizards",
        "teamB": "BKN Nets",
        "winner": "WAS Wizards",
        "date": "2025-07-14",
        "type": "Match Winner",
        "odds": {
            "WAS Wizards": "1.1",
            "BKN Nets": "3"
        },
        "contract": "0xFb3D146642CF9C98e50dda36bCB475eDEAFa3f49",
        "bets": {
            "WAS Wizards": [
                { address: "0xce43e305434571Ed0a3fbb2641ab893E7f32307d", bet: "1.0 NEX" },
                { address: "0x65053a1F3f09E235b529CCcE63850546D1C6C8ed", bet: "0.1 NEX" }
            ],
            "BKN Nets": []
        }
    },
    {
        "teamA": "Chelsea",
        "teamB": "PSG",
        "winner": "Chelsea",
        "date": "2025-07-14",
        "type": "Match Winner",
        "odds": {
            "Chelsea": "2.4",
            "PSG": "1.4",
            "Draw": "2.4"
        },
        "contract": "0xad995032e4Ad3492cC182fE06BD25262DBA1A3BF",
        "bets": {
            "Chelsea": [
                { address: "0xF50ABf0747B13F0eF95E5f0501B93c12F87ECfBF", bet: "10.0 NEX" },
                { address: "0x7C84E769d02b649e5c3301f26B893ae6dF12A70e", bet: "0.5 NEX" },
                { address: "0xce43e305434571Ed0a3fbb2641ab893E7f32307d", bet: "1.0 NEX" }
            ],
            "PSG": [
                { address: "0x2Fea88617eAaf2f7a2015A9eDE1C8510A7AA78E1", bet: "1.0 NEX" }
            ],
            "Draw": []
        }
    },
    {
        "teamA": "A. Anisimova",
        "teamB": " I. Swiatek",
        "winner": " I. Swiatek",
        "date": "2025-07-12",
        "type": "Match Winner",
        "odds": {
            "A. Anisimova": "1.9",
            " I. Swiatek": "1.4"
        },
        "contract": "0xd25EcA3e4C874376d99f795980b822f4b06f31c9",
        "bets": {
            "A. Anisimova": [
                { address: "0xF50ABf0747B13F0eF95E5f0501B93c12F87ECfBF", bet: "10 NEX" },
                { address: "0x2Fea88617eAaf2f7a2015A9eDE1C8510A7AA78E1", bet: "1 NEX" }
            ],
            " I. Swiatek": []
        }
    },
    {
        "teamA": "J. Sinner",
        "teamB": "N. Djokovic",
        "winner": "J. Sinner",
        "date": "2025-07-11",
        "type": "Match Winner",
        "odds": {
            "J. Sinner": "1.4",
            "N. Djokovic": "1.9"
        },
        "contract": "0xFb3D146642CF9C98e50dda36bCB475eDEAFa3f49",
        "bets": {
            "J. Sinner": [],
            "N. Djokovic": [
                { address: "0xF50ABf0747B13F0eF95E5f0501B93c12F87ECfBF", bet: "10 NEX" }
            ]
        }
    },
    {
        "teamA": "T. Fritz",
        "teamB": "C. Alcaraz",
        "winner": "C. Alcaraz",
        "date": "2025-07-11",
        "type": "Match Winner",
        "odds": {
            "T. Fritz": "2.4",
            "C. Alcaraz": "1.1"
        },
        "contract": "0x133b67279f7E7835a7Dc5aE118091b461717c7cA",
        "bets": {
            "T. Fritz": [],
            "C. Alcaraz": []
        }
    },
    {
        "teamA": "PSG",
        "teamB": "Real Madrid",
        "winner": "PSG",
        "date": "2025-07-10",
        "type": "Match Winner",
        "odds": {
            "PSG": "1.9",
            "Real Madrid": "1.9",
            "Draw": "2.4"
        },
        "contract": "0xCd10390Ea2e7CB3B9a46B7B3d77eCfe7d878232C",
        "bets": {
            "PSG": [
                { address: "0x65053a1F3f09E235b529CCcE63850546D1C6C8ed", bet: "1.0 NEX" }
            ],
            "Real Madrid": [
                { address: "0xce43e305434571Ed0a3fbb2641ab893E7f32307d", bet: "1.0 NEX" },
                { address: "0x433E646A7531c419C868916a71fF80143cf9f1f1", bet: "5.0 NEX" }
            ],
            "Draw": [
                { address: "0xb0f5c14c46B38cB9e7F96f9f00aE0706Ab57C773", bet: "1.0 NEX" }
            ]
        }
    },
    {
        "teamA": "M. Andreeva",
        "teamB": "B. Bencic",
        "winner": "B. Bencic",
        "date": "2025-07-09",
        "type": "Match Winner",
        "odds": {
            "M. Andreeva": "1.4",
            "B. Bencic": "1.9"
        },
        "contract": "0xad995032e4Ad3492cC182fE06BD25262DBA1A3BF",
        "bets": {
            "M. Andreeva": [
                { address: "0x2528556130D263850D1c059Fdb477D03bc2E8396", bet: "0.1 NEX" },
                { address: "0xce43e305434571Ed0a3fbb2641ab893E7f32307d", bet: "1.0 NEX" }
            ],
            "B. Bencic": []
        }
    },
    {
        "teamA": "I. Swiatek",
        "teamB": " L. Samsonova",
        "winner": "I. Swiatek",
        "date": "2025-07-09",
        "type": "Match Winner",
        "odds": {
            "I. Swiatek": "1.4",
            " L. Samsonova": "1.9"
        },
        "contract": "0xd25EcA3e4C874376d99f795980b822f4b06f31c9",
        "bets": {
            "I. Swiatek": [
                { address: "0x5D954BBEd0D179c752B57eCB61D4D964DCDEee32", bet: "0.1 NEX" },
                { address: "0xce43e305434571Ed0a3fbb2641ab893E7f32307d", bet: "1.0 NEX" }
            ],
            " L. Samsonova": []
        }
    },
    {
        "teamA": "F. Cobolli",
        "teamB": "N. Djokovic",
        "winner": "N. Djokovic",
        "date": "2025-07-09",
        "type": "Match Winner",
        "odds": {
            "F. Cobolli": "3",
            "N. Djokovic": "1.1"
        },
        "contract": "0xFb3D146642CF9C98e50dda36bCB475eDEAFa3f49",
        "bets": {
            "F. Cobolli": [],
            "N. Djokovic": [
                { address: "0xce43e305434571Ed0a3fbb2641ab893E7f32307d", bet: "1.0 NEX" }
            ]
        }
    },
    {
        "teamA": "J. Sinner",
        "teamB": "B. Shelton",
        "winner": "J. Sinner",
        "date": "2025-07-09",
        "type": "Match Winner",
        "odds": {
            "J. Sinner": "1.1",
            "B. Shelton": "2.4"
        },
        "contract": "0x133b67279f7E7835a7Dc5aE118091b461717c7cA",
        "bets": {
            "J. Sinner": [],
            "B. Shelton": [
                { address: "0xce43e305434571Ed0a3fbb2641ab893E7f32307d", bet: "1.0 NEX" }
            ]
        }
    },
    {
        "teamA": "Fluminense",
        "teamB": "Chelsea",
        "winner": "Chelsea",
        "date": "2025-07-08",
        "type": "Match Winner",
        "odds": {
            "Fluminense": "2.4",
            "Chelsea": "1.4",
            "Draw": "2.4"
        },
        "contract": "0x2F8402cdBFFb897Bee02Ce136bc5646601e8966C",
        "bets": {
            "Fluminense": [],
            "Chelsea": [
                { address: "0xce43e305434571Ed0a3fbb2641ab893E7f32307d", bet: "1 NEX" },
                { address: "0x433E646A7531c419C868916a71fF80143cf9f1f1", bet: "10 NEX" },
                { address: "0x65053a1F3f09E235b529CCcE63850546D1C6C8ed", bet: "0.1 NEX" }
            ],
            "Draw": [
                { address: "0x7C84E769d02b649e5c3301f26B893ae6dF12A70e", bet: "0.5 NEX" }
            ]
        }
    },
    {
        "teamA": "I. Swiatek",
        "teamB": "C. Tauson",
        "winner": "I. Swiatek",
        "date": "2025-07-07",
        "type": "Match Winner",
        "odds": {
            "I. Swiatek": "1.1",
            "C. Tauson": "2.4"
        },
        "contract": "0x2c3d9b6F02e056461C76185bfE1D3214be0e4aFD",
        "bets": {
            "I. Swiatek": [
                { address: "0xce43e305434571Ed0a3fbb2641ab893E7f32307d", bet: "1 NEX" },
                { address: "0x65053a1F3f09E235b529CCcE63850546D1C6C8ed", bet: "0.1 NEX" }
            ],
            "C. Tauson": [
                { address: "0x433E646A7531c419C868916a71fF80143cf9f1f1", bet: "1 NEX" }
            ]
        }
    },
    {
        "teamA": "M. Andreeva",
        "teamB": "N. Navarro",
        "winner": "M. Andreeva",
        "date": "2025-07-07",
        "type": "Match Winner",
        "odds": {
            "M. Andreeva": "1.4",
            "N. Navarro": "1.9"
        },
        "contract": "0xB4d56b7ee390B981D116810C109515Fb41b64be4",
        "bets": {
            "M. Andreeva": [
                { address: "0xce43e305434571Ed0a3fbb2641ab893E7f32307d", bet: "1 NEX" },
                { address: "0xF50ABf0747B13F0eF95E5f0501B93c12F87ECfBF", bet: "6 NEX" },
                { address: "0x433E646A7531c419C868916a71fF80143cf9f1f1", bet: "1 NEX" },
                { address: "0x65053a1F3f09E235b529CCcE63850546D1C6C8ed", bet: "0.1 NEX" }
            ],
            "N. Navarro": []
        }
    },
    {
        "teamA": "E. Alexandrova",
        "teamB": "B. Bencic",
        "winner": "B. Bencic",
        "date": "2025-07-07",
        "type": "Match Winner",
        "odds": {
            "E. Alexandrova": "1.4",
            "B. Bencic": "1.9"
        },
        "contract": "0x630Bd4318d998c6DA70fDD6fAaf7DE16c1555526",
        "bets": {
            "E. Alexandrova": [
                { address: "0xF50ABf0747B13F0eF95E5f0501B93c12F87ECfBF", bet: "10 NEX" },
                { address: "0x433E646A7531c419C868916a71fF80143cf9f1f1", bet: "1 NEX" },
                { address: "0xB7A5f2ad10411e7B60A7aA73ab9A78c5d7B1Eb11", bet: "1 NEX" },
                { address: "0x2f8244A87d1F1D192aDBE7B526B82a599Aff767D", bet: "1 NEX" },
                { address: "0x65053a1F3f09E235b529CCcE63850546D1C6C8ed", bet: "0.1 NEX" }
            ],
            "B. Bencic": [
                { address: "0xce43e305434571Ed0a3fbb2641ab893E7f32307d", bet: "1 NEX" }
            ]
        }
    },
    {
        "teamA": "L. Samsonova",
        "teamB": "J. Bouzas Maneiro",
        "winner": "L. Samsonova",
        "date": "2025-07-07",
        "type": "Match Winner",
        "odds": {
            "L. Samsonova": "1.1",
            "J. Bouzas Maneiro": "2.4"
        },
        "contract": "0x8b9e0E7fe46b4e494bc9645DEf8Ae18D0E632595",
        "bets": {
            "L. Samsonova": [
                { address: "0xce43e305434571Ed0a3fbb2641ab893E7f32307d", bet: "1 NEX" },
                { address: "0x1A4758AA342E2Af724B2082863A7E4cAD770bfA9", bet: "1 NEX" },
                { address: "0x65053a1F3f09E235b529CCcE63850546D1C6C8ed", bet: "0.1 NEX" }
            ],
            "J. Bouzas Maneiro": [
                { address: "0x82378291D6AC4356786f2c3D193C91032266Af17", bet: "1 NEX" }
            ]
        }
    },
    {
        "teamA": "J. Sinner",
        "teamB": "G. Dimitrov",
        "winner": "J. Sinner",
        "date": "2025-07-07",
        "type": "Match Winner",
        "odds": {
            "J. Sinner": "1.1",
            "G. Dimitrov": "3"
        },
        "contract": "0xad995032e4Ad3492cC182fE06BD25262DBA1A3BF",
        "bets": {
            "J. Sinner": [
                { address: "0xce43e305434571Ed0a3fbb2641ab893E7f32307d", bet: "1 NEX" },
                { address: "0x8610e13BBD4A9bf5840695F31d573a341eD3E5d0", bet: "1.1 NEX" },
                { address: "0x65053a1F3f09E235b529CCcE63850546D1C6C8ed", bet: "0.1 NEX" }
            ],
            "G. Dimitrov": [
                { address: "0x433E646A7531c419C868916a71fF80143cf9f1f1", bet: "1 NEX" }
            ]
        }
    },
    {
        "teamA": "B. Shelton",
        "teamB": "L. Sonego",
        "winner": " B. Shelton",
        "date": "2025-07-07",
        "type": "Match Winner",
        "odds": {
            "B. Shelton": "1.4",
            "L. Sonego": "1.9"
        },
        "contract": "0xd25EcA3e4C874376d99f795980b822f4b06f31c9",
        "bets": {
            "B. Shelton": [
                { address: "0xce43e305434571Ed0a3fbb2641ab893E7f32307d", bet: "1 NEX" },
                { address: "0xF50ABf0747B13F0eF95E5f0501B93c12F87ECfBF", bet: "10 NEX" },
                { address: "0x433E646A7531c419C868916a71fF80143cf9f1f1", bet: "1 NEX" },
                { address: "0x4Fe263Cb6523E744F2F5Fa25d4175390C432f494", bet: "1.1 NEX" },
                { address: "0x65053a1F3f09E235b529CCcE63850546D1C6C8ed", bet: "0.1 NEX" }
            ],
            "L. Sonego": []
        }
    },
    {
        "teamA": "A. de Minaur",
        "teamB": " N. Djokovic",
        "winner": " N. Djokovic",
        "date": "2025-07-07",
        "type": "Match Winner",
        "odds": {
            "A. de Minau": "3",
            " N. Djokovic": "1.1"
        },
        "contract": "0xFb3D146642CF9C98e50dda36bCB475eDEAFa3f49",
        "bets": {
            "A. de Minaur": [
                { address: "0x433E646A7531c419C868916a71fF80143cf9f1f1", bet: "1 NEX" },
                { address: "0x1e0aea7E6FaE039853f3976a2C914c6656F3c076", bet: "2 NEX" },
                { address: "0x726ACb7225167E92cdF399A948b974aefBB1682D", bet: "0.5 NEX" }
            ],
            " N. Djokovic": [
                { address: "0xce43e305434571Ed0a3fbb2641ab893E7f32307d", bet: "1 NEX" },
                { address: "0xcd4223F176119aAeeB5653c9D4Bb86F884327408", bet: "1 NEX" },
                { address: "0xBd8b150D92d34DD0176678Ef198aC52193a57e33", bet: "2 NEX" },
                { address: "0x2f8244A87d1F1D192aDBE7B526B82a599Aff767D", bet: "1 NEX" },
                { address: "0x65053a1F3f09E235b529CCcE63850546D1C6C8ed", bet: "0.1 NEX" }
            ]
        }
    },
    {
        "teamA": "M. Cilic",
        "teamB": "F. Cobolli",
        "winner": "F. Cobolli",
        "date": "2025-07-07",
        "type": "Match Winner",
        "odds": {
            "M. Cilic": "1.9",
            "F. Cobolli": "1.9"
        },
        "contract": "0x133b67279f7E7835a7Dc5aE118091b461717c7cA",
        "bets": {
            "M. Cilic": [
                { address: "0x433E646A7531c419C868916a71fF80143cf9f1f1", bet: "1 NEX" },
                { address: "0x637be6D567119B89Bd1A34993A223D2413edDbe8", bet: "1 NEX" },
                { address: "0x1B07cA05607EfD0E820DeE2c3439e9e5700523d1", bet: "0.10136 NEX" },
                { address: "0xC29D1D1281EBb2632F0D7261cA7e16CEDC2B9cFA", bet: "0.10126 NEX" },
                { address: "0x611e749e9b2961c8e1B0c6692EE4D09dcCf34d15", bet: "0.10127 NEX" },
                { address: "0x18296FF7bE01ac14cB1038C4a3B4C5171bd0F797", bet: "0.10137 NEX" },
                { address: "0x9DD18bfce2869292631508f57d2682040bcc3ad8", bet: "0.1013 NEX" },
                { address: "0xf798eC3aa24Db17211DBE323585Eb9cB6088c531", bet: "0.10134 NEX" },
                { address: "0xb15F9a083Afd5EB03abf6D19BF057424eede1C6A", bet: "0.10129 NEX" },
                { address: "0xc987194F3B8E627Af902B4Fcc69e85025C7383d0", bet: "0.10132 NEX" },
                { address: "0x94C5D8e427527ff87bfb53e9c643F99CF4379ad2", bet: "0.10126 NEX" },
                { address: "0xA8dff1f485915253dbB206D2E9d33e189a2A939A", bet: "0.10139 NEX" },
                { address: "0x2f8244A87d1F1D192aDBE7B526B82a599Aff767D", bet: "1 NEX" },
                { address: "0x65053a1F3f09E235b529CCcE63850546D1C6C8ed", bet: "0.1 NEX" }
            ],
            "F. Cobolli": [
                { address: "0xce43e305434571Ed0a3fbb2641ab893E7f32307d", bet: "1 NEX" },
                { address: "0xcd4223F176119aAeeB5653c9D4Bb86F884327408", bet: "0.5 NEX" },
                { address: "0x3169cBD34b95518B5d777121E8640836204F666A", bet: "1 NEX" },
                { address: "0xD1562fe7fc993F726F36F6E039C579eaf3430f8C", bet: "1 NEX" }
            ]
        }
    },
    {
        teamA: "M. Kecmanovic",
        teamB: "N. Djokovic",
        winner: "N. Djokovic",
        date: "2025-07-05",
        type: "Match Winner",
        odds: {
            "M. Kecmanovic": "3",
            "N. Djokovic": "1.1"
        },
        contract: "0x133b67279f7E7835a7Dc5aE118091b461717c7cA",
        bets: {
            "M. Kecmanovic": [],
            "N. Djokovic": [
                { address: "0xce43e305434571Ed0a3fbb2641ab893E7f32307d", bet: "1 NEX" },
                { address: "0x65053a1F3f09E235b529CCcE63850546D1C6C8ed", bet: "1 NEX" }
            ]
        }
    },
    {
        teamA: "B. Nakashima",
        teamB: "L. Sonego",
        winner: "L. Sonego",
        date: "2025-07-05",
        type: "Match Winner",
        odds: {
            "B. Nakashima": "1.4",
            "L. Sonego": "1.9"
        },
        contract: "0xFb3D146642CF9C98e50dda36bCB475eDEAFa3f49",
        bets: {
            "B. Nakashima": [
                { address: "0xF50ABf0747B13F0eF95E5f0501B93c12F87ECfBF", bet: "3 NEX" },
                { address: "0x65053a1F3f09E235b529CCcE63850546D1C6C8ed", bet: "1 NEX" }
            ],
            "L. Sonego": [
                { address: "0xce43e305434571Ed0a3fbb2641ab893E7f32307d", bet: "1 NEX" }
            ]
        }
    },
    {
        teamA: "F. Cobolli",
        teamB: "J. Mensik",
        winner: "F. Cobolli",
        date: "2025-07-05",
        type: "Match Winner",
        odds: {
            "F. Cobolli": "1.9",
            "J. Mensik": "1.4"
        },
        contract: "0xd25EcA3e4C874376d99f795980b822f4b06f31c9",
        bets: {
            "F. Cobolli": [
                { address: "0xce43e305434571Ed0a3fbb2641ab893E7f32307d", bet: "1 NEX" }
            ],
            "J. Mensik": [
                { address: "0xF50ABf0747B13F0eF95E5f0501B93c12F87ECfBF", bet: "3 NEX" },
                { address: "0x65053a1F3f09E235b529CCcE63850546D1C6C8ed", bet: "0.1 NEX" }
            ]
        }
    },
    {
        teamA: "A. de Minaur",
        teamB: "A. Holmgren",
        winner: "A. de Minaur",
        date: "2025-07-05",
        type: "Match Winner",
        odds: {
            "A. de Minaur": "1.1",
            "A. Holmgren": "3"
        },
        contract: "0xad995032e4Ad3492cC182fE06BD25262DBA1A3BF",
        bets: {
            "A. de Minaur": [
                { address: "0x65053a1F3f09E235b529CCcE63850546D1C6C8ed", bet: "0.1 NEX" }
            ],
            "A. Holmgren": [
                { address: "0xce43e305434571Ed0a3fbb2641ab893E7f32307d", bet: "1 NEX" }
            ]
        }
    },
    {
        teamA: "C. Tauson",
        teamB: "E. Rybakina",
        winner: "C. Tauson",
        date: "2025-07-05",
        type: "Match Winner",
        odds: {
            "C. Tauson": "2.4",
            "E. Rybakina": "1.1"
        },
        contract: "0x2F8402cdBFFb897Bee02Ce136bc5646601e8966C",
        bets: {
            "C. Tauson": [],
            "E. Rybakina": [
                { address: "0xce43e305434571Ed0a3fbb2641ab893E7f32307d", bet: "1 NEX" },
                { address: "0x65053a1F3f09E235b529CCcE63850546D1C6C8ed", bet: "0.1 NEX" }
            ]
        }
    },
    {
        teamA: "I. Swiatek",
        teamB: "D. Collins",
        winner: "I. Swiatek",
        date: "2025-07-05",
        type: "Match Winner",
        odds: {
            "I. Swiatek": "1.1",
            "D. Collins": "2.4"
        },
        contract: "0xCd10390Ea2e7CB3B9a46B7B3d77eCfe7d878232C",
        bets: {
            "I. Swiatek": [
                { address: "0xce43e305434571Ed0a3fbb2641ab893E7f32307d", bet: "1 NEX" }
            ],
            "D. Collins": []
        }
    },
    {
        teamA: "M. Andreeva",
        teamB: "H. Baptiste",
        winner: "M. Andreeva",
        date: "2025-07-05",
        type: "Match Winner",
        odds: {
            "M. Andreeva": "1.1",
            "H. Baptiste": "2.4"
        },
        contract: "0x2b105e14b51233F869C40a413b6D60718510aC86",
        bets: {
            "M. Andreeva": [
                { address: "0xce43e305434571Ed0a3fbb2641ab893E7f32307d", bet: "1 NEX" },
                { address: "0x65053a1F3f09E235b529CCcE63850546D1C6C8ed", bet: "0.1 NEX" }
            ],
            "H. Baptiste": []
        }
    },
    {
        teamA: "B. Krejcikova",
        teamB: "E. Navarro",
        winner: "E. Navarro",
        date: "2025-07-05",
        type: "Match Winner",
        odds: {
            "B. Krejcikova": "1.9",
            "E. Navarro": "1.4"
        },
        contract: "0xF50E4b651bE72948AB1E6bBC99F442aC0AD3Ad40",
        bets: {
            "B. Krejcikova": [],
            "E. Navarro": [
                { address: "0xce43e305434571Ed0a3fbb2641ab893E7f32307d", bet: "1 NEX" },
                { address: "0xF50ABf0747B13F0eF95E5f0501B93c12F87ECfBF", bet: "3 NEX" },
                { address: "0x65053a1F3f09E235b529CCcE63850546D1C6C8ed", bet: "0.1 NEX" }
            ]
        }
    },
    {
        teamA: "Real Madrid",
        teamB: "Dortmund",
        winner: "Real Madrid",
        date: "2025-07-06",
        type: "Match Winner",
        odds: {
            "Real Madrid": "1.4",
            Dortmund: "3",
            Draw: "3"
        },
        contract: "0x2c3d9b6F02e056461C76185bfE1D3214be0e4aFD",
        bets: {
            "Real Madrid": [
                { address: "0x65053a1F3f09E235b529CCcE63850546D1C6C8ed", bet: "1 NEX" },
                { address: "0x4C1f461B8Ca73Ff479b7e15611084fD2ab66282A", bet: "0.1 NEX" },
                { address: "0xce43e305434571Ed0a3fbb2641ab893E7f32307d", bet: "1 NEX" },
                { address: "0x8F70288a8B2B14fF1eB27BFaeeb6ad8AB48Ba7E4", bet: "10 NEX" }
            ],
            Dortmund: [],
            Draw: [
                { address: "0xF50ABf0747B13F0eF95E5f0501B93c12F87ECfBF", bet: "1 NEX" }
            ]
        }
    },
    {
        teamA: "PSG",
        teamB: "Bayern Munich",
        winner: "PSG",
        date: "2025-07-05",
        type: "Match Winner",
        odds: {
            PSG: "1.9",
            "Bayern Munich": "2.4",
            Draw: "3"
        },
        contract: "0xB4d56b7ee390B981D116810C109515Fb41b64be4",
        bets: {
            PSG: [
                { address: "0x65053a1F3f09E235b529CCcE63850546D1C6C8ed", bet: "1 NEX" },
                { address: "0x4C1f461B8Ca73Ff479b7e15611084fD2ab66282A", bet: "0.1 NEX" },
                { address: "0xce43e305434571Ed0a3fbb2641ab893E7f32307d", bet: "1 NEX" },
                { address: "0x8F70288a8B2B14fF1eB27BFaeeb6ad8AB48Ba7E4", bet: "4 NEX" }
            ],
            "Bayern Munich": [
                { address: "0x13696C89dC11d3D38D2aAED45a668480a992fC39", bet: "0.1 NEX" }
            ],
            Draw: []
        }
    },
    {
        teamA: "Palmeiras",
        teamB: "Chelsea",
        winner: "Chelsea",
        date: "2025-07-05",
        type: "Match Winner",
        odds: {
            Palmeiras: "2.5",
            Chelsea: "1.8",
            Draw: "3"
        },
        contract: "0x630Bd4318d998c6DA70fDD6fAaf7DE16c1555526",
        bets: {
            Palmeiras: [
                { address: "0x4C1f461B8Ca73Ff479b7e15611084fD2ab66282A", bet: "0.1 NEX" },
                { address: "0x8F70288a8B2B14fF1eB27BFaeeb6ad8AB48Ba7E4", bet: "5 NEX" }
            ],
            Chelsea: [
                { address: "0x65053a1F3f09E235b529CCcE63850546D1C6C8ed", bet: "1 NEX" },
                { address: "0xce43e305434571Ed0a3fbb2641ab893E7f32307d", bet: "1 NEX" }
            ],
            Draw: [
                { address: "0xF50ABf0747B13F0eF95E5f0501B93c12F87ECfBF", bet: "2 NEX" }
            ]
        }
    },
    {
        teamA: "Fluminense",
        teamB: "Al-Hilal",
        winner: "Fluminense",
        date: "2025-07-05",
        type: "Match Winner",
        odds: {
            Fluminense: "2.4",
            "Al-Hilal": "1.9",
            Draw: "3"
        },
        contract: "0x8b9e0E7fe46b4e494bc9645DEf8Ae18D0E632595",
        bets: {
            Fluminense: [
                { address: "0x4C1f461B8Ca73Ff479b7e15611084fD2ab66282A", bet: "0.1 NEX" }
            ],
            "Al-Hilal": [
                { address: "0x65053a1F3f09E235b529CCcE63850546D1C6C8ed", bet: "1 NEX" },
                { address: "0xce43e305434571Ed0a3fbb2641ab893E7f32307d", bet: "1 NEX" },
                { address: "0xF50ABf0747B13F0eF95E5f0501B93c12F87ECfBF", bet: "2 NEX" },
                { address: "0x8F70288a8B2B14fF1eB27BFaeeb6ad8AB48Ba7E4", bet: "10 NEX" }
            ],
            Draw: []
        }
    },
    {
        teamA: "M. Giron",
        teamB: "J. Mensik",
        winner: "J. Mensik",
        date: "2025-07-03",
        type: "Match Winner",
        odds: {
            "M. Giron": "1.9",
            "J. Mensik": "1.4"
        },
        contract: "0xad995032e4Ad3492cC182fE06BD25262DBA1A3BF",
        bets: {
            "M. Giron": [
                { address: "0x4C1f461B8Ca73Ff479b7e15611084fD2ab66282A", bet: "0.1 NEX" }
            ],
            "J. Mensik": [
                { address: "0xF50ABf0747B13F0eF95E5f0501B93c12F87ECfBF", bet: "1 NEX" },
                { address: "0xce43e305434571Ed0a3fbb2641ab893E7f32307d", bet: "1 NEX" }
            ]
        }
    },
    {
        teamA: "G. Dimitrov",
        teamB: "C. Moutet",
        winner: "G. Dimitrov",
        date: "2025-07-03",
        type: "Match Winner",
        odds: {
            "G. Dimitrov": "1.4",
            "C. Moutet": "1.9"
        },
        contract: "0xd25EcA3e4C874376d99f795980b822f4b06f31c9",
        bets: {
            "G. Dimitrov": [
                { address: "0xF50ABf0747B13F0eF95E5f0501B93c12F87ECfBF", bet: "1 NEX" },
                { address: "0x4C1f461B8Ca73Ff479b7e15611084fD2ab66282A", bet: "0.1 NEX" },
                { address: "0xce43e305434571Ed0a3fbb2641ab893E7f32307d", bet: "1 NEX" },
                { address: "0x65053a1F3f09E235b529CCcE63850546D1C6C8ed", bet: "1 NEX" }
            ],
            "C. Moutet": []
        }
    },
    {
        teamA: "V. Kudermetova",
        teamB: "E. Navarro",
        winner: "E. Navarro",
        date: "2025-07-03",
        type: "Match Winner",
        odds: {
            "V. Kudermetova": "1.9",
            "E. Navarro": "1.4"
        },
        contract: "0xFb3D146642CF9C98e50dda36bCB475eDEAFa3f49",
        bets: {
            "V. Kudermetova": [
                { address: "0xce43e305434571Ed0a3fbb2641ab893E7f32307d", bet: "1 NEX" },
                { address: "0x4C1f461B8Ca73Ff479b7e15611084fD2ab66282A", bet: "0.1 NEX" }
            ],
            "E. Navarro": [
                { address: "0x13696C89dC11d3D38D2aAED45a668480a992fC39", bet: "0.1 NEX" },
                { address: "0x65053a1F3f09E235b529CCcE63850546D1C6C8ed", bet: "1 NEX" }
            ]
        }
    },
    {
        teamA: "M. Sakkari",
        teamB: "E. Rybakina",
        winner: "E. Rybakina",
        date: "2025-07-03",
        type: "Match Winner",
        odds: {
            "M. Sakkari": "3",
            "E. Rybakina": "1.1"
        },
        contract: "0x133b67279f7E7835a7Dc5aE118091b461717c7cA",
        bets: {
            "M. Sakkari": [],
            "E. Rybakina": [
                { address: "0xF50ABf0747B13F0eF95E5f0501B93c12F87ECfBF", bet: "1 NEX" },
                { address: "0x4C1f461B8Ca73Ff479b7e15611084fD2ab66282A", bet: "0.1 NEX" },
                { address: "0xce43e305434571Ed0a3fbb2641ab893E7f32307d", bet: "1 NEX" },
                { address: "0x65053a1F3f09E235b529CCcE63850546D1C6C8ed", bet: "1 NEX" }
            ]
        }
    }
];