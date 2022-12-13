'use strict';

const APP = document.getElementById("app");
const useState = React.useState;

const Avatar = ({ id, name, size }) => {
  const [ enabled, setEnabled ] = useState(true);

  const src = `https://randomuser.me/api/portraits/women/${id}.jpg`;

  let pictureClassName = ""
  if(size === "small") {
    pictureClassName = "is-small"
   } else if(size === "large") {
    pictureClassName = "is-large"
   }
  const imgClassName = enabled ? "" : "disabled"; 

  return (
    <picture>
      <img 
        src={src} 
        alt="women"
        className={` ${imgClassName} ${pictureClassName}`}
        onClick={ () => {setEnabled(!enabled)}}
        />
      <p>{name}</p>
    </picture>
  )
}

// ReactDOM.render()
ReactDOM.createRoot(APP).render(
  <div className="container">
    <Avatar id={4} name="Ana" size="small"/>
    <Avatar id={5} name="María"/>
    <Avatar id={6} name="Sol"/>
    <Avatar id={7} name="Luna" size="large"/>
  </div>
)

