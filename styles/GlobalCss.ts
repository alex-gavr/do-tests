import { createGlobalStyle } from 'styled-components';

export const GlobalCss = createGlobalStyle`
    *,
    *::before,
    *::after {
        box-sizing: border-box;
    }

    * {
        margin: 0;
        padding: 0;
        font: var(--ff-body);
    }

    ul,
    ol {
        list-style: none;
    }

    html:focus-within {
        scroll-behavior: smooth;
    }

    html,
    body {
        height: 100%;
        overflow-x: hidden;
    }

    body {
        text-rendering: optimizeSpeed;
        line-height: 1.5;
    }

    a {
        text-decoration: none;
        display: block;
        width: 100%;
        height: 100%;
    }

    img,
    picture,
    svg {
        max-width: 100%;
        display: block;
    }

    h1 {
        font-family: var(--ff-heading);
        line-height: 1.2;
        letter-spacing: 0.09rem;
        font-size: clamp(2rem, 1.7rem + 1.5vw, 3.5rem);
        color: blue;
    }
    h2 {
        font-family: var(--ff-heading);
    }
    h3 {
        font-family: var(--ff-heading);
        font-size: 1.5rem;
        font-size: clamp(1.5rem, 1.3rem + 1vw, 2.5rem);
    }
    p {
        font-family: var(--ff-body);
        letter-spacing: 0.09rem;
    }
    li {
        font-family: var(--ff-body);
    }
    time, label {
        font-family: var(--ff-body);
    }
    button {
        font-family: var(--ff-body);
        letter-spacing: 0.09rem;
    }
    span {
        font-family: var(--ff-body);
    }

    /* SCROLL BAR */
    ::-webkit-scrollbar {
        width: 0.2em;
        height: 0em;
    }
    ::-webkit-scrollbar-track {
        background: black;
        border-radius: 10px;
    }
    
    ::-webkit-scrollbar-thumb {
        background: pink;
        border-radius: 1.5rem;
    }
    ::-webkit-scrollbar-thumb:hover {
        background: blue;
    }
    @supports (scrollbar-color: green, pink) {
        * {
            scrollbar-color: green, pink;
        }
    }

`;

export default GlobalCss;
