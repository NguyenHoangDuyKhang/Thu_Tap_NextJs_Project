'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function SystemPage() {
  const router = useRouter();

  useEffect(() => {
    const user = localStorage.getItem('user');
    if (!user) {
      router.push('/client'); // Nếu chưa đăng nhập, chuyển hướng về auth
    }
  }, [router]);

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome to the system!</p>
    </div>
  );
}