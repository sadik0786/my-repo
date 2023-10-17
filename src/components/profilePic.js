import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";



export const ProfilePic = () => {
    useEffect(() => {
        const textElement = document.querySelector(".text p");
        textElement.innerHTML = textElement.innerText
            .split("")
            .map((char, i) =>
                `<span style="transform:rotate(${i * 7.5}deg)">${char}</span>`
            )
            .join("");
    }, []);
    return (
        <Box className="section_one">
            <Box className="circle">
                {/* <Box className="logo"></Box> */}
                <Box className="text">
                    <p>Sadik Ali - Creative UI Designer And Developer - </p>
                </Box>
            </Box>
        </Box>
    )
}
