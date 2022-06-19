export default function Universities(props) {
  console.log("University properties:", props);
  return (
    <ul>
      {props.universities.map((university) => (
        <li>{university.name}</li>
      ))}
    </ul>
  );
}
