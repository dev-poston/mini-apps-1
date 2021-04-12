class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formStep: 0,
      formNum: 0,
      f1: {
        name: '',
        email: '',
        password: ''
      },
      f2: {
        address1: '',
        address2: '',
        city: '',
        state: '',
        zip: '',
        phone: ''
      },
      f3: {
        cc: '',
        exp: '',
        cvv: '',
        billZip: ''
      }
    };
    this.click = this.click.bind(this);
  };

  click(e) {
    console.log('CLICK!');
    e.preventDefault();
    $.ajax({
      url: '/',
      type: 'POST',
      data: JSON.stringify(this.state),
      contentType: 'application/json',
      success: (data) => {
        console.log('AJAX RECEIVED RES: ', data);
        if (this.state.formStep === 4) {
          this.setState({
            formStep: 0
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
    console.log('STEP: ', this.state.formStep);
  };

  render() {
    if (this.state.formStep === 0) {
      return(
        <div>
          <form>
            <input
            type="button"
            value="Proceed to Checkout"
            onClick={this.click}
            />
          </form>
        </div>
      )
    } else if (this.state.formStep === 1) {
      return(
        <div>
          <br/>
          <form onSubmit={this.click}>
            <input type="text" placeholder="Full Name" require/>
            <input type="text" placeholder="Email Address" require/>
            <input type="text" placeholder="Password" require/>
            <input type="submit" value="Next"/>
          </form>
        </div>
      )
    } else if (this.state.formStep === 2) {
      return(
        <div>
          <form onSubmit={this.click}>
            <input type="text" placeholder="Address Line 1" require/>
            <input type="text" placeholder="Address Line 2"/>
            <input type="text" placeholder="City" require/>
            <input type="text" placeholder="Zip" require/>
            <input type="text" placeholder="Phone Number" require/>
            <input type="submit" value="Next"/>
          </form>
        </div>
      )
    } else if (this.state.formStep === 3) {
      return(
        <div>
          <br/>
          <form onSubmit={this.click}>
            <input type="text" placeholder="Credit Card Number" require/>
            <input type="text" placeholder="Expiration Date" require/>
            <input type="text" placeholder="CVV" require/>
            <input type="text" placeholder="Billing Zipcode" require/>
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
                <td>{this.state.f1.fullname}</td>
                <td>{this.state.f1.email}</td>
                <td>{this.state.f1.password}</td>
                <td>{this.state.f2.address1}</td>
                <td>{this.state.f2.address2}</td>
                <td>{this.state.f2.city}</td>
                <td>{this.state.f2.state}</td>
                <td>{this.state.f2.zipcode}</td>
                <td>{this.state.f2.phone}</td>
                <td>{this.state.f3.cc}</td>
                <td>{this.state.f3.exp}</td>
                <td>{this.state.f3.cvv}</td>
                <td>{this.state.f3.billZip}</td>
              </tr>
            </tbody>
          </table>
          Complete Purchase
          <form onClick={this.click}>
            <input type="button" value="Purchase"/>
          </form>
        </div>
      )
    }
  };
};

ReactDOM.render(<App />, document.getElementById('app'));