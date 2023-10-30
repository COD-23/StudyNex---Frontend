import CreateJoin from '@/components/auth/CreateJoin';
import { userDetailsStore } from '@/store/userStore';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import React from 'react'

const isLoggedIn = () => {
  const token = cookies().get("token")?.value;
  if (!token) {
    redirect("/login");
  }
};

function Create() {
  isLoggedIn();
  return (
    <div>
        <CreateJoin/>
    </div>
  )
}

export default Create;