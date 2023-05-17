function Card(props) {
  //   console.log(props);

  return (
    <div className="card">
      <img src={props.user.image} />
      <h5>{props.user.first_name}</h5>
      <p>{props.user.email}</p>
    </div>
  );
}

export default Card;
