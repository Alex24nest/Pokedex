export default function Header(props) {
  const { handleToggleMenu } = props
   
  return (
    <header>
      <button onClick={handleToggleMenu} className="open-nav-button type-container">
        <i className="fa-solid fa-bars"></i>
        <h1 className="text-gradient">Pokedex</h1>
      </button>
    </header>
  )
}