const Layout = ({children}) => {
  return (
    <>
    <nav style={{
      border: "1px solid red",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: "20px",
      padding: "1rem 0"
    }}>
        <p>Logo</p>
        <ul style={{
          display: "flex",
          gap: "10px"
        }}>
            <li>Default</li>
            <li>Layout</li>
            <li>For all pages</li>
        </ul>
    </nav>
    {children}
    </>
  )
}

export default Layout