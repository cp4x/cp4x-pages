(() => {

    const CONFIG =
        window.CP4X_CONFIG;


    const page =
        document.body.dataset.page;


    const base =
        document.body.dataset.base || "./";


    const content =
        document.getElementById(
            "pageContent"
        );


    const nav =
        document.getElementById(
            "navigation"
        );


    /*
    ========================================================
    GLOBAL COLORS
    ========================================================
    */

    document.documentElement.style.setProperty(
        "--status-color",
        CONFIG.project.status.color
    );


    document.documentElement.style.setProperty(
        "--cursor-color",
        CONFIG.cursor.color
    );


    /*
    ========================================================
    NAVIGATION
    ========================================================
    */

    const navItems = [
        {
            id: "home",
            text: "~/home",
            url: base
        },

        {
            id: "development",
            text: "~/development",
            url: base + "development/"
        },

        {
            id: "projects",
            text: "~/projects",
            url: base + "projects/"
        }
    ];


    navItems.forEach(item => {

        const a =
            document.createElement("a");

        a.href =
            item.url;

        a.textContent =
            item.text;


        if (item.id === page) {
            a.classList.add("active");
        }


        nav.appendChild(a);

    });


    /*
    ========================================================
    HELPERS
    ========================================================
    */

    function tags(items) {

        return `
            <div class="tags">
                ${items.map(
                    item =>
                        `<span class="tag">${item}</span>`
                ).join("")}
            </div>
        `;

    }


    function socials() {

        return CONFIG.profile.socials.map(
            social => `

                <a
                    class="button"
                    href="${social.url}"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    ${social.name} ↗
                </a>

            `
        ).join("");

    }


    /*
    ========================================================
    HOME PAGE
    ========================================================
    */

    function renderHome() {

        content.innerHTML = `

            <div class="prompt">
                dev@cp4x:~$
                <span class="command">
                    whoami
                </span>
            </div>


            <div class="eyebrow">
                Developer Portal
            </div>


            <h1>
                ${CONFIG.profile.name}
            </h1>


            <p class="subtitle">
                ${CONFIG.profile.tagline}
            </p>


            <p class="subtitle">
                ${CONFIG.profile.description}
            </p>


            <div class="actions">
                ${socials()}
            </div>


            <div class="project-preview">

                <div class="eyebrow">
                    Currently Building
                </div>


                <h2>
                    ${CONFIG.project.name}
                </h2>


                <div class="status">

                    <span class="status-dot"></span>

                    ${CONFIG.project.status.text}

                </div>


                <p class="subtitle">
                    ${CONFIG.project.focus}
                </p>


                ${tags(
                    CONFIG.project.stack
                )}


                <div class="actions">

                    <a
                        class="button primary"
                        href="${base}development/"
                    >
                        See What I'm Building →
                    </a>

                </div>

            </div>

        `;

    }


    /*
    ========================================================
    DEVELOPMENT PAGE
    ========================================================
    */

    function renderDevelopment() {

        const updates =
            CONFIG.updates.map(
                (update, index) => `

                    <article class="log-entry">

                        ${
                            index === 0
                                ? `<span class="latest">LATEST</span>`
                                : ""
                        }

                        <div class="log-date">
                            ${update.date}
                        </div>


                        <h3>
                            ${update.title}
                        </h3>


                        <p>
                            ${update.description}
                        </p>


                        ${tags(
                            update.tags
                        )}

                    </article>

                `
            ).join("");


        content.innerHTML = `

            <div class="prompt">
                dev@cp4x:~$
                <span class="command">
                    current-project
                </span>
            </div>


            <div class="eyebrow">
                Currently Building
            </div>


            <h1>
                ${CONFIG.project.name}
            </h1>


            <div class="status">

                <span class="status-dot"></span>

                ${CONFIG.project.status.text}

            </div>


            <div class="cards">

                <div class="card">

                    <div class="card-label">
                        Current Focus
                    </div>

                    <div class="card-value">
                        ${CONFIG.project.focus}
                    </div>

                </div>


                <div class="card">

                    <div class="card-label">
                        Project Type
                    </div>

                    <div class="card-value">
                        ${CONFIG.project.type}
                    </div>

                </div>


                <div class="card">

                    <div class="card-label">
                        Development Updates
                    </div>

                    <div class="card-value">
                        ${CONFIG.updates.length}
                    </div>

                </div>


                <div class="card">

                    <div class="card-label">
                        Technologies
                    </div>

                    <div class="card-value">
                        ${CONFIG.project.stack.length}
                    </div>

                </div>

            </div>


            <div class="project-preview">

                <div class="eyebrow">
                    About
                </div>

                <p class="subtitle">
                    ${CONFIG.project.description}
                </p>

                ${tags(
                    CONFIG.project.stack
                )}

            </div>


            <div class="activity">

                <div class="eyebrow">
                    Current Activity
                </div>


                <div class="activity-line">
                    status:
                    <span class="activity-value">
                        ${CONFIG.project.activity.status}
                    </span>
                </div>


                <div class="activity-line">
                    working_on:
                    <span class="activity-value">
                        ${CONFIG.project.activity.workingOn}
                    </span>
                </div>


                <div class="activity-line">
                    next:
                    <span class="activity-value">
                        ${CONFIG.project.activity.next}
                    </span>
                </div>


                <div class="activity-line">
                    build:
                    <span class="activity-value">
                        ${CONFIG.project.activity.build}
                    </span>

                    <span class="blink"></span>
                </div>

            </div>


            <section class="devlog">

                <div class="devlog-heading">

                    <div>

                        <div class="eyebrow">
                            Development Log
                        </div>

                        <h2>
                            Latest Updates
                        </h2>

                    </div>


                    <div
                        id="lastUpdated"
                        class="last-updated"
                    >
                        Last updated...
                    </div>

                </div>


                <div class="log-list">
                    ${updates}
                </div>

            </section>

        `;


        startLastUpdated();

    }


    /*
    ========================================================
    PROJECTS PAGE
    ========================================================
    */

    function renderProjects() {

        const projects =
            CONFIG.projects.map(
                project => `

                    <article
                        class="project-card"
                        style="
                            --status-color:
                            ${project.color};
                        "
                    >

                        <div class="status">

                            <span class="status-dot"></span>

                            ${project.status}

                        </div>


                        <h2>
                            ${project.name}
                        </h2>


                        <p class="subtitle">
                            ${project.description}
                        </p>


                        ${tags(
                            project.stack
                        )}

                    </article>

                `
            ).join("");


        content.innerHTML = `

            <div class="prompt">
                dev@cp4x:~$
                <span class="command">
                    ls ./projects
                </span>
            </div>


            <div class="eyebrow">
                Projects
            </div>


            <h1>
                Things I've Built
            </h1>


            <p class="subtitle">
                Current projects, experiments,
                and things I've worked on.
            </p>


            <div class="project-list">
                ${projects}
            </div>

        `;

    }


    /*
    ========================================================
    LAST UPDATED
    ========================================================
    */

    function startLastUpdated() {

        if (!CONFIG.updates.length) {
            return;
        }


        const output =
            document.getElementById(
                "lastUpdated"
            );


        const date =
            new Date(
                CONFIG.updates[0].time
            );


        function relative() {

            let seconds =
                Math.floor(
                    (
                        Date.now() -
                        date.getTime()
                    ) / 1000
                );


            seconds =
                Math.max(
                    0,
                    seconds
                );


            let result;


            if (seconds < 5) {

                result =
                    "just now";

            }

            else if (seconds < 60) {

                result =
                    `${seconds} seconds ago`;

            }

            else {

                const minutes =
                    Math.floor(
                        seconds / 60
                    );


                if (minutes < 60) {

                    result =
                        `${minutes} minute${
                            minutes === 1
                                ? ""
                                : "s"
                        } ago`;

                }

                else {

                    const hours =
                        Math.floor(
                            minutes / 60
                        );


                    if (hours < 24) {

                        result =
                            `${hours} hour${
                                hours === 1
                                    ? ""
                                    : "s"
                            } ago`;

                    }

                    else {

                        const days =
                            Math.floor(
                                hours / 24
                            );


                        result =
                            `${days} day${
                                days === 1
                                    ? ""
                                    : "s"
                            } ago`;

                    }

                }

            }


            output.textContent =
                "Last updated " +
                result;

        }


        relative();


        setInterval(
            relative,
            1000
        );

    }


    /*
    ========================================================
    CUSTOM CURSOR
    ========================================================
    */

    function setupCursor() {

        if (
            !CONFIG.cursor.enabled ||
            !window.matchMedia(
                "(pointer: fine)"
            ).matches
        ) {
            return;
        }


        document.body.classList.add(
            "custom-cursor"
        );


        const dot =
            document.querySelector(
                ".cursor-dot"
            );


        const ring =
            document.querySelector(
                ".cursor-ring"
            );


        let x = 0;
        let y = 0;

        let ringX = 0;
        let ringY = 0;


        document.addEventListener(
            "mousemove",
            event => {

                x =
                    event.clientX;

                y =
                    event.clientY;


                dot.style.left =
                    x + "px";

                dot.style.top =
                    y + "px";


                dot.style.opacity =
                    "1";

                ring.style.opacity =
                    ".55";

            }
        );


        function animate() {

            ringX +=
                (x - ringX) *
                0.16;


            ringY +=
                (y - ringY) *
                0.16;


            ring.style.left =
                ringX + "px";

            ring.style.top =
                ringY + "px";


            requestAnimationFrame(
                animate
            );

        }


        animate();


        document.addEventListener(
            "mouseover",
            event => {

                if (
                    event.target.closest(
                        "a, button"
                    )
                ) {

                    ring.classList.add(
                        "hover"
                    );

                }

            }
        );


        document.addEventListener(
            "mouseout",
            event => {

                if (
                    event.target.closest(
                        "a, button"
                    )
                ) {

                    ring.classList.remove(
                        "hover"
                    );

                }

            }
        );

    }


    /*
    ========================================================
    RENDER CURRENT PAGE
    ========================================================
    */

    switch (page) {

        case "development":

            renderDevelopment();

            break;


        case "projects":

            renderProjects();

            break;


        default:

            renderHome();

            break;

    }


    setupCursor();

})();
