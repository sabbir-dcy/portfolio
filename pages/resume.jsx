import React from 'react'
const Resume = ({ data }) => {

  function createMarkup(file) {
    return { __html: file };
  }

  return (
    <div dangerouslySetInnerHTML={createMarkup(data.resume)}></div>
  )
}


export async function getServerSideProps(context) {
  const res = await fetch('http://localhost:3000/api/resume')
  const data = await res.json()

  return {
    props: { data },
  }
}

export default Resume