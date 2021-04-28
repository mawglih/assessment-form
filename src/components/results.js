const Results = ({
  data
}) => {
  return(
    <div>
      {data.firstName ? (
        <div>
          <h1>Signup successfull</h1>
          <h4>Name: {data.firstName} {data.lastName}</h4>
          <h4>Email: {data.email}</h4>
          {data.orgname && <h4>Organization: {data.orgname}</h4>}
          <h4>EU resident?: {data.euResident}</h4>
          <h4>advances: yes</h4>
          {data.alerts && <h4>alerts: yes</h4>}
          {data.other && <h4>other: yes</h4>}
        </div>
        ) : (
          null
        )
      }
    </div>
  )
}
export default Results;
