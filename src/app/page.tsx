"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const MyComponent = () => {
    const router = useRouter();

    useEffect(() => {
        router.push("/login");
    }, [router]);

    return null;
};

export default MyComponent;