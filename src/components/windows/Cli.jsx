import "./cli.scss"
import MacWindow from './MacWindow'
import TerminalModule from 'react-console-emulator'

const Terminal = TerminalModule.default || TerminalModule

const commands = {
    about: {
        description: 'Learn a little about Anurag.',
        usage: 'about',
        fn: () => "Hi, I'm Anurag Patel. Welcome to my portfolio!"
    },
    skills: {
        description: 'See a sample list of skills.',
        usage: 'skills',
        fn: () => 'React, JavaScript, HTML, CSS, and Git.'
    },
    projects: {
        description: 'See the projects featured in this portfolio.',
        usage: 'projects',
        fn: () => 'Scheds, FinTrack, SecureAuth, ChatStream, and TerminalX. Open the GitHub window for details.'
    },
    contact: {
        description: 'Get a contact reminder.',
        usage: 'contact',
        fn: () => 'Thanks for stopping by! Add your preferred email or social links to this command.'
    },
    github: {
        description: 'Find the project showcase.',
        usage: 'github',
        fn: () => 'Open the GitHub window to browse the project showcase.'
    },
    echo: {
        description: 'Echo a passed string.',
        usage: 'echo <text>',
        fn: (...args) => args.join(' ')
    }
}

const welcomeMessage = [
    'Welcome to Anurag Patel’s portfolio terminal!',
    'Available commands: about, skills, projects, contact, github, echo <text>, help, clear.',
    "Type 'help' for command descriptions."
]

const Cli = ({ windowName, setWindowsState }) => {
    return (
        <MacWindow windowName={windowName} setWindowsState={setWindowsState}>
            <div className="cli-window">
                <Terminal
                    commands={commands}
                    welcomeMessage={welcomeMessage}
                    promptLabel={'anurag_09:~$'}
                    promptLabelStyle={{ color: "yellow" }}
                />


            </div>
        </MacWindow>
    )
}

export default Cli