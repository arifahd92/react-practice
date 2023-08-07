import React from 'react';
import { Link, Route, Routes, useParams } from 'react-router-dom';

export default function HomeDynamic() {
    const dynamiclink = useParams();
    console.log(dynamiclink);
    // {dynamic: "t"}
    console.log(dynamiclink.dynamic);
    // "t"

    return (
        <div>
            i'm home dynamic page
            <br />
            <Link to="/home/inside/dtl">detail</Link>
            <Routes>
                <Route path="/home/inside/dtl" element={<h1>inside home</h1>} />
            </Routes>
        </div>
    );
}

//is page ko dekhne k liye localhost300ke baad home/anything tab jakar i m home dynamic page  op me dikhega