import React from 'react'

const about = ({ data: users }) => {

  return (
    <div>{users.length}</div>
  )
}

export async function getServerSideProps(context) {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await res.json()
  return {
    props: { data },
  }
}
export default about