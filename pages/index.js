import Link  from 'next/link'
 const index = () => {
  return (
     <>
<header className="header-container">
<img src='https://www.ust.com/content/dam/ust/images/logos/ust-white-logo.svg' alt='logo'/>
</header>
    <div className='Main-container mt-4'>
      <h1> Next Js POC </h1>
      <p>Welcome to the Next.js POC! </p>
       
     <nav>
      <ul className='topics-list'> 
        <Link href="/"  >
          Home
        </Link>
        <Link href="/clientsiderendering">
          CSR - Client Side Rendering
        </Link>
        <Link href="/serversiderendering">
        Server Side Rendering
        </Link>

      </ul>
     </nav>
     </div>
     </>
  )
}
export default index;