
import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';

export const clientsiderendering = () => {
  const [Users, setUser] = useState([]);
  useEffect(() => {
    async function getUsers() {
      const resp = await fetch("https://jsonplaceholder.typicode.com/users");
      setUser(await resp.json());
    }
    getUsers();
  }, []);
  return (
    <div className='container-sm col-8'>
       <Link href="/">
                Back to Home page
            </Link>
      {/* <div >{JSON.stringify(Users)} </div>  */}
  
      <div className="jumbotron mb-5">
        
        <h3 className="mt-3">CSR Client Side Data Fetching</h3>
        <p>Client-side data fetching is useful when your page doesn't require SEO indexing, when you don't need to pre-render your data, or when the content of your pages needs to update frequently. Unlike the server-side rendering APIs, you can use client-side data fetching at the component level.</p>
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
export default clientsiderendering;