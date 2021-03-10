import Layout from "../../components/Shared/layout/Layout"


const Profile = (props) => {
  console.log(props.user)
  return (
    <Layout user={props.user}>
      <div>hi {props.user.username}</div>
      <div>{props.user.playlist}</div>
    </Layout>
  )
}

export default Profile