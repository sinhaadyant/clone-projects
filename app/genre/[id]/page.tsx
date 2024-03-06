import { Button } from '@/components/ui/button';
import React from 'react'
type Props = {
    params:{
        id:string;
    },
    searchParams:{
        genre:string
    }
}
const GenrePage = ({params:{id},searchParams:{genre}}:Props) => {
  return (
    <div>Welcome to the genre with ID : {id} and name :{genre}
    <Button variant={"secondary"}>Click Me</Button>
    </div>
  )
}

export default GenrePage