import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "Loading...",
        location: "",
        avatar_url: "",
      },
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/ranjay17");
    const json = await data.json();
    this.setState({ userInfo: json });
  }

  render() {
    const { name, location, avatar_url} = this.state.userInfo;

    return (
      <div className="max-w-sm mx-auto bg-white rounded-xl shadow-md hover:shadow-lg transition p-6 text-center">
        <img
          src={avatar_url}
          alt={name}
          className="w-24 h-24 rounded-full mx-auto mb-4 shadow"
        />

        <h2 className="text-xl font-bold text-gray-800">Name: {name}</h2>
        <h3 className="text-gray-600">Location: {location}</h3>
        <h4 className="text-gray-500 mt-2">Contact: {this.props.contact}</h4>
      </div>
    );
  }
}

export default UserClass;
