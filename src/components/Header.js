import React from 'react'

function Header() {
    return (
        <header>
            <nav class="container">
                <ul>
                    <li><a className='nav-title' href="">React</a></li>
                    <li><a href="https://react.dev/learn/describing-the-ui">The UI</a></li>
                    <li><a href="https://react.dev/learn/adding-interactivity">Interactivity</a></li>
                    <li><a href="https://react.dev/learn/managing-state">Managing State</a></li>
                    <li><a href="https://react.dev/learn/escape-hatches">Escape Hatches</a></li>
                    <li><a href="https://react.dev/learn#using-hooks">Using Hooks</a></li>
                    <li><a href="https://react.dev/learn#components">Components</a></li>
                </ul>
                <div className='button-wrapper'>
                    <button className='resources'><a href="https://react.dev/learn">Resources</a></button>
                </div>
            </nav>
        </header>
    )
}

export default Header