const matches = [
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
                { address: "0x1e55b0f3620c06e3493c2a47c6d3d855421c1583", bet: "2.0 NEX" }
            ],
            Dortmund: [
                { address: "0x1e55b0f3620c06e3493c2a47c6d3d855421c1583", bet: "0.15 NEX" }
            ],
            Draw: [
                { address: "0x13696C89dC11d3D38D2aAED45a668480a992fC39", bet: "12 NEX" }
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
                { address: "0x1e55b0f3620c06e3493c2a47c6d3d855421c1583", bet: "0.15 NEX" }
            ],
            "Bayern Munich": [
                { address: "0x13696C89dC11d3D38D2aAED45a668480a992fC39", bet: "12 NEX" }
            ],
            Draw: [
                { address: "0x1e55b0f3620c06e3493c2a47c6d3d855421c1583", bet: "2.0 NEX" }
            ]
        }
    },
    {
        teamA: "Palmeiras",
        teamB: "Chelsea",
        winner: "Draw",
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
                { address: "0x1e55b0f3620c06e3493c2a47c6d3d855421c1583", bet: "2.0 NEX" }
            ],
            Chelsea: [
                { address: "0x13696C89dC11d3D38D2aAED45a668480a992fC39", bet: "12 NEX" }
            ],
            Draw: [
                { address: "0x1e55b0f3620c06e3493c2a47c6d3d855421c1583", bet: "0.15 NEX" }
            ]
        }
    },
    {
        teamA: "Fluminense",
        teamB: "Al-Hilal",
        winner: "Al-Hilal",
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
                { address: "0x13696C89dC11d3D38D2aAED45a668480a992fC39", bet: "12 NEX" }
            ],
            "Al-Hilal": [
                { address: "0x1e55b0f3620c06e3493c2a47c6d3d855421c1583", bet: "0.15 NEX" }
            ],
            Draw: [
                { address: "0x1e55b0f3620c06e3493c2a47c6d3d855421c1583", bet: "2.0 NEX" }
            ]
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