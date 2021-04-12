class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formStep: 0,
      formNum: 0,
      name: '',
      email: '',
      password: '',
      address1: '',
      address2: '',
      city: '',
      state: '',
      zip: '',
      phone: '',
      cc: '',
      exp: '',
      cvv: '',
      billZip: '',
    };
    this.click = this.click.bind(this);
    this.change = this.change.bind(this);
  };

  change() {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  click(e) {
    e.preventDefault();
    $.ajax({
      url: '/',
      type: 'POST',
      data: JSON.stringify(this.state),
      contentType: 'application/json',
      success: (data) => {
        if (this.state.formStep === 4) {
          this.setState({
            formStep: 0,
            formNum: data.length + 1
          });
        } else {
          this.setState({
            formStep: this.state.formStep + 1
          });
        }
      },
      error: (error) => {
        console.log('AJAX ERROR: ', error);
      }
    });
  };

  render() {
    if (this.state.formStep === 0) {
      return(
        <div>
          <form>
            <input type="button" value="Proceed to Checkout" onClick={this.click}/>
          </form>
        </div>
      )
    } else if (this.state.formStep === 1) {
      return(
        <div>
          <br/>
          <form onSubmit={this.click}>
            <input type="text" name="name" placeholder="Full Name" required onChange={this.change}/>
            <input type="text" name="email" placeholder="Email Address" required onChange={this.change}/>
            <input type="text" name="password" placeholder="Password" required onChange={this.change}/>
            <input type="submit" value="Next"/>
          </form>
        </div>
      )
    } else if (this.state.formStep === 2) {
      return(
        <div>
          <form onSubmit={this.click}>
            <input type="text" name="address1" placeholder="Address Line 1" required onChange={this.change}/>
            <input type="text" name="address2" placeholder="Address Line 2" onChange={this.change}/>
            <input type="text" name="city" placeholder="City" required onChange={this.change}/>
            <input type="text" name="state" placeholder="State" required onChange={this.change}/>
            <input type="text" name="zip" placeholder="Zipcode" required onChange={this.change}/>
            <input type="text" name="phone" placeholder="Phone Number" required onChange={this.change}/>
            <input type="submit" value="Next"/>
          </form>
        </div>
      )
    } else if (this.state.formStep === 3) {
      return(
        <div>
          <br/>
          <form onSubmit={this.click}>
            <input type="text" name="cc" placeholder="Credit Card Number" required onChange={this.change}/>
            <input type="text" name="exp" placeholder="Expiration Date" required onChange={this.change}/>
            <input type="text" name="cvv" placeholder="CVV" required onChange={this.change}/>
            <input type="text" name="billZip" placeholder="Billing Zipcode" required onChange={this.change}/>
            <input type="submit" value="Next"/>
          </form>
        </div>
      )
    } else if (this.state.formStep === 4) {
      return (
        <div>
          <table>
            <thead>
              <tr>
                <th>Full Name</th>
                <th>Email</th>
                <th>Password</th>
                <th>Address Line 1</th>
                <th>Address Line 2</th>
                <th>City</th>
                <th>State</th>
                <th>Zipcode</th>
                <th>Phone Number</th>
                <th>Credit Card Number</th>
                <th>Expiration Date</th>
                <th>CVV Number</th>
                <th>Billing Zipcode</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{this.state.name}</td>
                <td>{this.state.email}</td>
                <td>{this.state.password}</td>
                <td>{this.state.address1}</td>
                <td>{this.state.address2}</td>
                <td>{this.state.city}</td>
                <td>{this.state.state}</td>
                <td>{this.state.zip}</td>
                <td>{this.state.phone}</td>
                <td>{this.state.cc}</td>
                <td>{this.state.exp}</td>
                <td>{this.state.cvv}</td>
                <td>{this.state.billZip}</td>
              </tr>
            </tbody>
          </table>
          Complete Your Purchase
          <form onClick={this.click}>
            <input type="button" value="Purchase"/>
          </form>
        </div>
      )
    }
  };
};

ReactDOM.render(<App />, document.getElementById('app'));