import './Footer.css'

function Footer() {
  const githubRepoUrl = 'https://github.com/aminm19/cv-generator'

  return (
    <footer className="footer">
      <p>
        built by Amin Mojarad | 
        <a 
          href={githubRepoUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          className="github-link"
        >
          GitHub
        </a>
      </p>
    </footer>
  )
}

export default Footer
