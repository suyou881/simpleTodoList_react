import React from "react";
import { Route, Routes, useParams, Link } from "react-router-dom"


export default function Rooms(){
    return (
        <>
            <h2> 방 소개 </h2>
            <Link to="bludRoom">파란 방입니다</Link>
            <br />
            <Link to="greenRoooom">초록 방입니다</Link>
            <br />
        <Routes>
            <Route path=":roomId" element={<Room/>}></Route>
            <Route exact path="/" element={<h3>방을 선택해 주세요.</h3>}></Route>
        </Routes>
        </>
    )
}

function Room(){
    const {roomId} = useParams();
    return <h2>{`${roomId} 방을 선택하셨습니다.`}</h2>
}