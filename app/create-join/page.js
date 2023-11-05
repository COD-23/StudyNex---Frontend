import CreateJoin from '@/components/auth/CreateJoin';
import { isLoggedIn } from '@/lib/isLoggedIn';
import React from 'react'


function Create() {
  isLoggedIn();
  return (
    <div>
        <CreateJoin/>
    </div>
  )
}

export default Create;