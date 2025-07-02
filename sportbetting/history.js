const matches = [
    {
        teamA: "Liverpool",
        teamB: "Real Madrid",
        winner: "Draw",
        date: "29.06.2025",
        type: "Match Winner",
        odds: {
            Liverpool: "2.75",
            "Real Madrid": "2.10",
            Draw: "3.20"
        },
        contract: "0x6348f1E411a5A6C488347994822a4cBf04b3280B",
        bets: {
            Liverpool: [
                { address: "123344", bet: "1.0 NEX" }
            ],
            "Real Madrid": [
                { address: "0x13696C89dC11d3D38D2aAED45a668480a992fC39", bet: "0.15 NEX" },
                { address: "2132234", bet: "1.0 NEX" },
            ],
            Draw: [
                { address: "0xce43e305434571Ed0a3fbb2641ab893E7f32307d", bet: "1.0 NEX" }
            ]
        }
    },
    {
        teamA: "PSG",
        teamB: "Inter Miami",
        winner: "PSG",
        date: "30.06.2025",
        type: "Match Winner",
        odds: {
            PSG: "1.5",
            "Inter Miami": "3",
            Draw: "3.20"
        },
        contract: "0x1b38CD8dD6caD7088E35C89eD9C22fdCadb5c80e",
        bets: {
            PSG: [
                { address: "0x1b38CD8dD6caD7088E35C89eD9C22fdCadb5c80e", bet: "0.5 ETH" },
                { address: "0xce43e305434571Ed0a3fbb2641ab893E7f32307d", bet: "0.5 ETH" }
            ],
            "Inter Miami": [
                { address: "0xce43e305434571Ed0a3fbb2641ab893E7f32307d", bet: "10 ETH" }
            ],
            Draw: [
                { address: "0x970577616e899c32F9a734aC35537c1e6B3A4D69", bet: "1.5 ETH" }
            ]
        }
    }
];