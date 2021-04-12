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
      },
      error: (error) => {
        console.log('AJAX ERROR: ', error);
      }
    });
    this.setState({
      formStep: this.state.formStep++
    });
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
          <form onSubmit={this.click}>
            <input type="text" placeholder="Full Name" require/>
            <input type="text" placeholder="Email Address" require/>
            <input type="text" placeholder="Password" require/>

          </form>
        </div>
      )
    } else if (this.state.formStep === 2) {
      return(
        <div>

        </div>
      )
    } else if (this.state.formStep === 3) {
      return(
        <div>

        </div>
      )
    }
  };
};

ReactDOM.render(<App />, document.getElementById('app'));