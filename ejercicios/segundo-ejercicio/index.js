'use strict';

const APP = document.getElementById("app");
const useState = React.useState;

const Avatar = ({ id, name }) => {
  const [ enabled, setEnabled ] = useState(true);

  const src = `https://randomuser.me/api/portraits/women/${id}.jpg`;

  const className = enabled ? "" : "disabled"; 

  return (
    <picture>
      <img 
        src={src} 
        alt="women"
        className={className}
        onClick={ () => {setEnabled(!enabled)}}
        />
      <p>{name}</p>
    </picture>
  )
}

// ReactDOM.render()
ReactDOM.createRoot(APP).render(
  <div className="container">
    <Avatar id={4} name="Ana"/>
    <Avatar id={5} name="María"/>
    <Avatar id={6} name="Sol"/>
    <Avatar id={7} name="Luna"/>
  </div>
)

