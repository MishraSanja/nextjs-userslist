
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export async function getServerSideProps(){
  const resp = await fetch("https://jsonplaceholder.typicode.com/users");
 return{
  props:{
    Users: await resp.json() 
  }
 }
}

export const serversiderendering = ({Users}) => {
   return (
    <div className='container-sm col-8'>
       <Link href="/">
                Back to Home page
            </Link>
      {/* <div >{JSON.stringify(Users)} </div>  */}
  
      <div className="jumbotron mb-5">
        
        <h3 className="mt-3">SSR Server-side Rendering</h3>
         <p> Server-side rendering means using a server to generate HTML from JavaScript modules in response to a URL request. That’s in contrast to client-side rendering, which uses the browser to create HTML using the DOM.
    </p>
    <ul>
      <li>It enables pages to load faster which provides a better user experience.</li>
      <li>It plays an important role in SEO (search engine optimization) and correctly indexes webpages. This happens because Google favors web pages with faster load time.</li>
      <li>It provides body to the HTML pages for all server ships.</li>
    </ul>
    <div class="alert alert-primary" role="alert">
    export async function getServerSideProps(){
  // What it does, It makes any request that you to any services gets all the data and returns the object that has props in it and then those props are sent to react component that renders them
}
</div>
  
   
      </div>
      <h4> List of Users</h4>
        <div>
          <table className=' table-striped table table-bordered text-center'>
            <thead className="thead-dark">
              <tr className="bg-info">
                <th>User ID</th>
                <th>User Name</th>
              </tr>
            </thead>
            <tbody>
            {Users.map((Users) => ( 
            <tr>  
                <td>  
                   <Link href={`/clientsiderendering/${Users.id}`}>  
                   {Users.id}
                  </Link>
                </td>
                <td>{Users.name}</td>
          </tr> ))}
            </tbody>
          </table>
        </div>
    </div>
  )
}
export default serversiderendering;