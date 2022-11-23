import { useRouter } from "next/router"
import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image  from "next/image";
export default function Details() {

    const {
        query: { id },
    } = useRouter();
    const [UserDetail, setUser] = useState(null);
    useEffect(() => {
        async function getUserDetail() {
            const resp = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
            setUser(await resp.json());
        }
        if (id) {
            getUserDetail();
        }
    }, [id]);
    if (!UserDetail) {
        return null;
    }

    return <div>
      
        <div className="container col-4">
        <div className="card text-center">
            <div className="card-header">
            <h4>  {UserDetail.name} Details</h4>
            </div>
            <div className="card-body">
                <ul class="list-group list-group-flush"> 
                <li class="list-group-item"> UserName : {UserDetail.username}</li>
                <li class="list-group-item"> Email Address : {UserDetail.email}</li>
                <li class="list-group-item"> website : {UserDetail.website}</li>
                <li class="list-group-item"> zipcode : {UserDetail.zipcode}</li>
                <li class="list-group-item">Vestibulum at eros</li>
                </ul>
            </div>
            <div className="card-footer text-muted">
            <Link href="/">
                Back to Home page
            </Link>
            </div>
           
        </div>
        </div>
        <div class="alert alert-info container" role="alert">
        <h5>Client Side Rendering Explaination</h5>
       </div>

    </div>
}