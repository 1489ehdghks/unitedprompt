import axios from 'axios';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      name: '',
    };
  }

  handleEmailChange = (e) => {
    this.setState({ email: e.target.value });
  };

  handlePasswordChange = (e) => {
    this.setState({ password: e.target.value });
  };

  handleNameChange = (e) => {
    this.setState({ name: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { email, password, name } = this.state;
    axios
      .post('/api/auth/signup', { email, password, name })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    const { email, password, name } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={this.handleEmailChange}
          placeholder="Email"
        />
        <input
          type="password"
          value={password}
          onChange={this.handlePasswordChange}
          placeholder="Password"
        />
        <input
          type="text"
          value={name}
          onChange={this.handleNameChange}
          placeholder="Name"
        />
        <button type="submit">Sign Up</button>
      </form>
    );
  }
}