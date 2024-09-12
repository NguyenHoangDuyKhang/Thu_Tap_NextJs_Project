"use client";
import { nprogress } from "@mantine/nprogress";
import { useEffect } from "react";
import { Loader } from '@mantine/core';
export default function Loading() {
    useEffect(() => {
        nprogress.complete();
    }, []);

    return(
        <>
     <Loader/>
    </>
    );
   
}

