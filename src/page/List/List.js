import React from "react";
import Todo from "../../components/Todo";
import Footer from "../../components/Footer"
import Header from "../../components/Header";

export default function List() {
    return (
        <div className="container-gg plr-15">
            <Header />
            <Todo />
            <Footer />
        </div>
    )
}