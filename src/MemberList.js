import React from 'react'

const MemberList = ({ value }) => {

  console.log(value)

  const data = value?.map((el, i) => {
    return (
      <tr key={i}>
        <th scope="row">{i}</th>
        <td>{el.name}</td>
        <td>{el.email}</td>
        <td>{el.phone}</td>
        <td>{el.address}</td>
      </tr>
    )
  })

  return (
    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
          <th scope="col">Phone Number</th>
          <th scope="col">Address</th>
        </tr>
      </thead>
      <tbody>
        {data}
      </tbody>
    </table>
  )
}

export default MemberList