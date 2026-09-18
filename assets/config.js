window.CP4X_CONFIG = {

    /*
    ========================================================
    PROFILE
    ========================================================
    */

    profile: {

        name:
            "cp4x",

        tagline:
            "Developer • Creator • Building things",

        description:
            "Building projects with Lua, Python, UI, and whatever else catches my attention.",


        socials: [

            {
                name:
                    "GitHub",

                url:
                    "https://github.com/cp4x"
            },

            {
                name:
                    "YouTube",

                url:
                    "https://www.youtube.com/@cp4.x"
            },

            {
                name:
                    "Development Discord",

                url:
                    "https://discord.gg/mes2W7prwf"
            }

        ]

    },


    /*
    ========================================================
    CURRENT PROJECT
    ========================================================

    STATUS COLORS

    GREEN
    #36ffa8

    YELLOW
    #ffd84d

    ORANGE
    #ff9f43

    RED
    #ff4d5a

    BLUE
    #4da6ff

    WHITE
    #e8efec

    PURPLE
    #b678ff
    */

    project: {

        name:
            "Vitality's Hub",


        status: {

            text:
                "Active Development",

            color:
                "#36ffa8"

        },


        focus:
            "UI Library + Live Services",


        type:
            "Lua Development",


        description:
            "Currently improving the UI library, live-service architecture, module system, and overall developer experience.",


        stack: [

            "Lua",
            "Python",
            "UI",
            "Live Services"

        ],


        activity: {

            status:
                "online",

            workingOn:
                "UI improvements",

            next:
                "module updates",

            build:
                "development"

        }

    },


    /*
    ========================================================
    CURSOR
    ========================================================
    */

    cursor: {

        enabled:
            true,

        color:
            "#36ffa8"

    },


    /*
    ========================================================
    DEVELOPMENT LOG
    ========================================================

    NEWEST UPDATE MUST GO FIRST.

    The first update automatically controls:

    "Last updated X seconds ago"
    */

    updates: [

        {
            time:
                "2026-09-18T12:30:00-04:00",

            date:
                "September 18, 2026",

            title:
                "Multi-Page Dev Portal",

            description:
                "Started restructuring the cp4x development portal into separate Home, Development, and Projects pages.",

            tags: [

                "Website",
                "GitHub Pages",
                "UI"

            ]
        },


        {
            time:
                "2026-09-18T11:00:00-04:00",

            date:
                "September 18, 2026",

            title:
                "cp4x Dev Portal",

            description:
                "Created the public development portal for showing what I am currently working on.",

            tags: [

                "Website",
                "cp4x"

            ]
        },


        {
            time:
                "2026-09-18T10:15:00-04:00",

            date:
                "September 18, 2026",

            title:
                "Discord Development Presence",

            description:
                "Finished setting up my Discord Rich Presence with animated terminal artwork and development links.",

            tags: [

                "Discord",
                "RPC"

            ]
        }

    ],


    /*
    ========================================================
    PROJECTS PAGE
    ========================================================

    OPTIONAL PROJECT BUTTON:

    Add this to any project:

    button: {
        text: "Join Discord ↗",
        url: "https://..."
    }

    If "button" is not present,
    no button will be displayed.
    */

    projects: [

        {
            name:
                "Vitality's Hub",

            status:
                "Active Development",

            color:
                "#36ffa8",

            description:
                "A modular Lua project with a custom UI system, live-service architecture, and multiple game modules.",

            stack: [

                "Lua",
                "UI",
                "Live Services"

            ],


            /*
            ----------------------------------------
            VITALITY'S HUB DISCORD BUTTON
            ----------------------------------------

            Change this URL if Vitality has a
            different Discord than your dev server.
            */

            button: {

                text:
                    "Join Discord ↗",

                url:
                    "https://discord.gg/JnEJw9UYst"

            }
        },


        {
            name:
                "cp4x Dev Portal",

            status:
                "Active",

            color:
                "#36ffa8",

            description:
                "My personal development portal for projects, development updates, and social links.",

            stack: [

                "HTML",
                "CSS",
                "JavaScript"

            ]

            /*
            No button here, so this project
            will not display an action button.
            */
        }

    ]

};
