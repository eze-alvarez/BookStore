import NavBar from './Navbar'

export default function Layout ({ children }) {
  const divStyle = {
    height: '100vh'
  }
  return (
    <div className={divStyle}>
      <NavBar />
      <div>{children}</div>
    </div>
  )
}
